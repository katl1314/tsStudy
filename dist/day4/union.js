// declare function getSmallPet2(arg: boolean): Fish2 | Bird2;
function getSmallPet2(arg) {
    if (arg) {
        let fish2 = {
            swim() {
                console.log("수영");
            },
            leg: 0,
        };
        return fish2;
    }
    let bird2 = {
        fly() {
            console.log("수영");
        },
        leg: 2,
    };
    return bird2;
}
let pet2 = getSmallPet2(true);
// pet2의 타입이 Fish2인지 Bird2인지 정확하게 알 수 없기 때문에,
// 타입 단언을 통해 강제적으로 호출할 수 있음.
if (pet2.swim !== undefined) {
    pet2.swim();
}
else if (pet2.fly !== undefined)
    pet2.fly();
/**
 * 유니온 타입의 모든 구성 성분을 가지고 있다고 보장되는 멤버에만,
 * 접근이 허용된다.
 */
/**
 * 타입 서술어를 이용하여 타입 가드 정의
 * 타입 서술어는, 함수 리턴 타입에 is연산자를 이용하여, 작성한다.
 * 형태는 paramName is Type형태 paramName은 -> 함수 시그니처 매개변수의 이름
 */
// 해당 함수의 타입 서술어는 pet is Fish2
// isFish함수를 호출할 경우 전달한 변수를 반드시 해당 타입으로 제한함.
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet2)) {
    pet2.swim();
}
else {
    pet2.fly();
}
// in연산자 이용 객체 내 프로퍼티 여부를 확인하는 연산자로
// 함수로 전달한 인자내 메서드의 유무에 따라 타입을 좁힐 수 있음.
function move(pet) {
    // 함수로 전달한 값
    if ("swim" in pet) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
/**
 * typeof를 이용한 타입 가드
 */
function isString(value) {
    return typeof value === "string";
}
function isNumber(value) {
    return typeof value === "number";
}
function padLeft2(value, padding) {
    if (isString(padding)) {
        // 두번째 인자가 문자열이면, 첫번째 인자 앞에 문자열을 추가.
        return padding + value;
    }
    else if (isNumber(padding)) {
        // 두번째 인자가 숫자이면, 해당 개수만큼 빈 배열 생성하고,
        // join을 이용하여 공백문자열을 생성하여 첫번째 인자 앞에 추가
        return Array(padding).join(" ") + value;
    }
    return "";
}
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return new Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
function getRandomPadder() {
    // 랜덤값에 따라 반환하는 인스턴스는 달라진다.
    return Math.random() < 0.5
        ? new SpaceRepeatingPadder(5)
        : new StringPadder("   ");
}
let padder = getRandomPadder();
console.log(padder instanceof StringPadder);
console.log(padder instanceof SpaceRepeatingPadder);
// 객체 프로토타입 체인상에 우항의 생성자의 prototype이 존재하는지 검사
/**
 * 널러블 타입
 * typescript에는 특수한 타입인 null, undefined가 있음.
 * null은 사용자에 의해 직접 할당, undefined는 런타임시 값이 할당되지 않으면 자동으로 할당함.
 * 변수 타입으로 null지정시 undefined는 할당할 수 없음.
 * => null != undefined
 */
let s2 = "foo";
s2 = null;
/**
 * 객체의 선택적 프로퍼티 및 매개변수는 기본적으로 타입에 |undefined이 추가되므로
 * undefined로 할당해도 문제가 발생하지 않는다.
 */
class C {
}
let c2 = new C();
c2.a = 10; // c2인스턴스의 a프로퍼티의 타입은 숫자이므로 정상
// c2.a = undefined; // tsconfig의 컴파일 속성 strictNullCheck true시 null 또는 undefined도 에러
c2.b = 10;
c2.b = undefined; // 프로퍼티 b는 선택적 프로퍼티이므로 number타입 또는 undefined를 받을 수 있음.
/**
 * null체크의 경우 if문을 통해 값이 null인지 검사할 수 잇으나
 * 단축 검사 ||를 이용하여 왼쪽 값을 null체크하여 null이면 오른쪽을 실행
 * 왼쪽 같이 null(false값)이 아니면 왼쪽 값을 할당.
 */
function broken(name) {
    function postfix(epithet) {
        // 타입스크립트 컴파일러가, null or undefined를 수동으로 제거하기 위해서는
        // 값이 null인 식별자 뒤에 !을 붙인다.
        return name.charAt(0) + ".  the " + epithet; // 오류, 'name'은 아마도 null 입니다
    }
    name = name || "Bob";
    return postfix("great");
}
console.log(broken(null));
const a1 = [1, "as"];
const obj4 = {
    // newMember를 제외하고 T객체의 모든 key에 대해 속성 키로 사용 가능, value는 인덱스 시그니처의 value타입을 확인
    a: 10,
    // c: 10,
    newMember: true,
};
