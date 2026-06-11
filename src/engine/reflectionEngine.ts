export function buildReflection(
    teaching: string
  ) {
    switch (teaching) {
      case "witness":
        return [
          "What has changed in your life?",
          "What noticed those changes?",
        ];
  
      case "karma":
        return [
          "What outcome are you attached to?",
          "Can you focus only on action?",
        ];
  
      case "attachment":
        return [
          "What are you afraid of losing?",
          "Who would you be without it?",
        ];
  
      default:
        return [
          "Observe.",
        ];
    }
  }