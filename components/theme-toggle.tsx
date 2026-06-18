'use client';

import {useSyncExternalStore} from 'react';
import {MonitorIcon, MoonIcon, SunIcon} from 'lucide-react';
import {motion} from 'motion/react';
import {useTheme} from 'next-themes';

import {cn} from '@/lib/utils';
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';
import IconSwap, {IconSwapItem} from '@/components/ui/icon-swap';

const THEME_CYCLE = ['light', 'dark', 'system'] as const;
type Theme = (typeof THEME_CYCLE)[number];

const THEME_LABEL: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

// Server renders false, client renders true after hydration — gates the
// theme-dependent icon so server/client markup match. No setState-in-effect.
const noopSubscribe = () => () => {};

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  const current = (theme as Theme) ?? 'system';

  const cycleTheme = () => {
    const next = THEME_CYCLE[(THEME_CYCLE.indexOf(current) + 1) % THEME_CYCLE.length];
    setTheme(next);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={cycleTheme}
          aria-label={mounted ? `Theme: ${THEME_LABEL[current]} — click to switch` : 'Toggle theme'}
          className={cn(
            'flex size-8 items-center justify-center rounded-lg will-change-transform',
            'gradient-border gradient-border-to-tl',
            'gradient-border-from-foreground/15 gradient-border-to-foreground/20 gradient-border-via-foreground/3',
            'dark:gradient-border-from-foreground/20 dark:gradient-border-to-foreground/30 dark:gradient-border-via-foreground/6',
            'bg-linear-to-t from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800',
            "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-foreground/80 [&_svg:not([class*='size-'])]:size-5",
          )}
        >
          {mounted ? (
            <IconSwap>
              <IconSwapItem key={current} as={motion.span}>
                {current === 'light' && <SunIcon />}
                {current === 'dark' && <MoonIcon />}
                {current === 'system' && <MonitorIcon />}
              </IconSwapItem>
            </IconSwap>
          ) : (
            <span className="size-5" />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>Theme: {THEME_LABEL[current]}</TooltipContent>
    </Tooltip>
  );
}
