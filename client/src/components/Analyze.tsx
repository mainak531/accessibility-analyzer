"use client";

import { useState } from "react";
import axios from "axios";

const Analyze = () => {
  const [url, setUrl] = useState("");
  const [issues, setIssues] = useState([]);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!url) return alert("Please enter a URL");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/analyze", { url });
      setIssues(response.data.report.violations || []);
      setScore(response.data.score);
    } catch (err) {
      console.error(err);
      alert("Failed to analyze site");
    } finally {
      setLoading(false);
    }
  };

  const handleAISuggestion = async (issueHelpText: string) => {
    setAiLoading(true);
    setSelectedIssue(issueHelpText);
    setAiSuggestion("");

    try {
      const response = await axios.post("http://localhost:5000/api/ai-suggest", {
        issue: issueHelpText,
      });

      setAiSuggestion(response.data.suggestion);
    } catch (error) {
      console.error("AI Suggestion error:", error);
      setAiSuggestion("❌ Failed to get suggestion.");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section
      id="analyze"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Analyze Your Website
      </h2>
      <p className="text-lg text-center max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
        Upload a URL or paste your website’s HTML to check for accessibility issues like color contrast, alt tags, headings, and more.
      </p>

      <div className="w-full max-w-xl">
        <input
          type="text"
          placeholder="Enter your website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          autoComplete="url"
          name="url"
          id="url"
          title="Website URL input"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleAnalyze}
          title="Run accessibility analysis"
          aria-label="Run accessibility analysis"
          className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Analyzing..." : "Run Analysis"}
        </button>
      </div>

      {/* ✅ Accessibility Score Meter */}
      {score !== null && (
        <div className="mt-10 w-full max-w-xl text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Accessibility Score: {score}/100
          </h3>
          <div className="w-full h-6 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                score >= 90
                  ? "bg-green-500"
                  : score >= 70
                  ? "bg-yellow-400"
                  : "bg-red-500"
              }`}
              style={{ width: `${score}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {score >= 90
              ? "✅ Excellent accessibility"
              : score >= 70
              ? "⚠️ Moderate accessibility"
              : "❌ Needs improvement"}
          </p>
        </div>
      )}

      {/* Show issues if any */}
      {issues.length > 0 && (
        <div className="mt-6 w-full max-w-3xl bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Accessibility Issues Found
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-gray-700 dark:text-gray-300">
            {issues.map((issue: any, index: number) => (
              <li key={index}>
                <strong>{issue.help}</strong>: {issue.description}
                <div className="mt-2">
                  <button
                    onClick={() => handleAISuggestion(issue.help)}
                    className="px-3 py-1 mt-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    Get AI Fix
                  </button>
                </div>

                {selectedIssue === issue.help && (
                  <div className="mt-2 p-3 border border-gray-300 rounded bg-white dark:bg-gray-900">
                    {aiLoading ? (
                      <span className="text-blue-500">Loading suggestion...</span>
                    ) : (
                      <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-100">
                        {aiSuggestion}
                      </pre>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Analyze;
