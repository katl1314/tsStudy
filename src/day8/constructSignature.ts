/**
 * 인터페이스에 직접 new연산자를 이용하여 인스턴스를 만드는 것은 문제가 발생한다.
 * 인터페이스는 호출 가능한 구조가 아니기 때문/
 */

interface ICat {
    name: string;
}

class Cat2 implements ICat {
    constructor(public name: string) {}
    getName() {
        return this.name;
    }
}

// 구성 시그니처를 가지는 호출 가능한 인터페이스를 정의하면, 인스턴스를 생성할 수 있음.
interface ICatConstructor {
    // 구성 시그니처
    // new: (생성자 함수 매개변수, ...): 인스턴스 반환 타입
    new (name: string): ICat;
}

/* 함수 오버로딩 */
function makeKitten(c: ICat, name: string): Cat2;
function makeKitten(c: ICatConstructor, name: string): Cat2;
function makeKitten(c: ICat | ICatConstructor, name: string) {
    return new (<ICatConstructor>c)(name);
}

const kitten = makeKitten(Cat2, "park");
console.log(kitten);

console.log(kitten.getName());

console.log(Object.getOwnPropertyDescriptor(Cat2.prototype, "getName"));
