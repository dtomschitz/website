"use client";

import { useEffect, useState } from "react";
import { ClockIcon } from "lucide-react";

import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item";

export function CurrentLocalTimeItem({
  className,
  timeZone,
}: {
  className?: string;
  timeZone: string;
}) {
  const [time, setTime] = useState("");
  const [diff, setDiff] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now)
      );

      const viewerOffset = -now.getTimezoneOffset();
      const targetOffset =
        (new Date(now.toLocaleString("en-US", { timeZone })).getTime() -
          new Date(
            now.toLocaleString("en-US", { timeZone: "UTC" })
          ).getTime()) /
        60000;
      const hoursDiff = Math.abs(targetOffset - viewerOffset) / 60;

      setDiff(
        hoursDiff < 1
          ? "// same time"
          : `// ${Math.floor(hoursDiff)}h ${targetOffset > viewerOffset ? "ahead" : "behind"}`
      );
    };

    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <IntroItem className={className}>
      <IntroItemIcon>
        <ClockIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <span suppressHydrationWarning>{time}</span>{" "}
        <span className="text-muted-foreground" suppressHydrationWarning>
          {diff}
        </span>
      </IntroItemContent>
    </IntroItem>
  );
}
