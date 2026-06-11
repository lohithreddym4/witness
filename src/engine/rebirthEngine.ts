export interface RebirthResult {
    rebirth: boolean;
  
    remainingDesires: string[];
  }
  
  export function evaluateLife(
    desires: string[]
  ): RebirthResult {
    if (desires.length === 0) {
      return {
        rebirth: false,
        remainingDesires: [],
      };
    }
  
    return {
      rebirth: true,
      remainingDesires: desires,
    };
  }