namespace SkillMatcher.Api.Models;

/// <summary>Incoming request body for the /api/match endpoint.</summary>
public record MatchRequest(string JobDescription);

/// <summary>Full analysis returned to the React client.</summary>
public record MatchResponse(
    int MatchScore,
    List<MatchedSkill> MatchedSkills,
    List<string> MissingSkills,
    List<string> TopKeywords,
    string Summary
);

/// <summary>A single skill that was found in the job description.</summary>
public record MatchedSkill(
    string Name,
    string Category,
    int Proficiency,
    string Relevance   // "high" | "medium" | "low"
);

/// <summary>Internal skills dictionary entry.</summary>
public record SkillEntry(
    string Name,
    string Category,
    int Proficiency,
    string[] Aliases
);
