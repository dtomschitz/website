export type Education = {
  id: string;
  /** Institution name, e.g. "Stuttgart Media University". */
  school: string;
  /** Degree + field of study, e.g. "Bachelor of Science - BS, Medieninformatik". */
  degree: string;
  /**
   * Study period.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for ongoing studies.
   */
  period: {
    start: string;
    end?: string;
  };
  /** URL to the school logo (absolute URL or path under /public). Takes precedence over `icon`. */
  logo?: string;
  /** UI icon to represent the school; used if `logo` is not provided. */
  icon?: React.ReactNode;
  description?: string;
  skills?: string[];
  /** Whether the entry is expanded by default in the UI. */
  isExpanded?: boolean;
};
