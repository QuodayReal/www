import clsx from "clsx";
import { m } from "framer-motion";
import Link from "next/link";

import {
  ExternalLink,
  NextJsIcon,
  GitHubIcon,
  TwitterIcon,
} from "@/components/Icons";

import dayjs from "@/utils/dayjs";

function LastUpdate() {
  return <span>&nbsp;</span>;
}

interface FooterLinkProps {
  title: string;
  href: string;
  label?: "new" | "soon";
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === "soon") {
    return (
      <span className={clsx("footer-link footer-link--soon")}>
        {title}
        <span className={clsx("footer-link__label")}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={clsx("footer-link")}>
        {title}
        {label && <span className={clsx("footer-link__label")}>{label}</span>}
      </Link>
    );
  }

  if (label === 'new') {
    return (
      <Link href={href} className={clsx("footer-link footer-link--new")}>
        {title}
        {label && <span className={clsx("footer-link__label")}>{label}</span>}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx("footer-link")}
    >
      {title}
      <ExternalLink className={clsx("h-3.5 w-3.5")} />
      {label && <span className={clsx("footer-link__label")}>{label}</span>}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={clsx("flex-1")}>
      <div
        className={clsx(
          "mb-2 px-2 text-[13px] text-slate-600",
          "dark:text-slate-400"
        )}
      >
        {title}
      </div>
      <ul className={clsx("flex flex-col")}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription() {
  return (
    <div className={clsx("max-w-[348px]")}>
      <div
        className={clsx(
          "mb-3 text-[13px] text-slate-600",
          "dark:text-slate-400"
        )}
      >
        Quote Focused
      </div>
      <p className={clsx("mb-4 font-normal leading-relaxed")}>
				<strong>Quoday</strong> brings you a new quote every day. It@apos;s a
				collection of quotes from various sources. You can also search for
				quotes and save them to your personal collection.
      </p>
      <ul className={clsx("-ml-2 flex gap-1")}>
        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className={clsx("flex h-9 w-9 items-center justify-center")}
            aria-label="Twitter"
            title="Twitter"
          >
            <TwitterIcon className={clsx("h-5 w-5")} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className={clsx("flex h-9 w-9 items-center justify-center")}
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon className={clsx("h-5 w-5")} />
          </a>
        </li>
        <li>
          <a
            href="https://asdasd.ddd"
            target="_blank"
            rel="noreferrer"
            className={clsx("flex h-9 w-9 items-center justify-center")}
            aria-label="My Figma profile"
            title="My Figma profile"
          >
            <NextJsIcon className={clsx("h-5 w-5")} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        "background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900",
        "dark:border-divider-dark dark:text-slate-200"
      )}
    >
      <div className={clsx("content-wrapper")}>
        <div className={clsx("py-10 font-semibold")}>
          <div className={clsx("flex flex-col-reverse gap-16", "lg:flex-row")}>
            <div className={clsx("flex-1")}>
              <FooterDescription />
            </div>
            <div
              className={clsx(
                "-mx-2 flex flex-1 flex-col gap-8",
                "sm:flex-row sm:gap-16 lg:mx-0"
              )}
            >
              <div className={clsx("flex", "sm:gap-16")}>
                <FooterGroup
                  title="Group"
                  links={[
                    { title: "Contact", href: "/contact" },
                    { title: "Experience", href: "/experience" },
                    {
                      title: "Services",
                      href: "/services",
                      label: "soon",
                    },
                    {
                      title: "Blog",
                      href: "/blog",
                    },
										{ title: "We're Hiring!", href: "/careers", label: 'new' },
                  ]}
                />
                <FooterGroup
                  title="Learn"
                  links={[
                    {
                      title: "Docs",
                      href: "/docs",
                    },
                    {
                      title: "Help Center",
                      href: "/help-center",
                    },
                  ]}
                />
              </div>
              <div className={clsx("flex", "sm:gap-16")}>
                <FooterGroup
                  title="Social Media"
                  links={[
                    {
                      title: "Twitter",
                      href: "",
                      isInternal: false,
                    },
                    {
                      title: "Instagram",
                      href: "",
                      isInternal: false,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "border-divider-light flex justify-between border-t py-6 text-xs",
            "dark:border-divider-dark"
          )}
        >
          <div className={clsx("font-semibold")}>
            &copy; {dayjs().format("YYYY")}, Quoday
          </div>
          <div className={clsx("text-slate-500", "dark:text-slate-400")}>
            <LastUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
