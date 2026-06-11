import { Concept } from "@/types/concept";

export const concepts: Concept[] = [
  {
    id: "body",

    title: "Body",

    description:
      "The body changes throughout life, yet we feel continuous.",

    teachingId: "witness",

    related: [
      "mind",
      "witness",
    ],
  },

  {
    id: "mind",

    title: "Mind",

    description:
      "Thoughts arise and disappear.",

    teachingId: "witness",

    related: [
      "body",
      "witness",
    ],
  },

  {
    id: "witness",

    title: "Witness",

    description:
      "The observer of thoughts, emotions and sensations.",

    teachingId: "witness",

    related: [
      "body",
      "mind",
    ],
  },

  {
    id: "action",

    title: "Action",

    description:
      "Action is unavoidable.",

    teachingId: "karma",

    related: [
      "duty",
      "detachment",
    ],
  },

  {
    id: "detachment",

    title: "Detachment",

    description:
      "Act without dependence on outcomes.",

    teachingId: "karma",

    related: [
      "action",
      "fear",
    ],
  },
];