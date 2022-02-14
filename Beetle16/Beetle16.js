/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beetle16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("beetle", "./Beetle16/costumes/beetle.svg", {
        x: 42.21083630838794,
        y: 37.473247238753856
      })
    ];

    this.sounds = [new Sound("pop", "./Beetle16/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStartNormal() {
    this.visible = true;
    this.size = 20;
    this.goto(-130, 100);
    this.direction = 90;
    while (true) {
      this.move(3);
      if (this.touching(this.sprites["Maze"].andClones())) {
        if (this.random(1, 2) == 1) {
          this.direction += 90;
        } else {
          this.direction -= 90;
        }
      }
      if (this.touching(this.sprites["Player3inGame2"].andClones())) {
        this.stage.vars.energy += -1;
        yield* this.wait(0.5);
      }
      if (this.touching(this.sprites["Player2InGame"].andClones())) {
        this.stage.vars.energy += -1;
        yield* this.wait(0.5);
      }
      if (this.touching(this.sprites["Player1InGame"].andClones())) {
        this.stage.vars.energy += -1;
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
