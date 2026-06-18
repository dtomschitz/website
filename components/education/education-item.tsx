import Image from 'next/image';
import {ChevronsUpDownIcon, GraduationCapIcon, InfinityIcon} from 'lucide-react';

import {cn} from '@/lib/utils';
import Markdown from '@/components/markdown';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible';
import {Separator} from '@/components/ui/separator';
import Tag from '@/components/ui/tag';
import Prose from '@/components/ui/prose';
import type {Education} from '@/types/education';

import {formatDuration} from '../experience/experience-position-item';

export function EducationItem({education}: {education: Education}) {
  const {start, end} = education.period;
  const isOngoing = !end;
  const duration = formatDuration(start, end);

  return (
    <Collapsible
      className="group/experience-position relative"
      defaultOpen={education.isExpanded}
      disabled={!education.description}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-3 hidden size-4 bg-background group-last/experience-position:flex"
        aria-hidden
      >
        <span className="size-full -translate-y-2.25 rounded-bl-sm border-b border-l" />
      </div>

      <CollapsibleTrigger
        className={cn(
          'group block w-full text-left',
          'relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted',
          'outline-none focus-visible:before:inset-ring-2 focus-visible:before:inset-ring-ring/50',
          'data-[disabled]:before:content-none',
        )}
      >
        <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
          {education.logo ? (
            <div className="flex size-6 shrink-0 items-center justify-center">
              <Image
                src={education.logo}
                alt={`${education.school} logo`}
                width={24}
                height={24}
                className="size-6 object-contain"
                unoptimized
                aria-hidden
              />
            </div>
          ) : (
            <div
              className={cn(
                'flex size-6 shrink-0 items-center justify-center rounded-lg',
                'bg-muted text-muted-foreground',
                'border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background',
                "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              )}
            >
              {education.icon ?? <GraduationCapIcon />}
            </div>
          )}

          <div className="flex-1">
            <h4 className="font-medium text-balance">{education.school}</h4>
            <p className="text-sm text-muted-foreground">{education.degree}</p>
          </div>

          <div className="shrink-0 text-muted-foreground group-data-[disabled]/experience-position:hidden [&_svg]:h-lh [&_svg]:w-4">
            <ChevronsUpDownIcon />
          </div>
        </div>

        <dl className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
          <div>
            <dt className="sr-only">Study Period</dt>
            <dd className="flex items-center gap-0.5 tabular-nums">
              <span>{start}</span>
              <span className="font-mono">—</span>
              {isOngoing ? (
                <InfinityIcon className="size-4.5 translate-y-[0.5px]" aria-label="Present" />
              ) : (
                <span>{end}</span>
              )}
            </dd>
          </div>

          {duration && (
            <>
              <Separator
                className="data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
                orientation="vertical"
                aria-hidden
              />
              <div>
                <dt className="sr-only">Duration</dt>
                <dd className="tabular-nums">{duration}</dd>
              </div>
            </>
          )}
        </dl>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {education.description && (
          <Prose className="pt-2 pl-9">
            <Markdown>{education.description}</Markdown>
          </Prose>
        )}
      </CollapsibleContent>

      {Array.isArray(education.skills) && education.skills.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
          {education.skills.map((skill, index) => (
            <li key={index} className="flex">
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
      )}
    </Collapsible>
  );
}
