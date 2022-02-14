/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ReleseShower extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ReleseShower/costumes/costume1.svg", {
        x: 139.4765625,
        y: 2.12109375
      })
    ];

    this.sounds = [new Sound("pop", "./ReleseShower/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      this.goto(-82, 116);
      yield;
    }
  }

  *whenIReceiveStartTag() {
    this.visible = false;
  }
}
