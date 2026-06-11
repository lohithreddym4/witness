export const desireNodes = [
    {
      id: "desire",
      position: { x: 250, y: 0 },
      data: { label: "I Want More Money" },
      type: "default",
    },
  
    {
      id: "security",
      position: { x: 100, y: 150 },
      data: { label: "Security" },
    },
  
    {
      id: "fear",
      position: { x: 400, y: 150 },
      data: { label: "Fear of Losing" },
    },
  
    {
      id: "attachment",
      position: { x: 250, y: 300 },
      data: { label: "Attachment" },
    },
  ];
  
  export const desireEdges = [
    {
      id: "1",
      source: "desire",
      target: "security",
    },
  
    {
      id: "2",
      source: "desire",
      target: "fear",
    },
  
    {
      id: "3",
      source: "security",
      target: "attachment",
    },
  
    {
      id: "4",
      source: "fear",
      target: "attachment",
    },
  ];