import type { User } from "@/types/user";

export const USER: User = {
  firstName: "David",
  lastName: "Tomschitz",
  displayName: "David Tomschitz",
  username: "dtomschitz",
  gender: "male",
  pronouns: "he/him",
  bio: "Full stack engineer. Building for web and mobile.",
  flipSentences: [
    "Full Stack Software Engineer",
    "Building mobile & web apps",
    "Open for new opportunities"
  ],
  address: "Germany",
  emailB64: "ZGF2aWRAdG9tc2NoaXR6LmRl", // david@tomschitz.de
  website: "https://www.davidtomschitz.de",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Senior Consultant",
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
