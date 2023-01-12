import { ThemeProvider } from "next-themes";
import FramerMotionProvider from "@/providers/FramerMotionProvider";
import type { PropsWithChildren } from "react";
import ColorAccentProvider from "@/providers/ColorAccentProvider";

function Provider({ children = null }: PropsWithChildren) {
  return (
    <FramerMotionProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ColorAccentProvider defaultScheme="green">
          <>{children}</>
        </ColorAccentProvider>
      </ThemeProvider>
    </FramerMotionProvider>
  );
}

export default Provider;
