import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Taco from "./Taco/Taco.js";
import TacoBowl from "./TacoBowl/TacoBowl.js";
import Counter from "./Counter/Counter.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Taco: new Taco({
    x: 160,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 1
  }),
  TacoBowl: new TacoBowl({
    x: 220,
    y: -137,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Counter: new Counter({
    x: -117,
    y: -156,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
