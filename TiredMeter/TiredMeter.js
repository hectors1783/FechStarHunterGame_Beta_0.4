/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TiredMeter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./TiredMeter/costumes/0.svg", {
        x: 104.0000025,
        y: 49.12109375
      }),
      new Costume("1", "./TiredMeter/costumes/1.svg", {
        x: 104.0000025,
        y: 49.12109375
      }),
      new Costume("2", "./TiredMeter/costumes/2.svg", {
        x: 104.0000025,
        y: 49.12109375
      }),
      new Costume("3", "./TiredMeter/costumes/3.svg", {
        x: 391.2265625,
        y: 49.12109375
      }),
      new Costume("4", "./TiredMeter/costumes/4.svg", {
        x: 104.0000025,
        y: 49.12109375
      }),
      new Costume("5", "./TiredMeter/costumes/5.svg", {
        x: 104.0000025,
        y: 49.12109375
      }),
      new Costume("6", "./TiredMeter/costumes/6.svg", {
        x: 104.0000025,
        y: 49.12109375
      }),
      new Costume("7", "./TiredMeter/costumes/7.svg", {
        x: 104.0000025,
        y: 49.12109375
      }),
      new Costume("8", "./TiredMeter/costumes/8.svg", {
        x: 104.0000025,
        y: 49.12109375
      })
    ];

    this.sounds = [new Sound("pop", "./TiredMeter/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(184, 149);
    this.stage.vars.energy = 8;
    while (true) {
      this.costume = this.stage.vars.energy + 1;
      yield;
    }
  }

  *whenIReceiveStartNormal() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.energy == 8 || this.stage.vars.energy > 8) {
        this.stage.vars.energy = 8;
      }
      if (this.stage.vars.energy == 0) {
        this.broadcast("Out of energy");
      }
      yield;
    }
  }

  *whenIReceiveStartNormal2() {
    while (true) {
      yield* this.wait(20);
      this.stage.vars.energy += -1;
      yield;
    }
  }
}
