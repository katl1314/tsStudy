var E3;
(function (E3) {
    E3[E3["X"] = 0] = "X";
    E3[E3["Y"] = 1] = "Y";
    E3[E3["Z"] = 2] = "Z";
})(E3 || (E3 = {}));
function f(obj) {
    return obj.X;
}
f(E3);
f({ X: 10 });
