// 유니온 열거형과 유니온 멤버 타입
enum ShapeKind {
    Circle,
    Square,
}

interface Kind {
    kind: ShapeKind.Circle | ShapeKind.Square;
}

interface Circle extends Kind {
    radius: number;
}

interface Shape extends Kind {
    sideLength: number;
}

let c: Circle = {
    radius: 100,
    kind: ShapeKind.Circle,
};

let s: Shape = {
    sideLength: 20,
    kind: ShapeKind.Square,
};
