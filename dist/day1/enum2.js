// 유니온 열거형과 유니온 멤버 타입
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
let c = {
    radius: 100,
    kind: ShapeKind.Circle,
};
let s = {
    sideLength: 20,
    kind: ShapeKind.Square,
};
