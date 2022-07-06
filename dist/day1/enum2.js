// 유니온 열거형과 유니온 멤버 타입
var IShapeKind;
(function (IShapeKind) {
    IShapeKind[IShapeKind["Circle"] = 0] = "Circle";
    IShapeKind[IShapeKind["Square"] = 1] = "Square";
})(IShapeKind || (IShapeKind = {}));
const circle = {
    radius: 100,
    kind: IShapeKind.Circle,
};
const s = {
    sideLength: 20,
    kind: IShapeKind.Square,
};
