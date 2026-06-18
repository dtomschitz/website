import { ChevronDownIcon } from "lucide-react";

import Button from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { PanelTitleCopy } from "@/components/ui/panel-title-copy";
import { EXPERIENCES } from "@/data/experiences";
import type { Experience } from "@/types/experiences";

import { ExperienceItem } from "./experience-item";

const ID = "experience";
const MAX = 3;

export function Experiences() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Experience</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        <ExperienceList experiences={EXPERIENCES.slice(0, MAX)} />
      </div>

      {EXPERIENCES.length > MAX && (
        <Collapsible className="group/collapsible">
          <CollapsibleContent
            asChild
            className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
          >
            <div className="pr-2 pl-4">
              <ExperienceList experiences={EXPERIENCES.slice(MAX)} />
            </div>
          </CollapsibleContent>

          <div className="-mt-px flex items-center justify-center py-2">
            <CollapsibleTrigger asChild>
              <Button
                className="gap-2 pr-2.5 pl-3"
                variant="secondary"
                size="sm"
              >
                <span className="hidden group-data-[state=closed]/collapsible:block">
                  Show More
                </span>
                <span className="hidden group-data-[state=open]/collapsible:block">
                  Show Less
                </span>
                <ChevronDownIcon className="group-data-[state=open]/collapsible:rotate-180" />
              </Button>
            </CollapsibleTrigger>
          </div>
        </Collapsible>
      )}
    </Panel>
  );
}

function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </>
  );
}
