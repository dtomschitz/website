/**
 * Abstract isometric blueprint figure used as a placeholder brand mark in the
 * profile header. Swap with your own logo/SVG when ready.
 */
export function IsometricMark() {
  const patternId = "iso-hatch";

  return (
    <svg
      className="h-auto w-full overflow-visible [--hatch:color-mix(in_oklab,var(--foreground)_12%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--hatch)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      {/* blueprint guide lines */}
      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-40 300L596 60" />
        <path d="M-40 60L596 300" />
      </g>

      {/* isometric cube */}
      <g>
        {/* top face */}
        <path
          d="M278 70L388 125L278 180L168 125Z"
          className="fill-background stroke-line"
          strokeWidth="1"
        />
        {/* left face */}
        <path
          d="M168 125L278 180L278 290L168 235Z"
          fill={`url(#${patternId})`}
          className="stroke-line"
          strokeWidth="1"
        />
        {/* right face */}
        <path
          d="M388 125L278 180L278 290L388 235Z"
          fill={`url(#${patternId})`}
          className="stroke-line"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
