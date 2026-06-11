"use client";

import { Handle, Position } from "reactflow";
import { useRouter } from "next/navigation";

export default function ConceptNode({
  data,
  id,
}: any) {
  const router = useRouter();

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
      />

      <div
        onClick={() =>
          router.push(`/concepts/${id}`)
        }
        className=" bg-black border border-zinc-700 rounded-lg px-4 py-2 cursor-pointer hover:border-white"
      >
        {data.label}
      </div>

      <Handle
        type="source"
        position={Position.Right}
      />
    </>
  );
}