import { Howl } from "howler";

export const ambientAudio = new Howl({
  src: ["./audio/ambient.mp3"],
  loop: true,
  volume: 0.05,
});