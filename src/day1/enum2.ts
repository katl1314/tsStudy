// 유니온 열거형과 유니온 멤버 타입
enum IShapeKind {
    Circle,
    Square,
}

interface IKind {
    kind: IShapeKind.Circle | IShapeKind.Square;
}

interface ICircle extends IKind {
    radius: number;
}

interface IShape extends IKind {
    sideLength: number;
}

const circle: ICircle = {
    radius: 100,
    kind: IShapeKind.Circle,
};

const s: IShape = {
    sideLength: 20,
    kind: IShapeKind.Square,
};
