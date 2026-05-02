import React, { useState, useEffect, useRef } from "react";

const DOTNET_API_URL = process.env.REACT_APP_DOTNET_API_URL || "";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface MatchedSkill {
  name: string;
  category: string;
  proficiency: number;
  relevance: "high" | "medium" | "low";
}

interface MatchResponse {
  matchScore: number;
  matchedSkills: MatchedSkill[];
  missingSkills: string[];
  topKeywords: string[];
  summary: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const SAMPLE_JD = `We're hiring a Senior Full Stack Engineer to build scalable web applications. 
You'll work with React, TypeScript, and Next.js on the frontend and ASP.NET Core or Node.js on the backend. 
Candidates should have hands-on experience with Azure or AWS, Docker, and CI/CD pipelines. 
SQL Server and Redis experience is required. Knowledge of microservices, REST APIs, 
and real-time WebSocket systems is a strong plus. AI/ML background is a bonus.`;

const GAUGE_RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * GAUGE_RADIUS;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const scoreColor = (s: number) =>
  s >= 75 ? "text-green-400" : s >= 50 ? "text-yellow-400" : "text-red-400";

const gaugeStroke = (s: number) =>
  s >= 75 ? "#4ade80" : s >= 50 ? "#facc15" : "#f87171";

const relevanceBadge = (r: string) => {
  if (r === "high")   return "bg-green-500/20 border-green-500/40 text-green-400";
  if (r === "medium") return "bg-yellow-500/20 border-yellow-500/40 text-yellow-400";
  return "bg-accent-1/10 border-accent-1/30 text-accent-1";
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const SkillMatcher: React.FC = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult]                 = useState<MatchResponse | null>(null);
  const [loading, setLoading]               = useState(false);
  const [error, setError]                   = useState("");
  const [gaugeOffset, setGaugeOffset]       = useState(CIRCUMFERENCE);
  const circleRef = useRef<SVGCircleElement>(null);

  // Animate the gauge ring whenever a new result arrives
  useEffect(() => {
    if (!result) return;
    setGaugeOffset(CIRCUMFERENCE); // reset
    // Double rAF gives the browser time to paint the reset first
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        setGaugeOffset(CIRCUMFERENCE - (result.matchScore / 100) * CIRCUMFERENCE)
      )
    );
  }, [result]);

  const analyze = async () => {
    if (!jobDescription.trim() || loading) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`${DOTNET_API_URL}/api/match`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      });
      if (!res.ok) throw new Error("API error");
      const data: MatchResponse = await res.json();
      setResult(data);
    } catch {
      setError("Could not reach the API. Make sure REACT_APP_DOTNET_API_URL is set and the service is running.");
    } finally {
      setLoading(false);
    }
  };

  // Group matched skills by category for a cleaner display
  const byCategory = result?.matchedSkills.reduce<Record<string, MatchedSkill[]>>(
    (acc, skill) => {
      (acc[skill.category] ??= []).push(skill);
      return acc;
    },
    {}
  ) ?? {};

  return (
    <section id="skill-matcher" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            JD <span className="text-accent-2">Skill Matcher</span>
          </h2>
          <div className="section-divider" />
          <p className="text-text-secondary mt-6 max-w-xl mx-auto leading-relaxed">
            Paste any job description and instantly see how my skills stack up.
            Powered by an{" "}
            <span className="text-accent-1 font-semibold">ASP.NET Core</span> Minimal
            API deployed on <span className="text-accent-2 font-semibold">AWS Lambda</span>.
          </p>
        </div>

        {/* ── Input card ── */}
        <div className="card-base p-6 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Job Description
            </span>
            <button
              onClick={() => setJobDescription(SAMPLE_JD)}
              className="text-xs text-accent-1 hover:text-accent-2 smooth-transition underline"
            >
              Try a sample JD →
            </button>
          </div>

          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here…"
            rows={7}
            className="w-full bg-transparent text-text-primary placeholder-text-secondary/40 text-sm resize-none focus:outline-none leading-relaxed"
          />

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
            <span className="text-xs text-text-secondary tabular-nums">
              {jobDescription.length} characters
            </span>
            <button
              onClick={analyze}
              disabled={!jobDescription.trim() || loading}
              className="btn-primary text-sm py-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Analyzing…
                </span>
              ) : (
                "Analyze Match →"
              )}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center mb-6 bg-red-400/10 border border-red-400/30 rounded-lg py-3 px-4">
            {error}
          </p>
        )}

        {/* ── Results ── */}
        {result && (
          <div className="space-y-5">

            {/* Score + Summary row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

              {/* SVG Gauge */}
              <div className="card-base p-6 flex flex-col items-center justify-center">
                <svg className="-rotate-90 w-36 h-36" viewBox="0 0 120 120">
                  {/* Track */}
                  <circle
                    cx="60" cy="60" r={GAUGE_RADIUS}
                    fill="none" stroke="#2a2f4a" strokeWidth="8"
                  />
                  {/* Fill — animates via CSS transition */}
                  <circle
                    ref={circleRef}
                    cx="60" cy="60" r={GAUGE_RADIUS}
                    fill="none"
                    stroke={gaugeStroke(result.matchScore)}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={gaugeOffset}
                    style={{ transition: "stroke-dashoffset 1s ease-out, stroke 0.4s" }}
                  />
                </svg>
                <p className={`text-4xl font-bold tabular-nums mt-1 ${scoreColor(result.matchScore)}`}>
                  {result.matchScore}%
                </p>
                <p className="text-xs text-text-secondary mt-1 uppercase tracking-widest">
                  Match Score
                </p>
              </div>

              {/* Summary + Keywords */}
              <div className="sm:col-span-2 card-base p-6 flex flex-col justify-between gap-4">
                <p className="text-text-primary text-sm leading-relaxed">{result.summary}</p>

                <div>
                  <p className="text-xs uppercase tracking-widest text-text-secondary mb-2">
                    Top Keywords Detected
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {result.topKeywords.map((kw) => (
                      <span
                        key={kw}
                        className="px-2 py-1 bg-accent-1/10 border border-accent-1/30 text-accent-1 rounded text-xs font-mono"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Matched skills by category */}
            <div className="card-base p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-5 flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Matched Skills ({result.matchedSkills.length})
              </h3>
              <div className="space-y-4">
                {Object.entries(byCategory).map(([category, skills]) => (
                  <div key={category}>
                    <p className="text-xs text-text-secondary mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`px-3 py-1 border rounded-full text-xs font-medium smooth-transition ${relevanceBadge(skill.relevance)}`}
                          title={`Proficiency: ${skill.proficiency}% · Relevance: ${skill.relevance}`}
                        >
                          {skill.name}
                          <span className="ml-1 opacity-60 font-mono">{skill.proficiency}%</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Not mentioned */}
            {result.missingSkills.length > 0 && (
              <div className="card-base p-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4 flex items-center gap-2">
                  <span className="text-text-secondary">○</span>
                  Not Mentioned in This JD ({result.missingSkills.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.missingSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary/30 border border-border text-text-secondary rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Attribution */}
            <p className="text-center text-xs text-text-secondary pt-2">
              Analysis by{" "}
              <span className="text-accent-1 font-mono">ASP.NET Core Minimal API</span>
              {" · "}
              <span className="text-accent-2 font-mono">AWS Lambda</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillMatcher;
