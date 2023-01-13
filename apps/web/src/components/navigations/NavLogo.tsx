import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextJsIcon, SparklesIcon } from "../Icons";

// import Logo from '@/components/Logo';

interface NavLogoProps {
  href: string;
  title: string;
}

function NavLogo({ href, title }: NavLogoProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={clsx("flex h-9 items-center gap-2 rounded-xl px-2")}
      aria-label={title}
    >
      {/* <Logo active={isActive} /> */}
      <SparklesIcon className={clsx("h-5 w-5")} />
    </Link>
  );
}

export default NavLogo;
