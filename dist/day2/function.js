/**
 * 함수(Function)
 * - 함수는 Javascript로 된 모든 애플리케이션에서 기본적인 구성 요소
 * 함수의 종류는 기명 함수와 익명 함수가 있음.
 */
// 기명 함수
function add(x, y) {
    return x + y;
}
// 익명 함수
let myAdd = function (x, y) {
    return x + y;
};
// 자바스크립트처럼 함수 내부에서 외부 변수를 참조할 수 있음.
let z = 100;
function add2(x, y) {
    // 외부 변수를 참조
    return x + y + z;
}
console.log(add2(1, 2));
/**
 * 타입스크립트는 함수의 매개변수, 반환값에 타입을 명시할 수 있음.
 */
function addToType(a, b) {
    return a + b;
}
console.log(addToType(10, 90));
const myAdd2 = function (x, y) {
    return x + y;
};
// 타입스크립트는 Typescript컴파일러가 방정식의 한쪽에만 타입이 명시되어 있더라도 타입을 추론할 수 있음.
let myAdd3 = function (x, y) {
    return x + y;
};
/**
 * 선택적 매개변수와 기본 매개변수
 * -> 선택적 매개변수는 매개변수 이름 뒤에 ?을 추가하여 선택적으로 받을 수 있다.
 * 기본 매개변수는 해당 값이 undefined으로 전달되면 기본값으로 대체됨.
 * 기본적으로 함수에 정의된 매개변수의 개수는, 함수를 호출할때 인자의 개수와 일치해야함.
 * => 자바스크립트는 기본적으로 매개변수가 선택적으로 받을 수 있으나, 타입스크립트는 기본적으로 매개변수가 일치해야.
 */
function buildName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
// buildName("Bob"); // 매개변수의 개수와 일치하지 않으므로 오류.
// const myBuileName = buildName("Bob", "Adam", "Jone"); // 매개변수의 개수에 비해, 많은 인자를 전달하면 에러
console.log(buildName("Lee", "Jun")); // 매개변수의 개수와 일치함. => 정상.
// 매개변수를 선택적으로 받기 위해서는 어떻게 해야?
// 선택적 매개변수는 물음표(?)를 매개변수명 뒤에 추가한다.
// 선택적 매개변수는, 필수 매개변수 앞에 작성되면 안됨.
function buileName2(firstName, lastName) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}
// 기본 매개변수를 통해 undefined으로 전달받으면 기본값으로 대체됨.
function buildName3(firstName, lastName = "Kim") {
    return lastName + " " + firstName;
}
// 나머지 매개변수
// 매개변수 마지막 위치에 rest문법을 이용하여 나머지 매개변수를 하나의 변수로 받을 수 있음.
function buildName4(firstName, ...lastName) {
    // Array.prototype.join(sep): 배열요소를 연결하여 새로운 문자열로 만듦.
    return `${firstName} ${lastName.join(" ")}`;
}
const buildNameFn = buildName4;
console.log(buildNameFn("Joseph", "Samuel", "Lucas", "MacKibnzie"));
