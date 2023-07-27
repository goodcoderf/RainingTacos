/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Counter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("digit1", "./Counter/costumes/digit1.png", { x: 9, y: 20 }),
      new Costume("digit2", "./Counter/costumes/digit2.png", { x: 16, y: 21 }),
      new Costume("digit3", "./Counter/costumes/digit3.png", { x: 16, y: 21 }),
      new Costume("digit4", "./Counter/costumes/digit4.png", { x: 11, y: 21 }),
      new Costume("digit5", "./Counter/costumes/digit5.png", { x: 16, y: 19 }),
      new Costume("digit6", "./Counter/costumes/digit6.png", { x: 15, y: 20 }),
      new Costume("digit7", "./Counter/costumes/digit7.png", { x: 16, y: 20 }),
      new Costume("digit8", "./Counter/costumes/digit8.png", {
        x: 7.5,
        y: 10.5
      }),
      new Costume("digit9", "./Counter/costumes/digit9.png", { x: 11, y: 20 }),
      new Costume("digit0", "./Counter/costumes/digit0.png", { x: 14, y: 20 })
    ];

    this.sounds = [new Sound("pop", "./Counter/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.digits = 1;
    this.vars.currentDigit = 2;
  }

  *whenGreenFlagClicked() {
    this.goto(-117, -156);
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    while (true) {
      this.vars.digits = this.toString(this.stage.vars.score).length;
      yield* this.update();
      yield;
    }
  }

  *update() {
    this.clearPen();
    this.visible = true;
    this.x = -117;
    this.vars.currentDigit = 1;
    for (let i = 0; i < this.toNumber(this.vars.digits); i++) {
      this.costume =
        "digit" +
        this.letterOf(this.stage.vars.score, this.vars.currentDigit - 1);
      this.stamp();
      this.vars.currentDigit++;
      if (this.compare(this.vars.digits, 1) > 0) {
        this.x += 25;
      }
    }
    this.visible = false;
  }
}
