import React from "react";
import { ChevronDownIcon } from "lucide-react";

import Button from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function CollapsibleList<T>({
  items,
  max = 3,
  keyExtractor,
  renderItem,
}: {
  items: T[];
  max?: number;
  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Collapsible className="group/collapsible">
      <ul>
        {items.slice(0, max).map((item, index) => (
          <li
            key={typeof keyExtractor === "function" ? keyExtractor(item) : index}
            className="border-b border-line"
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>

      <CollapsibleContent
        asChild
        className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
      >
        <ul>
          {items.slice(max).map((item, index) => (
            <li
              key={
                typeof keyExtractor === "function"
                  ? keyExtractor(item)
                  : max + index
              }
              className="border-b border-line"
            >
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </CollapsibleContent>

      {items.length > max && (
        <div className="screen-line-top -mt-px flex h-12 items-center justify-center">
          <CollapsibleTrigger asChild>
            <Button className="gap-2 pr-2.5 pl-3" variant="secondary" size="sm">
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
      )}
    </Collapsible>
  );
}
