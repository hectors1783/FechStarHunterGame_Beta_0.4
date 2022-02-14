import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Lobby from "./Lobby/Lobby.js";
import Player1InLobby from "./Player1InLobby/Player1InLobby.js";
import Player2InLobby from "./Player2InLobby/Player2InLobby.js";
import Player3InLobby2 from "./Player3InLobby2/Player3InLobby2.js";
import News from "./News/News.js";
import ChangeGameModeButton from "./ChangeGameModeButton/ChangeGameModeButton.js";
import Maze from "./Maze/Maze.js";
import Player1InGame from "./Player1InGame/Player1InGame.js";
import Player2InGame from "./Player2InGame/Player2InGame.js";
import Player3inGame from "./Player3inGame/Player3inGame.js";
import Star from "./Star/Star.js";
import Beetle from "./Beetle/Beetle.js";
import Beetle2 from "./Beetle2/Beetle2.js";
import YouLose from "./YouLose/YouLose.js";
import Ghost from "./Ghost/Ghost.js";
import MazeTag from "./MazeTag/MazeTag.js";
import Player1TagIngame from "./Player1TagIngame/Player1TagIngame.js";
import Player2InGameTag from "./Player2InGameTag/Player2InGameTag.js";
import Player3inGame2 from "./Player3inGame2/Player3inGame2.js";
import P1Race from "./P1Race/P1Race.js";
import P2Race from "./P2Race/P2Race.js";
import RaceWinScreen from "./RaceWinScreen/RaceWinScreen.js";
import PlayersOne from "./PlayersOne/PlayersOne.js";
import PlayersTwo from "./PlayersTwo/PlayersTwo.js";
import PlayersThree from "./PlayersThree/PlayersThree.js";
import Score from "./Score/Score.js";
import Win from "./Win/Win.js";
import PlayerWhoIsItTag from "./PlayerWhoIsItTag/PlayerWhoIsItTag.js";
import Beetle3 from "./Beetle3/Beetle3.js";
import Beetle4 from "./Beetle4/Beetle4.js";
import Beetle5 from "./Beetle5/Beetle5.js";
import Beetle6 from "./Beetle6/Beetle6.js";
import Beetle7 from "./Beetle7/Beetle7.js";
import Beetle8 from "./Beetle8/Beetle8.js";
import Beetle9 from "./Beetle9/Beetle9.js";
import Beetle10 from "./Beetle10/Beetle10.js";
import ReleseShower from "./ReleseShower/ReleseShower.js";
import Beetle11 from "./Beetle11/Beetle11.js";
import Beetle12 from "./Beetle12/Beetle12.js";
import Beetle13 from "./Beetle13/Beetle13.js";
import TiredMeter from "./TiredMeter/TiredMeter.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Beetle14 from "./Beetle14/Beetle14.js";
import Beetle15 from "./Beetle15/Beetle15.js";
import Beetle16 from "./Beetle16/Beetle16.js";
import Beetle17 from "./Beetle17/Beetle17.js";
import VeiwDstance from "./VeiwDstance/VeiwDstance.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Lobby: new Lobby({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player1InLobby: new Player1InLobby({
    x: 69,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player2InLobby: new Player2InLobby({
    x: -16,
    y: -62,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player3InLobby2: new Player3InLobby2({
    x: 191,
    y: -76,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  News: new News({
    x: -166,
    y: -65,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  ChangeGameModeButton: new ChangeGameModeButton({
    x: -18,
    y: 118,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Maze: new Maze({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Player1InGame: new Player1InGame({
    x: -71,
    y: 29.00000000000003,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Player2InGame: new Player2InGame({
    x: -30,
    y: 49.000000000000014,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player3inGame: new Player3inGame({
    x: -55,
    y: 16,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Star: new Star({
    x: -214,
    y: 86,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Beetle: new Beetle({
    x: 48,
    y: -154,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle2: new Beetle2({
    x: -114,
    y: -154,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  YouLose: new YouLose({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Ghost: new Ghost({
    x: -160.56555594000355,
    y: -31.43798649861564,
    direction: 32.217921764065075,
    costumeNumber: 1,
    size: 36,
    visible: false
  }),
  MazeTag: new MazeTag({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player1TagIngame: new Player1TagIngame({
    x: -25,
    y: -25,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player2InGameTag: new Player2InGameTag({
    x: -45,
    y: -81,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player3inGame2: new Player3inGame2({
    x: 145,
    y: 66,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  P1Race: new P1Race({
    x: 276,
    y: 103,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  P2Race: new P2Race({
    x: 276,
    y: -85,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  RaceWinScreen: new RaceWinScreen({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayersOne: new PlayersOne({
    x: 2,
    y: 24,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayersTwo: new PlayersTwo({
    x: 128,
    y: 21,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayersThree: new PlayersThree({
    x: 70,
    y: -28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Score: new Score({
    x: -213,
    y: 143,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: true
  }),
  Win: new Win({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayerWhoIsItTag: new PlayerWhoIsItTag({
    x: -182,
    y: 137,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  Beetle3: new Beetle3({
    x: -218,
    y: -29,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle4: new Beetle4({
    x: 215,
    y: 156,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle5: new Beetle5({
    x: -218,
    y: -55,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle6: new Beetle6({
    x: -220,
    y: 125,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle7: new Beetle7({
    x: 60,
    y: -160,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle8: new Beetle8({
    x: -65,
    y: 40,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle9: new Beetle9({
    x: -217,
    y: 136,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle10: new Beetle10({
    x: -93,
    y: -167,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  ReleseShower: new ReleseShower({
    x: -82,
    y: 116,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Beetle11: new Beetle11({
    x: -219,
    y: 124,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle12: new Beetle12({
    x: -160,
    y: 88,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle13: new Beetle13({
    x: 160,
    y: -124,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  TiredMeter: new TiredMeter({
    x: 184,
    y: 149,
    direction: 90,
    costumeNumber: 9,
    size: 50,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: 31,
    y: 11,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Beetle14: new Beetle14({
    x: -222,
    y: 148,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle15: new Beetle15({
    x: -121,
    y: 151,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle16: new Beetle16({
    x: -85,
    y: 139,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  Beetle17: new Beetle17({
    x: -83.52938122065599,
    y: 32.61722508393601,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: true
  }),
  VeiwDstance: new VeiwDstance({
    x: -91.1428,
    y: 37.8568,
    direction: 180,
    costumeNumber: 1,
    size: 25,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
