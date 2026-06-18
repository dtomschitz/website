"use client";

import { useEffect, useState } from "react";
import { MailIcon } from "lucide-react";

import CopyButton from "@/components/ui/copy-button";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

export function EmailItem({ emailB64 }: { emailB64: string }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(atob(emailB64));
  }, [emailB64]);

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>

      <IntroItemContent className="flex">
        <IntroItemLink
          href={email ? `mailto:${email}` : ""}
          suppressHydrationWarning
        >
          {email}
        </IntroItemLink>
      </IntroItemContent>

      <div className="-translate-x-3 translate-y-0.5 opacity-0 transition-opacity ease-out group-hover:opacity-100">
        <CopyButton
          className="rounded-md border-none text-muted-foreground [&_svg:not([class*='size-'])]:size-4"
          variant="ghost"
          size="icon-xs"
          text={() => email}
        />
      </div>
    </IntroItem>
  );
}
