import { lifeEvents } from "@/content/simulator/lifeEvents";

export interface LifeState {
  age: number;

  money: number;

  status: number;

  health: number;

  relationships: number;

  desires: string[];
}

export const initialLifeState: LifeState = {
  age: 0,
  money: 0,
  status: 0,
  health: 100,
  relationships: 0,
  desires: [],
};

export function nextYear(
  state: LifeState
): LifeState {
  const age = state.age + 1;

  const event = lifeEvents.find(
    (e) => e.age === age
  );

  const nextState: LifeState = {
    ...state,
    age,
    health:
      age > 50
        ? Math.max(
            state.health - 2,
            0
          )
        : state.health,
  };

  if (!event) {
    return nextState;
  }

  return {
    ...nextState,

    money:
      nextState.money +
      (event.effect.money ?? 0),

    status:
      nextState.status +
      (event.effect.status ?? 0),

    relationships:
      nextState.relationships +
      (event.effect
        .relationships ?? 0),

    desires:
      event.effect.desire
        ? [
            ...nextState.desires,
            event.effect.desire,
          ]
        : nextState.desires,
  };
}