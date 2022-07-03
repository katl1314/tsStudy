/**
 * 함수로 전달한 인자값을 출력하느 함수
 * 다음과 같이 사용하게 되면 다른 타입의 인자는 사용할 수 없음.
 * 만약 모든 타입에 대해 출력을 허용하려면 어떻게 해야 할까?
 */
/* function identity(arg: number): number {
    return arg;
} */

// 함수 매개변수 타입과 반환 타입을 any로 변경하면 모든 타입을 허용한다.
function identity(arg: any): any {
    return arg;
}

// any를 사용하게 되면 arg가 어떤 타입이든 받을 수 있기에, 제네릭이라고 생각하지만.
// 함수가 반환하고 나면 어떤 타입인지에 대한 정보는 잃는다.
// 그래서 제네릭을 이용하여 함수 호출 시 타입 정보를 제공해야 함.
// 제네릭 사용시 반드시 < >사이에 타입 변수를 명시한다. => 타입변수는 아무 이름 가능

// 함수 이름 뒤에 < > 부등호 사이에 타입 변수를 명시하여, 함수 호출 시 타입을 명시하도록 해야함.

function genericIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

// 인터페이스를 이용한 함수 시그니처
interface IFunction<T> {
    (arg: T[]): T[];
}

type functionSignature = <T>(arg: T[]) => T[];

let myIdentity: IFunction<string> = genericIdentity;

console.log(genericIdentity<string>(["apple", "graph"])); // 함수 호출시 타입 변수에 값을 전달. 함수 매개변수와 반환값 타입은 string

/**
 * 제네릭은 함수 또는 클래스, 인터페이스 등 내부에서 타입을 지정하는 것이 아닌, 외부 프로그래머에 의해 지정되는 것.
 * 필요해 의해 타입을 지정함. => 꺾세 괄호 (<>) 내 타입을 지정함.
 */

console.log(myIdentity(["asd", "bbb", "ccc"]));
let numIdentity: IFunction<number> = genericIdentity;

console.log(numIdentity([1, 2, 3]));

// 제네릭 클래스
class GenericNumber<T> {
    // 멤버에 대한 타입을 정의함.
    zeroValue: T;
    add: (x: T, y: T) => T;
}

const myGeneratorNumber = new GenericNumber<number>();
myGeneratorNumber.zeroValue = 5;

myGeneratorNumber.add = (a, b) => a + b + myGeneratorNumber.zeroValue;
console.log(myGeneratorNumber.add(10, 20));

const AA: GenericNumber<number> = {
    zeroValue: 10,
    add(x, y) {
        return x + y;
    },
};

/**
 * 제네릭 클래스는 제네릭 인터페이스와 형태가 비슷함.
 * 제네릭 클래스는 클래스명 뒤에 꺾쇠 괄호 안에 제네릭 타입 변수를 설정한다.
 * 이를 통해 여러 가지 타입을 받을 수 있음.
 */

interface Lengthwise {
    length: number;
}

/**
 * loggingIdentity함수의 인자에 length프로퍼티가 있는 값만 전달 할 수 있음.
 * 범위 최소화
 */
function loggingIdentity<T extends Lengthwise>(arg: T) {
    return arg.length;
}

// loggingIdentity<number>(1); // 숫자형은 내부에 length속성을 갖지 않기 때문에 에러 발생
loggingIdentity<string>("apple"); // 문자열을 객체로서, length프로퍼티를 갖는다. length속성 사용시 잠시 래퍼 객체 생성

let x = { a: 1, b: 2, c: 3, d: 4 };

/**
 * keyof연산자는 Object의 key들을 가져온다.
 * 지금은 x라는 객체의 키를 가져오게 되면 keyof T는 'a' | 'b' | 'c' | 'd'가 되며
 * 두번째 인자는 위 4개 이외의 값은 받을 수 없게 된다.
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    // 프로퍼티가 해당 객체에 있으면 true, 없으면 false를 반환하는 기능
    return key in obj;
}

console.log(getProperty(x, "a"));

function hello<T extends number | string>(arg: T) {
    console.log(arg);
}

hello(1);
hello("as");

interface IPerson {
    name: string;
    age: number;
    readonly gender: string;
    isMarray?: boolean;
}

function getPersonInfo<T, K extends keyof IPerson>(obj: T, key: K): boolean {
    return key in obj;
}

const myPerson: IPerson = {
    name: "James",
    age: 30,
    gender: "male",
};

console.log(getPersonInfo(myPerson, "gender"));
