import { TagData } from "~/types";

export const TAGS: TagData = {
  div: {
    type: ["Flow", "Palpable"],
    parents: {},
    children: { Flow: "*" },
  },
  p: {
    type: ["Flow", "Palpable"],
    parents: {},
    children: { Phrasing: "*" },
  },
};
