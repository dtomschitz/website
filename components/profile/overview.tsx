import { MapPinIcon } from "lucide-react";

import { USER } from "@/data/user";
import { Panel, PanelContent } from "@/components/ui/panel";

import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import { WebsiteItem } from "./website-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { JobItem } from "./job-item";

export function Overview() {
  return (
    <Panel className="screen-line-bottom-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {USER.jobs.map((job, index) => (
          <JobItem
            key={index}
            title={job.title}
            company={job.company}
            website={job.website}
            experienceId={job.experienceId}
          />
        ))}

        <EmailItem emailB64={USER.emailB64} />

        <CurrentLocalTimeItem timeZone={USER.timeZone} />

        <WebsiteItem website={USER.website} />

        <IntroItem>
          <IntroItemIcon>
            <MapPinIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
              aria-label={`Location: ${USER.address}`}
            >
              {USER.address}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>
      </PanelContent>

      <div
        className="pointer-events-none absolute top-px bottom-0 left-1/2 -z-1 w-px -translate-x-2.25 bg-[linear-gradient(to_bottom,var(--line)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden"
        aria-hidden
      />
    </Panel>
  );
}
