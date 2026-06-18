import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Panel, PanelContent } from "@/components/ui/panel";
import { SOCIAL_LINKS } from "@/data/social-links";

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <PanelContent>
        <ul className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    className={cn(
                      "flex size-8 items-center justify-center rounded-lg",
                      "gradient-border gradient-border-to-tl",
                      "gradient-border-from-foreground/15 gradient-border-to-foreground/20 gradient-border-via-foreground/3",
                      "dark:gradient-border-from-foreground/20 dark:gradient-border-to-foreground/30 dark:gradient-border-via-foreground/6",
                      "bg-linear-to-t from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800",
                      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-foreground/80 [&_svg:not([class*='size-'])]:size-5"
                    )}
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                  >
                    {item.icon}
                    <span className="sr-only">{item.title}</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>{item.title}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
