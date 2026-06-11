export interface LifeState {
    age: number;
  
    money: number;
  
    status: number;
  
    relationships: number;
  
    health: number;
  }
  
  export function nextYear(
    state: LifeState
  ): LifeState {
    return {
      age: state.age + 1,
  
      money:
        state.money +
        Math.floor(
          Math.random() * 10
        ),
  
      status:
        state.status +
        Math.floor(
          Math.random() * 5
        ),
  
      relationships:
        state.relationships +
        Math.floor(
          Math.random() * 3
        ),
  
      health:
        state.age > 50
          ? state.health - 2
          : state.health,
    };
  }