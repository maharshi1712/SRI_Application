function dist(x1, y1, x2, y2) {
    console.log("HA");
    var distance = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
    return distance;
}
var d = dist(2, 5, 5, 10);
console.log("D = ", d);