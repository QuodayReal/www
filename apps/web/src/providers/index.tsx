import { ThemeProvider } from "next-themes";
import FramerMotionProvider from "@/providers/FramerMotionProvider";
import type { PropsWithChildren } from "react";
import ColorAccentProvider from "@/providers/ColorAccentProvider";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/fetcher";

function Provider({ children = null }: PropsWithChildren) {
  return (
    <FramerMotionProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ColorAccentProvider defaultScheme="green">
          <SWRConfig
            value={{
              fetcher,
            }}
          >
            {children}
          </SWRConfig>
        </ColorAccentProvider>
      </ThemeProvider>
    </FramerMotionProvider>
  );
}

export default Provider;
