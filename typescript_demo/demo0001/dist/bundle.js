/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        this.area = width * height;
        this.color = "pink";
    }
    Shape.prototype.shoutout = function () {
        return ("I'm " + this.color + " with an area of " + this.area + " cm squared.");
    };
    return Shape;
}());
var square = new Shape("square", 30, 30);
console.log(square.shoutout());
console.log("Area of Shape: " + square.area);
console.log("Color of Shape: " + square.color);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vMDAwMS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBR0UsZUFBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3QkFBUSxHQUFSO1FBQ0UsT0FBTyxDQUNMLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDO0FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoYXBlIHtcclxuICBhcmVhOiBudW1iZXI7XHJcbiAgY29sb3I6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFyZWEgPSB3aWR0aCAqIGhlaWdodDtcclxuICAgIHRoaXMuY29sb3IgPSBcInBpbmtcIjtcclxuICB9XHJcblxyXG4gIHNob3V0b3V0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgXCJJJ20gXCIgKyB0aGlzLmNvbG9yICsgXCIgd2l0aCBhbiBhcmVhIG9mIFwiICsgdGhpcy5hcmVhICsgXCIgY20gc3F1YXJlZC5cIlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbnZhciBzcXVhcmUgPSBuZXcgU2hhcGUoXCJzcXVhcmVcIiwgMzAsIDMwKTtcclxuY29uc29sZS5sb2coc3F1YXJlLnNob3V0b3V0KCkpO1xyXG5jb25zb2xlLmxvZyhcIkFyZWEgb2YgU2hhcGU6IFwiICsgc3F1YXJlLmFyZWEpO1xyXG5jb25zb2xlLmxvZyhcIkNvbG9yIG9mIFNoYXBlOiBcIiArIHNxdWFyZS5jb2xvcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=