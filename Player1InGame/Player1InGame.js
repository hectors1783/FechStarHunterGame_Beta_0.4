/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player1InGame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./Player1InGame/costumes/dot-a.svg", {
        x: 51.77605745066711,
        y: 53.06465877386151
      })
    ];

    this.sounds = [new Sound("bark", "./Player1InGame/sounds/bark.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal3
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartNormal() {
    this.stage.vars.playersAlive = this.stage.vars.playersInParty;
    this.visible = true;
    this.size = 20;
    this.goto(-125, 25);
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.direction = 0;
        this.move(this.stage.vars.energy + 5);
        while (!!this.keyPressed("up arrow")) {
          yield;
        }
      }
      if (this.keyPressed("down arrow")) {
        this.direction = 180;
        this.move(this.stage.vars.energy + 10);
        while (!!this.keyPressed("down arrow")) {
          yield;
        }
      }
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.move(this.stage.vars.energy + 10);
        while (!!this.keyPressed("right arrow")) {
          yield;
        }
      }
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.move(this.stage.vars.energy + 10);
        while (!!this.keyPressed("left arrow")) {
          yield;
        }
      }
      if (this.touching(this.sprites["Maze"].andClones())) {
        this.move("" + "-" + (this.stage.vars.energy + 10));
      }
      yield;
    }
  }

  *whenIReceiveStartNormal2() {
    while (true) {
      null;
      yield;
    }
  }

  *whenIReceiveStartNormal3() {
    while (true) {
      if (
        this.stage.vars.playersAlive == 0 ||
        this.stage.vars.playersAlive < 0
      ) {
        this.broadcast("You Lost");
      }
      yield;
    }
  }
}
