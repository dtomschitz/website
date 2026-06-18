'use client';

import {useSyncExternalStore} from 'react';
import {MailIcon} from 'lucide-react';

import CopyButton from '@/components/ui/copy-button';

import {IntroItem, IntroItemContent, IntroItemIcon, IntroItemLink} from './intro-item';

// Never call subscribe's callback: the decoded value is stable per render.
const noopSubscribe = () => () => {};

export function EmailItem({emailB64}: {emailB64: string}) {
  // Decode the email on the client only — it stays out of the server-rendered
  // HTML so scrapers don't see a plaintext address. No setState-in-effect.
  const email = useSyncExternalStore(
    noopSubscribe,
    () => atob(emailB64),
    () => '',
  );

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>

      <IntroItemContent className="flex">
        <IntroItemLink href={email ? `mailto:${email}` : undefined} suppressHydrationWarning>
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
