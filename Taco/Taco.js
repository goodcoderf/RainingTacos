/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Taco extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Taco/costumes/costume1.png", { x: 97, y: 60 })
    ];

    this.sounds = [new Sound("pop", "./Taco/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    while (true) {
      this.goto(this.random(-240, 240), this.random(-180, 180));
      this.y = 180;
      while (
        !(
          this.y === -182 || this.touching(this.sprites["TacoBowl"].andClones())
        )
      ) {
        this.y -= 5;
        if (this.touching(this.sprites["TacoBowl"].andClones())) {
          this.stage.vars.score++;
        }
        yield;
      }
      yield;
    }
  }
}
