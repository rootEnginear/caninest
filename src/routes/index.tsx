import { createMemo, createSignal, For } from "solid-js";
import { TAGS } from "~/data/tags";
import { TagType } from "~/types";

export default function Home() {
  const [parent, setParent] = createSignal("");
  const [children, setChildren] = createSignal("");

  const isAllowed = createMemo(() => {
    const parentTagInfo = TAGS[parent()];
    if (!parentTagInfo) return { allowed: null, information: `${parent()} tag unknown` };

    const childrenTagInfo = TAGS[children()];
    if (!childrenTagInfo)
      return { allowed: null, information: `${children()} tag unknown` };

    const parentAllowedChildren = Object.keys(parentTagInfo.children) as TagType[];
    if (parentAllowedChildren.length > 0) {
      const isParentAllowChildren = parentAllowedChildren.find((allowedType) =>
        childrenTagInfo.type.includes(allowedType)
      );
      if (!isParentAllowChildren)
        return {
          allowed: false,
          information: `${parent()} doesn't allow ${children()} as a children, because ${parent()} only allows ${Object.keys(
            parentTagInfo.children
          ).join(", ")} but ${children()} is ${childrenTagInfo.type.join(", ")}`,
        };
    }

    const childrenAllowedParents = Object.keys(childrenTagInfo.parents) as TagType[];
    if (childrenAllowedParents.length > 0) {
      const isChildrenAllowParents = childrenAllowedParents.find((allowedType) =>
        parentTagInfo.type.includes(allowedType)
      );
      if (!isChildrenAllowParents)
        return {
          allowed: false,
          information: `${children()} doesn't allow ${parent()} as a parent, because ${children()} only allows ${Object.keys(
            childrenTagInfo.parents
          ).join(", ")} but ${parent()} is ${parentTagInfo.type.join(", ")}`,
        };
    }

    return { allowed: true, information: "Yes!" };
  });

  return (
    <main class="container mx-auto px-4 py-8 flex flex-col gap-2">
      <h1 class="text-5xl font-bold">Can I nest...</h1>
      <p class="-mt-1">HTML tag nesting checker</p>
      <hr />
      <div class="font-mono flex items-center gap-1">
        <datalist id="tag-list">
          <For each={Object.keys(TAGS)}>{(tag) => <option value={tag} />}</For>
        </datalist>
        <input
          class="border"
          type="text"
          list="tag-list"
          value={parent()}
          onInput={(e) => setParent(e.currentTarget.value)}
        />
        <span>&gt;</span>
        <input
          class="border"
          type="text"
          list="tag-list"
          value={children()}
          onInput={(e) => setChildren(e.currentTarget.value)}
        />
      </div>
      <p>{isAllowed().information}</p>
    </main>
  );
}
