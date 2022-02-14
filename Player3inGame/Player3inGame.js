/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player3inGame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./Player3inGame/costumes/dot-a.svg", {
        x: 51.776055827576215,
        y: 53.06465877386157
      })
    ];

    this.sounds = [new Sound("bark", "./Player3inGame/sounds/bark.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal2
      )
    ];
  }

  *whenIReceiveStartNormal() {
    while (true) {
      null;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartNormal2() {
    if (this.stage.vars.playersInParty == 3) {
      this.visible = true;
      this.size = 20;
      this.goto(-55, 16);
      while (true) {
        if (this.keyPressed(8)) {
          this.direction = 0;
          this.move(this.stage.vars.energy + 10);
          while (!!this.keyPressed(8)) {
            yield;
          }
        }
        if (this.keyPressed(5)) {
          this.direction = 180;
          this.move(this.stage.vars.energy + 10);
          while (!!this.keyPressed(5)) {
            yield;
          }
        }
        if (this.keyPressed(6)) {
          this.direction = 90;
          this.move(this.stage.vars.energy + 10);
        }
        while (!!this.keyPressed(5)) {
          yield;
        }
        if (this.keyPressed(4)) {
          this.direction = -90;
          this.move(this.stage.vars.energy + 10);
          while (!!this.keyPressed(3)) {
            yield;
          }
        }
        if (this.touching(this.sprites["Maze"].andClones())) {
          this.move("" + "-" + (this.stage.vars.energy + 10));
        }
        yield;
      }
    }
  }
}
