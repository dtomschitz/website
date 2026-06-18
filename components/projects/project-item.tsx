import Image from 'next/image';
import {BoxIcon, ChevronsUpDownIcon, InfinityIcon, LinkIcon} from 'lucide-react';

import Markdown from '@/components/markdown';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible';
import Prose from '@/components/ui/prose';
import Tag from '@/components/ui/tag';
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';
import type {Project} from '@/types/projects';

export function ProjectItem({className, project}: {className?: string; project: Project}) {
  const {start, end} = project.period;
  const isOngoing = !end;
  const isSinglePeriod = end === start;

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      <div className="group/project flex items-center hover:bg-accent-muted">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={32}
            height={32}
            className="mx-4 flex size-6 shrink-0 select-none"
            unoptimized
            aria-hidden
          />
        ) : (
          <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background select-none">
            <BoxIcon className="size-4" />
          </div>
        )}

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4 pr-2">
          <CollapsibleTrigger className="flex flex-1 flex-col text-left outline-none">
            <h3 className="mb-1 leading-snug font-medium text-balance">{project.title}</h3>

            <dl className="text-sm text-muted-foreground">
              <dt className="sr-only">Period</dt>
              <dd className="flex items-center gap-0.5">
                <span>{start}</span>
                {!isSinglePeriod && (
                  <>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <InfinityIcon className="size-4.5 translate-y-[0.5px]" aria-label="Present" />
                    ) : (
                      <span>{end}</span>
                    )}
                  </>
                )}
              </dd>
            </dl>
          </CollapsibleTrigger>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                href={project.link}
                target="_blank"
                rel="noopener"
                aria-label="Open Project Link"
              >
                <LinkIcon className="pointer-events-none size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open Project Link</p>
            </TooltipContent>
          </Tooltip>

          <CollapsibleTrigger className="shrink-0 text-muted-foreground outline-none [&_svg]:size-4">
            <ChevronsUpDownIcon />
            <span className="sr-only">Toggle details</span>
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <div className="space-y-4 border-t border-line p-4">
          {project.description && (
            <Prose>
              <Markdown>{project.description}</Markdown>
            </Prose>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
