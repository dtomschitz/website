'use client';

import {LinkIcon} from 'lucide-react';

import {cn} from '@/lib/utils';
import CopyButton from '@/components/ui/copy-button';

export function createHeadingUrl(id: string) {
  if (typeof window === 'undefined') {
    return `#${id}`;
  }

  const url = new URL(window.location.href);
  url.hash = id;

  return url.toString();
}

export function PanelTitleCopy({
  id,
  className,
  ...props
}: Omit<React.ComponentProps<typeof CopyButton>, 'id' | 'text'> & {
  id: string;
}) {
  return (
    <CopyButton
      className={cn(
        'absolute top-1/2 ml-1 size-7 shrink-0 -translate-y-1/2 border-none text-muted-foreground opacity-0 transition-opacity group-hover/panel-title:opacity-100',
        className,
      )}
      variant="ghost"
      text={() => createHeadingUrl(id || '')}
      idleIcon={<LinkIcon />}
      aria-label="Copy link to section"
      {...props}
    />
  );
}
