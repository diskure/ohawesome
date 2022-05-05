function collideRectCircle(rx, ry, rw, rh, cx, cy, diameter) {
  let result = {
    intersect: false,
    side: null,
    x: cx,
    y: cy,
  };

  if (cx < rx) {
    result.x = rx;
    result.side = "left";
  } else if (cx > rx + rw) {
    result.x = rx + rw;
    result.side = "right";
  }

  if (cy < ry) {
    result.y = ry;
    result.side = "top";
  } else if (cy > ry + rh) {
    result.y = ry + rh;
    result.side = "bottom";
  }

  var distance = this.dist(cx, cy, result.x, result.y);

  result.intersect = distance <= diameter / 2;

  return result;
}
