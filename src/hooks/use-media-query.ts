import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      setMatches(media.matches);

      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      media.addEventListener("change", listener);

      return () => {
        media.removeEventListener("change", listener);
      };
    }
  }, [query]);

  return matches;
}
