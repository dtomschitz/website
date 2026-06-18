import type { User } from "@/types/user";

export const USER: User = {
  firstName: "David",
  lastName: "Tomschitz",
  displayName: "David Tomschitz",
  username: "dtomschitz",
  gender: "male",
  pronouns: "he/him",
  bio: "Full stack engineer. Building for web and mobile.",
  // TODO(david): tweak these rotating taglines
  flipSentences: [
    "Full Stack Software Engineer",
    "Building mobile & web apps",
    "Creator of Movie Night",
  ],
  address: "Germany",
  emailB64: "ZGF2aWRAdG9tc2NoaXR6LmRl", // david@tomschitz.de
  // TODO(david): set to your real personal site
  website: "https://tomschitz.de",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Consultant",
      company: "MHP",
      website: "https://mhp.com",
      experienceId: "mhp",
    },
    {
      title: "IT Administrator",
      company: "SV Vaihingen",
      website: "https://svv-handball.de",
      experienceId: "svv",
    },
  ],
  // TODO(david): refine this intro — Markdown supported
  about: `
- I'm David — a full stack software engineer from Germany with a passion for building mobile and web applications.
- Currently a Consultant at [MHP](https://mhp.com), where I help deliver OTA update systems for a well-known German automotive company.
- On the side I build [Movie Night](https://movie-night.up.railway.app/) and maintain the website and platform for my local handball club, [SV Vaihingen](https://svv-handball.de).
`,
  avatar: "/avatar.png",
  ogImage: "/avatar.png",
  timeZone: "Europe/Berlin",
  keywords: [
    "David Tomschitz",
    "dtomschitz",
    "software engineer",
    "full stack developer",
    "Germany",
  ],
  dateCreated: "2024-01-01", // YYYY-MM-DD
};
