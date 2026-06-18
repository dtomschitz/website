'use client';

import {GlobeIcon} from 'lucide-react';

import CopyButton from '@/components/ui/copy-button';

import {IntroItem, IntroItemContent, IntroItemIcon, IntroItemLink} from './intro-item';

export function WebsiteItem({website}: {website: string}) {
  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <GlobeIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink href={website} aria-label={`Website: ${website}`}>
          {website.replace(/^https?:\/\//, '')}
        </IntroItemLink>
      </IntroItemContent>

      <div className="-translate-x-3 translate-y-0.5 opacity-0 transition-opacity ease-out group-hover:opacity-100">
        <CopyButton
          className="rounded-md border-none text-muted-foreground [&_svg:not([class*='size-'])]:size-4"
          variant="ghost"
          size="icon-xs"
          text={website}
        />
      </div>
    </IntroItem>
  );
}
