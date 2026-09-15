"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { defaultContent, type PortfolioContent } from "@/lib/content/defaults";
import { getPublishedContent } from "@/lib/supabase/content";

const ContentContext = createContext<PortfolioContent>(defaultContent);

/**
 * Hydrates portfolio content from the published Supabase document after the
 * page loads, falling back to the built-in static content (used for the initial
 * server-rendered HTML and when Supabase isn't configured).
 */
export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PortfolioContent>(defaultContent);

  useEffect(() => {
    let active = true;
    getPublishedContent()
      .then((published) => {
        if (active && published) setContent(published);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent(): PortfolioContent {
  return useContext(ContentContext);
}
