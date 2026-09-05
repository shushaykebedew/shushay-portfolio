import { useState, useEffect } from "react";

const GITHUB_USERNAME = "shushaykebedew";
const CACHE_KEY = "gh_stats_cache";
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export function useGitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check cache first
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
      if (cached && Date.now() - cached.ts < CACHE_TTL) {
        setStats(cached.data);
        setLoading(false);
        return;
      }
    } catch {
      // ignore bad cache
    }

    const controller = new AbortController();

    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`,
            { signal: controller.signal }
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const [user, repos] = await Promise.all([userRes.json(), reposRes.json()]);

        const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
        const totalForks = repos.reduce((acc, r) => acc + (r.forks_count || 0), 0);

        const data = {
          publicRepos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          totalStars,
          totalForks,
        };

        localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
        setStats(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
    return () => controller.abort();
  }, []);

  return { stats, loading, error };
}
