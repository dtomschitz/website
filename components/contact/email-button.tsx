'use client';

import {useSyncExternalStore} from 'react';
import {MailIcon} from 'lucide-react';

import Button from '@/components/ui/button';
import {USER} from '@/data/user';

// Never call subscribe's callback: the decoded value is stable per render.
const noopSubscribe = () => () => {};

export function EmailButton() {
  // Decode the email on the client only — it stays out of the server-rendered
  // HTML so scrapers don't see a plaintext address. No setState-in-effect.
  const email = useSyncExternalStore(
    noopSubscribe,
    () => atob(USER.emailB64),
    () => '',
  );

  return (
    <Button asChild>
      <a href={email ? `mailto:${email}` : undefined} suppressHydrationWarning>
        <MailIcon />
        Email me
      </a>
    </Button>
  );
}
