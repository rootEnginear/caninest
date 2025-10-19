const TAG_TYPE = [
  "Metadata",
  "Flow",
  "Sectioning",
  "Heading",
  "Phrasing",
  "Embedded",
  "Interactive",
  "Palpable",
  "Script-supporting",
  "Form-associated",
] as const;

export type TagType = (typeof TAG_TYPE)[number];

export interface TagInfo {
  type: TagType[];
  parents: Partial<Record<TagType, /** condition */ "*" | (string & {})>>;
  children: Partial<Record<TagType, /** condition */ "*" | (string & {})>>;
}

export type TagData = Record<string, TagInfo>;
