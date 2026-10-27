export const SITE_URL = "https://www.anc.fyi";
export const SITE_NAME = "Americans for Neighborhood Change";
export const INSTAGRAM_URL = "https://www.instagram.com/anc.fyi";
export const ELECTION_DATE = "2026-11-03";
export const LAST_UPDATED = "2026-10-27";

export type ExpandableContent = {
  id: number;
  name: string;
  slug: string;
  content: string;
};

export const issues: ExpandableContent[] = [
  {
    id: 6,
    slug: "student-renters",
    name: "Better Support for Student Renters",
    content:
      "Students living off campus should not have to navigate confusing systems alone when landlords fail to address serious maintenance or housing problems. We support programs to connect renters with the correct D.C. agencies and existing tenant resources, create clearer information about how to document and report unresolved problems, and use the ANC to follow up on recurring housing concerns affecting Georgetown residents.",
  },
  {
    id: 2,
    slug: "neighborhood-enforcement",
    name: "Fair & Transparent Neighborhood Enforcement",
    content:
      "Students should understand the rules they are expected to follow and have confidence that neighborhood enforcement is consistent and transparent. Clearer SNAP reporting procedures, greater transparency around enforcement decisions, and meaningful opportunities for student input should be built into the system to ensure that students are treated fairly and equitably.",
  },
  {
    id: 5,
    slug: "trash-enforcement",
    name: "Common-Sense Trash Enforcement",
    content:
      "Keeping Georgetown clean matters, but minor mistakes should not automatically result in disproportionate penalties. We support clearer sanitation rules and a warning-first approach to minor, first-time violations while supporting stronger enforcement for repeated or serious problems.",
  },
  {
    id: 3,
    slug: "campus-culture",
    name: "Rebuild campus culture.",
    content:
      "Programs like SNAP have suppressed campus culture and created an environment where students cannot be college students. We must work to rebuild a culture that supports and encourages student growth and development, not punish students for minor infractions.",
  },
  {
    id: 4,
    slug: "fair-electoral-process",
    name: "Create a fair electoral process.",
    content:
      "Students are split between five SMD seats in an effort to dilute their voices. Despite making 45% of the population in the ANC, they often hold less than 25% of the seats. This removes valuable opportunities for students to raise concerns in proper channels and defuse conflicts before they happen. We support redistricting to ensure fair representation, with at least three student-majority districts to approach fair representation.",
  },
  {
    id: 1,
    slug: "equitable-conduct-system",
    name: "Create a more equitable conduct system.",
    content:
      "The student conduct system has increasingly been weaponized to target students and undermine their ability to grow as individuals. We support a fairer system with clear standards, meaningful due process, and responses that help students learn rather than treating minor mistakes as grounds for disproportionate punishment.",
  },
];

export const faqs: ExpandableContent[] = [
  {
    id: 6,
    slug: "how-do-i-vote",
    name: "How do I vote?",
    content:
      "Visit our How to Vote page for a quick guide that helps you find the information you need to make your voting plan for the November 3, 2026 local election.",
  },
  {
    id: 8,
    slug: "why-vote-local-election",
    name: "Why should I vote in a local election?",
    content:
      "Voting in ANC elections lets students help choose the representatives who advise the D.C. government on decisions affecting their college experience, including SNAP and off-campus housing. Electing Hoyas to local positions is a key part of protecting the college experience.",
  },
  {
    id: 3,
    slug: "what-is-an-advisory-neighborhood-commission",
    name: "What is an Advisory Neighborhood Commission?",
    content:
      "An Advisory Neighborhood Commission, or ANC, is a local body that advises the D.C. government on issues affecting its neighborhood. Commissioners represent single-member districts and help residents raise concerns about matters such as housing, sanitation, public safety, and neighborhood services.",
  },
  {
    id: 7,
    slug: "can-international-students-vote",
    name: "Can international students vote in D.C. local elections?",
    content:
      "International students can participate in D.C. local elections as long as they have lived in D.C. for 30 days and are not voting in another state. We can only accept donations from U.S. citizens or permanent residents, but we welcome volunteers from all backgrounds.",
  },
  {
    id: 5,
    slug: "how-can-i-get-involved",
    name: "How can I get involved?",
    content:
      "You can volunteer, talk with your neighbors about the issues, and help make sure students participate in local elections. Every conversation and every vote helps build a neighborhood where residents are represented fairly.",
  },
  {
    id: 4,
    slug: "what-issues-does-the-campaign-support",
    name: "What issues does the campaign support?",
    content:
      "We support better resources for student renters, fair and transparent neighborhood enforcement, common-sense trash enforcement, a stronger campus culture, a fair electoral process, and a more equitable conduct system. Read more about each position on our Issues page.",
  },
  {
    id: 2,
    slug: "why-are-students-a-focus",
    name: "Why are students a focus of this campaign?",
    content:
      "Students make up a significant part of the neighborhood, but their voices are often divided and underrepresented. We want students to be treated as neighbors and included in a fair, constructive process alongside everyone else who calls Georgetown home.",
  },
  {
    id: 1,
    slug: "what-is-americans-for-neighborhood-change",
    name: "What is Americans for Neighborhood Change?",
    content:
      "Americans for Neighborhood Change is a student-led campaign to elect Georgetown students to Advisory Neighborhood Commission seats in Washington, D.C., on November 3, 2026. We believe people who live here should have a meaningful say in the decisions that affect their daily lives.",
  },
];
