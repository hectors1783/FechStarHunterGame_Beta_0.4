/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class VeiwDstance extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./VeiwDstance/costumes/costume1.png", {
        x: -9,
        y: 153
      })
    ];

    this.sounds = [new Sound("pop", "./VeiwDstance/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartNormal() {
    this.visible = true;
    this.effects.ghost = 50;
    while (true) {
      this.goto(this.sprites["Beetle17"].x, this.sprites["Beetle17"].y);
      this.direction = this.sprites["Beetle17"].direction;
      if (
        this.touching(this.sprites["Player1InGame"].andClones()) ||
        this.touching(this.sprites["Player2InGame"].andClones()) ||
          this.touching(this.sprites["Player3inGame"].andClones())
      ) {
        this.broadcast("see player");
        yield* this.wait(3);
      }
      yield;
    }
  }
}
