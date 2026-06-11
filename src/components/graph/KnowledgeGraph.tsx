"use client";

import {
  chapterGraph,
} from "@/content/chapters/graph";

export default function KnowledgeGraph() {
  return (
    <div className="p-20">

      {Object.entries(
        chapterGraph
      ).map(([parent, children]) => (
        <div
          key={parent}
          className="mb-12"
        >
          <h2 className="text-4xl">
            {parent}
          </h2>

          <div className="ml-8 mt-4">
            {children.map((child) => (
              <div key={child}>
                └ {child}
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}