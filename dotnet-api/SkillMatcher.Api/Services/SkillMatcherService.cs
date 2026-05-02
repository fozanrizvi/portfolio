using System.Text.RegularExpressions;
using SkillMatcher.Api.Models;

namespace SkillMatcher.Api.Services;

public static class SkillMatcherService
{
    // -----------------------------------------------------------------------
    // Fozan's skills — update proficiency values to keep in sync with the
    // Skills section of the portfolio.
    // -----------------------------------------------------------------------
    private static readonly List<SkillEntry> Skills =
    [
        // Frontend
        new("React",        "Frontend",     98, ["react", "react.js", "reactjs"]),
        new("TypeScript",   "Frontend",     90, ["typescript", "ts"]),
        new("JavaScript",   "Frontend",     95, ["javascript", "js", "es6", "es2015", "ecmascript"]),
        new("Next.js",      "Frontend",     90, ["next.js", "nextjs", "next js"]),
        new("HTML5",        "Frontend",     98, ["html", "html5"]),
        new("CSS3",         "Frontend",     95, ["css", "css3"]),
        new("Tailwind CSS", "Frontend",     95, ["tailwind", "tailwindcss", "tailwind css"]),
        new("Sass/SCSS",    "Frontend",     88, ["sass", "scss"]),

        // Backend
        new("ASP.NET Core", "Backend",      90, ["asp.net", "aspnet", "asp.net core", "dotnet", ".net", ".net core", "net core", "c#", "csharp"]),
        new("Node.js",      "Backend",      85, ["node.js", "nodejs", "node"]),
        new("Python",       "Backend",      85, ["python", "py"]),
        new("FastAPI",      "Backend",      85, ["fastapi", "fast api"]),
        new("REST APIs",    "Backend",      95, ["rest", "restful", "rest api", "rest apis", "web api", "http api"]),
        new("WebSockets",   "Backend",      85, ["websockets", "websocket", "signalr", "real-time", "realtime"]),

        // Database
        new("SQL Server",   "Database",     90, ["sql server", "mssql", "azure sql", "t-sql", "tsql", "sql"]),
        new("Redis",        "Database",     80, ["redis", "caching"]),

        // Cloud
        new("Azure",        "Cloud",        88, ["azure", "microsoft azure"]),
        new("AWS",          "Cloud",        88, ["aws", "amazon web services", "s3", "lambda", "ec2"]),

        // DevOps
        new("Docker",       "DevOps",       88, ["docker", "containerization", "containers"]),
        new("Kubernetes",   "DevOps",       82, ["kubernetes", "k8s"]),
        new("CI/CD",        "DevOps",       90, ["ci/cd", "cicd", "devops", "github actions", "azure devops", "continuous integration", "continuous deployment"]),

        // Architecture
        new("Microservices","Architecture", 88, ["microservices", "microservice", "distributed systems", "distributed"]),

        // AI
        new("AI / RAG",     "AI",           82, ["ai", "ml", "machine learning", "artificial intelligence", "llm", "rag", "openai", "generative ai", "nlp"]),
    ];

    // -----------------------------------------------------------------------
    // Public API
    // -----------------------------------------------------------------------
    public static MatchResponse Analyze(string jobDescription)
    {
        if (string.IsNullOrWhiteSpace(jobDescription))
            return new MatchResponse(0, [], [], [], "Please provide a job description.");

        var normalizedJd = Normalize(jobDescription);

        var matchedSkills   = new List<MatchedSkill>();
        var missingSkills   = new List<string>();
        var keywordFreq     = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);

        foreach (var skill in Skills)
        {
            string? bestAlias = null;
            var     maxCount  = 0;

            foreach (var alias in skill.Aliases)
            {
                var count = CountOccurrences(normalizedJd, alias);
                if (count > maxCount)
                {
                    maxCount  = count;
                    bestAlias = alias;
                }
            }

            if (maxCount > 0 && bestAlias is not null)
            {
                var relevance = maxCount >= 3 ? "high" : maxCount >= 2 ? "medium" : "low";
                matchedSkills.Add(new MatchedSkill(skill.Name, skill.Category, skill.Proficiency, relevance));
                keywordFreq[bestAlias] = maxCount;
            }
            else
            {
                missingSkills.Add(skill.Name);
            }
        }

        var matchScore = (int)Math.Round((double)matchedSkills.Count / Skills.Count * 100);

        var topKeywords = keywordFreq
            .OrderByDescending(kv => kv.Value)
            .Take(8)
            .Select(kv => kv.Key)
            .ToList();

        return new MatchResponse(matchScore, matchedSkills, missingSkills, topKeywords, BuildSummary(matchScore, matchedSkills.Count));
    }

    // -----------------------------------------------------------------------
    // Helpers
    // -----------------------------------------------------------------------
    private static string Normalize(string text) =>
        text.ToLowerInvariant().Replace("-", " ");

    private static int CountOccurrences(string text, string term)
    {
        // Whole-word matching so "node" doesn't match inside "nodejs", etc.
        var pattern = $@"(?<![a-z0-9]){Regex.Escape(term)}(?![a-z0-9])";
        return Regex.Matches(text, pattern, RegexOptions.IgnoreCase).Count;
    }

    private static string BuildSummary(int score, int matchCount) => score switch
    {
        >= 80 => $"Excellent match! {matchCount} of your skills align — you're a strong candidate.",
        >= 60 => $"Good match. {matchCount} skills align. You cover the core requirements well.",
        >= 40 => $"Moderate match. {matchCount} overlapping skills — a few new areas to explore.",
        _     => $"Partial match with {matchCount} skills. This role leans outside your primary stack."
    };
}
