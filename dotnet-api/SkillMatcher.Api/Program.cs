using Amazon.Lambda.Core;
using SkillMatcher.Api.Models;
using SkillMatcher.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// ---------------------------------------------------------------------------
// CORS — allow your portfolio origin(s)
// Update the WithOrigins list to match your actual domain before deploying.
// ---------------------------------------------------------------------------
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy
            .WithOrigins(
                "http://localhost:3000",
                "https://fozanrizvi.com",           // ← update to actual domain
                "https://www.fozanrizvi.com"
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
    );
});

// ---------------------------------------------------------------------------
// AWS Lambda hosting (API Gateway HTTP API v2 → Lambda → ASP.NET Core)
// Remove this line if deploying to Elastic Beanstalk instead.
// ---------------------------------------------------------------------------
builder.Services.AddAWSLambdaHosting(LambdaEventSource.HttpApi);

var app = builder.Build();

app.UseCors();

// ---------------------------------------------------------------------------
// Endpoints
// ---------------------------------------------------------------------------

// Health check — useful for load balancer / Lambda warm-up pings
app.MapGet("/health", () => Results.Ok(new
{
    status    = "healthy",
    service   = "SkillMatcher.Api",
    timestamp = DateTime.UtcNow
}));

// Main matching endpoint — called by the React SkillMatcher component
app.MapPost("/api/match", (MatchRequest request) =>
{
    if (string.IsNullOrWhiteSpace(request.JobDescription))
        return Results.BadRequest(new { error = "jobDescription is required." });

    var result = SkillMatcherService.Analyze(request.JobDescription);
    return Results.Ok(result);
});

app.Run();
