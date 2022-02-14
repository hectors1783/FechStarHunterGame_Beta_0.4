/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beetle17 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("beetle", "./Beetle17/costumes/beetle.svg", {
        x: 42.21083630838794,
        y: 37.473247238753856
      })
    ];

    this.sounds = [new Sound("pop", "./Beetle17/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "see player" },
        this.whenIReceiveSeePlayer
      )
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
      if (this.touching(this.sprites["Player1InGame"].andClones())) {
        this.broadcast("PLayer 1 dead");
        this.stage.vars.playersAlive += -1;
      }
      if (this.touching(this.sprites["Player2InGame"].andClones())) {
        this.broadcast("Player 2 dead");
        this.stage.vars.playersAlive += -1;
      }
      if (this.touching(this.sprites["Player3inGame"].andClones())) {
        this.broadcast("Player 3 dead");
        this.stage.vars.playersAlive += -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSeePlayer() {
    while (true) {
      yield* this.glide(
        10,
        this.sprites["Player1InGame"].x,
        this.sprites["Player1InGame"].y
      );
      if (this.touching(this.sprites["Player1InGame"].andClones())) {
        this.broadcast("PLayer 1 dead");
        this.stage.vars.playersAlive += -1;
      }
      yield* this.glide(
        10,
        this.sprites["Player2InGame"].x,
        this.sprites["Player2InGame"].y
      );
      if (this.touching(this.sprites["Player2InGame"].andClones())) {
        this.broadcast("Player 2 dead");
        this.stage.vars.playersAlive += -1;
      }
      yield* this.glide(
        10,
        this.sprites["Player3inGame"].x,
        this.sprites["Player3inGame"].y
      );
      if (this.touching(this.sprites["Player3inGame"].andClones())) {
        this.broadcast("Player 3 dead");
        this.stage.vars.playersAlive += -1;
      }
      yield;
    }
  }
}
