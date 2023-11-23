import * as drawlib from "./drawlib.js";
import * as color from "./color.js";

/**
 * @throws {string}
 * @returns {CanvasRenderingContext2D}
 * @param {string} id
 */
function get2DContextById(id) {
  const canvas = document.getElementById(id);
  if (canvas === null) {
    throw "No html element with id `canvas` found";
  }
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw "The selected element is not a canvas";
  }
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      return ctx;
    } else {
      throw "Error when getting the context";
    }
  } else {
    throw "`getContext` is not a property of the element. Please use a modern browser.";
  }
}

const BODY_COLOR = color.grey;
const HEAD_COLOR = color.grey;
const TRUNK_COLOR = color.brown;
const LEAF_COLOR = color.green;

const headOne = drawlib.group([
  drawlib.square(HEAD_COLOR, 50),
  drawlib.move(10, -10, drawlib.circle(color.black, 6)),
  drawlib.polygon(color.black, [
    { x: 25, y: 4 },
    { x: 17, y: 4 },
    { x: 21, y: 7 },
  ])
]);

const headTwo = drawlib.group([
    drawlib.square(HEAD_COLOR, 50),
    drawlib.move(-10, -10, drawlib.circle(color.black, 6)),
    drawlib.polygon(color.black, [
      { x: -25, y: 4 },
      { x: -17, y: 4 },
      { x: -21, y: 7 },
    ])
  ]);

const bodyOne = drawlib.group([
  drawlib.rectangle(BODY_COLOR, 200, 120)
]);

const bodyTwo = drawlib.group([
    drawlib.rectangle(BODY_COLOR, 200, 120)
  ]);

const sheepOne = drawlib.group([
  drawlib.move(290, 0, headOne),
  // neck
  drawlib.move(255, 0, drawlib.rectangle(color.black, 20, 15)),
  drawlib.move(145, 35, bodyOne),
  // feet
  drawlib.move(55,120,drawlib.rectangle(color.black,20,50)),
  drawlib.move(235,120,drawlib.rectangle(color.black,20,50)),
]);

const sheepTwo = drawlib.group([
    drawlib.move(0, 0, headTwo),
    // neck
    drawlib.move(35, 0, drawlib.rectangle(color.black, 20, 15)),
    drawlib.move(145, 35, bodyTwo),
    // feet
    drawlib.move(55,120,drawlib.rectangle(color.black,20,50)),
    drawlib.move(235,120,drawlib.rectangle(color.black,20,50)),
]);

const treeOne = drawlib.group([
    drawlib.move(0,30,drawlib.rectangle(TRUNK_COLOR,40,250)),
    drawlib.move(0,-200,drawlib.circle(LEAF_COLOR,110))
])

const treeTwo = drawlib.group([
    drawlib.move(0,30,drawlib.rectangle(TRUNK_COLOR,40,250)),
    drawlib.move(0,-200,drawlib.circle(LEAF_COLOR,110))
])

const treeThree = drawlib.group([
    drawlib.move(0,30,drawlib.rectangle(TRUNK_COLOR,40,250)),
    drawlib.move(0,-200,drawlib.circle(LEAF_COLOR,110))
])

const landscape = drawlib.group([
    drawlib.move(100,150,sheepOne),
    drawlib.move(-300,-50,sheepTwo),
    drawlib.move(500,150,treeOne),
    drawlib.move(-500,200,treeTwo),
    drawlib.move(0,-10,treeThree)
])

function main() {
  const context = get2DContextById("canvas");
  drawlib.renderCentered(landscape, context);
}
main();
