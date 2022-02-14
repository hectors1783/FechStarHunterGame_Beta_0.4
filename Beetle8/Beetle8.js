/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beetle8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("beetle", "./Beetle8/costumes/beetle.png", { x: 84, y: 75 })
    ];

    this.sounds = [new Sound("pop", "./Beetle8/sounds/pop.wav")];

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
    this.goto(-130, 90);
    this.direction = 90;
    while (true) {
      this.move(5);
      if (this.touching(this.sprites["Maze"].andClones())) {
        this.move(-5);
        if (this.random(1, 2) == 1) {
          this.direction += 90;
        } else {
          this.direction -= 90;
        }
      }
      if (this.touching(this.sprites["Player3inGame2"].andClones())) {
        this.broadcast("Player 3 dead");
        this.stage.vars.playersAlive += -1;
      }
      if (this.touching(this.sprites["Player2InGame"].andClones())) {
        this.broadcast("Player 2 dead");
        this.stage.vars.playersAlive += -1;
      }
      if (this.touching(this.sprites["Player1InGame"].andClones())) {
        this.broadcast("PLayer 1 dead");
        this.stage.vars.playersAlive += -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
