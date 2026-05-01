import json
import os
from rag_engine import RAGEngine

rag = RAGEngine()

ALLOWED_ORIGINS = [
    "https://fozanrizvi.com",
    "https://www.fozanrizvi.com",
    "http://localhost:3000",
]

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
}


def respond(status_code: int, body: dict):
    return {
        "statusCode": status_code,
        "headers": CORS_HEADERS,
        "body": json.dumps(body),
    }


def handler(event, context):
    method = event.get("requestContext", {}).get("http", {}).get("method", "GET")
    path = event.get("rawPath", "/")

    # Handle CORS preflight
    if method == "OPTIONS":
        return respond(200, {})

    # GET /health
    if method == "GET" and path == "/health":
        return respond(200, {"status": "ok", "message": "RAG API is running"})

    # GET /suggestions
    if method == "GET" and path == "/suggestions":
        return respond(200, {
            "questions": [
                "What technologies does Fozan specialize in?",
                "Tell me about Fozan's AI and RAG experience",
                "What projects has Fozan built?",
                "What is Fozan's cloud experience?",
                "How many years of experience does Fozan have?",
                "What backend frameworks does Fozan use?",
                "Has Fozan worked with microservices?",
                "What frontend skills does Fozan have?",
            ]
        })

    # POST /ask
    if method == "POST" and path == "/ask":
        try:
            body = json.loads(event.get("body") or "{}")
            question = body.get("question", "").strip()

            if not question:
                return respond(400, {"detail": "Question cannot be empty"})
            if len(question) > 500:
                return respond(400, {"detail": "Question too long (max 500 characters)"})

            result = rag.query(question)
            return respond(200, result)
        except Exception as e:
            return respond(500, {"detail": str(e)})

    return respond(404, {"detail": "Not found"})

