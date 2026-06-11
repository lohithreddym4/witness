"use client";

import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

import {
  conceptNodes,
  conceptEdges,
} from "@/content/concepts/graph";

import ConceptNode from "./ConceptNode";

const nodeTypes = {
  concept: ConceptNode,
};

export default function ConceptGraph() {
  const nodes = conceptNodes.map(
    (node) => ({
      ...node,
      type: "concept",
    })
  );

  return (
    <div className="h-[800px]">

      <ReactFlow
        nodes={nodes}
        edges={conceptEdges}
        nodeTypes={nodeTypes}
        fitView
      />

    </div>
  );
}