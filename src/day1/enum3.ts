enum E3 {
    X,
    Y,
    Z,
}

function f(obj: { X: number }) {
    return obj.X;
}

f(E3);
f({ X: 10 });
