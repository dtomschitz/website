import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Hello } from "@/components/about/hello";
import { Experiences } from "@/components/experience/experiences";
import { Overview } from "@/components/profile/overview";
import { ProfileHeader } from "@/components/profile/profile-header";
import { SocialLinks } from "@/components/profile/social-links";
import { Projects } from "@/components/projects/projects";
import { TechStack } from "@/components/skill/tech-stack";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
      <div className="mx-auto md:max-w-3xl">
        <ProfileHeader />
        <Separator />

        <Overview />
        <SocialLinks />
        <Separator />

        <Hello />
        <Separator />

        <TechStack />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />
      </div>
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-(--separator-height) w-full border-x border-line",
        className
      )}
    />
  );
}
