"use client";

import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

import {
  desireNodes,
  desireEdges,
} from "@/content/concepts/desireGraph";

export default function DesireGraph() {
  return (
    <div className="h-screen">
      <ReactFlow
        nodes={desireNodes}
        edges={desireEdges}
        fitView
      />
    </div>
  );
}