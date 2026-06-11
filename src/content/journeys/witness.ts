import { Scene } from "@/types/journey";

export const witnessJourney: Scene[] = [
  {
    id: "intro",
    type: "hero",
    title: "Who Are You?",
    subtitle: "An interactive journey into self inquiry",
    nextLabel: "Begin",
  },

  {
    id: "timeline",
    type: "timeline",
    timeline: [
      {
        age: 5,
        statement: "I'll be happy when I get that toy."
      },
      {
        age: 15,
        statement: "I'll be happy when people accept me."
      },
      {
        age: 25,
        statement: "I'll be happy when I get a good job."
      },
      {
        age: 45,
        statement: "I'll be happy when I become secure."
      },
      {
        age: 75,
        statement: "I just want more time."
      }
    ],
    nextLabel: "Observe"
  },
  {
    id: "body",
    type: "question",
    question: "Are you your body?",
    nextLabel: "Observe",
  },

  {
    id: "thoughts",
    type: "question",
    question: "Thoughts come and go. Who notices them?",
    nextLabel: "Continue",
  },

  {
    id: "wheel",
    type: "wheel",
    nextLabel: "Continue",
  },

  {
    id: "final",
    type: "reflection",
    title: "Observe.",
    subtitle: "Who is observing?",
  },
];