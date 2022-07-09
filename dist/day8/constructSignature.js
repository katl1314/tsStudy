/**
 * 인터페이스에 직접 new연산자를 이용하여 인스턴스를 만드는 것은 문제가 발생한다.
 * 인터페이스는 호출 가능한 구조가 아니기 때문/
 */
class Cat2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
function makeKitten(c, name) {
    return new c(name);
}
const kitten = makeKitten(Cat2, "park");
console.log(kitten);
console.log(kitten.getName());
console.log(Object.getOwnPropertyDescriptor(Cat2.prototype, "getName"));
