import os
from groq import Groq
from rank_bm25 import BM25Okapi
from knowledge_base import DOCUMENTS


class RAGEngine:
    def __init__(self):
        self.client = Groq(api_key=os.environ["GROQ_API_KEY"])
        tokenized = [doc["content"].lower().split() for doc in DOCUMENTS]
        self.bm25 = BM25Okapi(tokenized)
        self.documents = DOCUMENTS

    def retrieve(self, query: str, k: int = 3):
        scores = self.bm25.get_scores(query.lower().split())
        top_k = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)[:k]
        return [self.documents[i] for i in top_k]

    def query(self, question: str):
        relevant_docs = self.retrieve(question)
        context = "\n\n".join([
            f"[{doc['title']}]\n{doc['content']}" for doc in relevant_docs
        ])

        prompt = f"""You are an AI assistant on Fozan Rizvi's portfolio website. Your job is to help visitors
learn about Fozan's professional background, skills, projects, and experience.

Use ONLY the context below to answer. Be concise, professional, and friendly.
If the answer is not in the context, say you don't have that specific information but point them to fozanrizvi.com.

Context:
{context}

Question: {question}

Answer:"""

        response = self.client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=400,
            temperature=0.3
        )

        return {
            "answer": response.choices[0].message.content.strip(),
            "sources": [doc["title"] for doc in relevant_docs]
        }
