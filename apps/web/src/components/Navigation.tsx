import clsx from "clsx";

import {
  GitHubIcon,
  HeartIcon,
  LanguageIcon,
  TwitterIcon,
  TypeScriptIcon,
} from "@/components/Icons";
import NavIcon from "@/components/navigations/NavIcon";
import NavIconTheme from "@/components/navigations/NavIconTheme";
import NavLink from "@/components/navigations/NavLink";
import NavLinkDropdown from "@/components/navigations/NavLinkDropdown";
import NavLinkExpanded from "@/components/navigations/NavLinkExpanded";
import NavLogo from "@/components/navigations/NavLogo";

import useOnScroll from "@/hooks/useOnScroll";

const workLinks = [
  { title: "Popular", href: "/popular" },
  { title: "Quotes", href: "/quotes" },
  { title: "Authors", href: "/authors" },
  { title: "Random", href: "/random" },
];

function Navbar() {
  const isScrolled = useOnScroll(0);

  return (
    <header
      className={clsx(
        "content-wrapper fixed right-0 left-0 z-[1000] transition",
        [isScrolled ? "translate-y-0" : "translate-y-2"]
      )}
    >
      <div
        className={clsx(
          "border-divider-light pointer-events-none fixed top-0 left-0 right-0 h-16 border-b bg-white/70 backdrop-blur transition",
          "dark:border-divider-dark dark:bg-slate-900/80",
          [isScrolled ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"]
        )}
      />
      <div className={clsx("content-wrapper-max")}>
        <div
          className={clsx(
            "relative z-50 flex h-16 items-center justify-between px-2 text-md",
            "md:px-4"
          )}
        >
          <nav className={clsx("flex", "md:gap-2")} data-accent="slate">
            <NavLogo href="/" title="Home" />
            <ul className={clsx("flex items-center", "md:gap-1")}>
              <li>
                <NavLink title="Home" href="/projects" />
              </li>
              <li>
                <NavLink title="About" href="/blog" />
              </li>
              <li className={clsx("lg:hidden")} data-accent="green">
                <NavLinkDropdown title="Links" items={workLinks} />
              </li>
              <li className={clsx("hidden lg:block")} data-accent="green">
                <NavLinkExpanded title="Links" items={workLinks} />
              </li>
            </ul>
          </nav>
          <ul className={clsx("flex items-center gap-2")}>
            <li className={clsx("hidden", "sm:block")}>
              <NavIcon
                href="https://twitter.com/"
                icon={<TwitterIcon className={clsx("h-5 w-5")} />}
                title="Twitter"
                label="@quoday"
              />
            </li>
            <li className={clsx("hidden", "sm:block")}>
              <div
                className={clsx(
                  "h-3 w-[1px] bg-slate-200",
                  "dark:bg-slate-700"
                )}
              />
            </li>
            <li className={clsx("")}>
              <NavIcon
                href="https://lang.com"
                icon={<LanguageIcon className={clsx("h-5 w-5")} />}
                title="Lang"
              />
            </li>
            <li className={clsx("mr-2")}>
              <NavIconTheme />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
