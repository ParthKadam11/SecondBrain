let twitterScriptPromise: Promise<void> | null = null;

function loadTwitterScript(): Promise<void> {
  if (twitterScriptPromise) return twitterScriptPromise;
  twitterScriptPromise = new Promise<void>((resolve, reject) => {
    if (window.twttr && window.twttr.widgets) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Twitter widgets.js"));
    document.head.appendChild(script);
  });
  return twitterScriptPromise;
}

export function extractTweetId(url: string): string | null {
  const cleaned = url.replace("x.com", "twitter.com");
  const match = cleaned.match(/status\/(\d{5,25})/);
  return match ? match[1] : null;
}

export async function embedTweet(tweetId: string, container: HTMLElement) {
  try {
    await loadTwitterScript();
    if (window.twttr?.widgets?.createTweet) {
      await window.twttr.widgets.createTweet(tweetId, container, {
        align: "center",
        dnt: true,
        theme: "light"
      });
    } else {
      container.innerHTML = `<a href="https://twitter.com/i/web/status/${tweetId}" target="_blank" rel="noopener noreferrer">View Tweet</a>`;
    }
  } catch {
    container.innerHTML = `<a href="https://twitter.com/i/web/status/${tweetId}" target="_blank" rel="noopener noreferrer">View Tweet</a>`;
  }
}
