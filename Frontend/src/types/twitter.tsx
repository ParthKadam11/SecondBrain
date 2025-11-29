declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          tweetId: string,
          element: HTMLElement,
          options?: Record<string, unknown>
        ) => Promise<void> | void;
      };
      ready?: (cb: () => void) => void;
    };
  }
}
export {};