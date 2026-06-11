export const conceptNodes = [
    {
      id: "body",
      position: { x: 0, y: 100 },
      data: { label: "Body" },
    },
  
    {
      id: "mind",
      position: { x: 0, y: 300 },
      data: { label: "Mind" },
    },
  
    {
      id: "witness",
      position: { x: 300, y: 200 },
      data: { label: "Witness" },
    },
  
    {
      id: "action",
      position: { x: 600, y: 100 },
      data: { label: "Action" },
    },
  
    {
      id: "detachment",
      position: { x: 900, y: 200 },
      data: { label: "Detachment" },
    },
  
    {
      id: "moksha",
      position: { x: 1200, y: 200 },
      data: { label: "Moksha" },
    },
  ];
  
  export const conceptEdges = [
    {
      id: "e1",
      source: "body",
      target: "witness",
    },
  
    {
      id: "e2",
      source: "mind",
      target: "witness",
    },
  
    {
      id: "e3",
      source: "witness",
      target: "action",
    },
  
    {
      id: "e4",
      source: "action",
      target: "detachment",
    },
  
    {
      id: "e5",
      source: "detachment",
      target: "moksha",
    },
  ];