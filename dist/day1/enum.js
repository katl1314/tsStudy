/**
 * 열거형(Enums)
 * 열거형으로 상수의 집합을 나타낼 수 있음. (상수의 집합을 구현)
 * 타입스크립트의 열거형은 숫자형, 문자열기반 열거형을 제공함.
 *
 * 숫자형 열거형은 모두 초기화 하지 않아도 됨. (자동 증가)
 */
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
    Direction[Direction["RIGHT"] = 4] = "RIGHT";
})(Direction || (Direction = {}));
/**
 * 문자열 열거형은 멤버에 상수 초기화 해야함.
 * 숫자 열거형과 다르게 자동 증가가 없으며, 직렬화에 강점.
 */
var StringEnum;
(function (StringEnum) {
    StringEnum["START"] = "START";
    StringEnum["END"] = "END";
})(StringEnum || (StringEnum = {}));
var ResponseEnum;
(function (ResponseEnum) {
    ResponseEnum[ResponseEnum["No"] = 0] = "No";
    ResponseEnum[ResponseEnum["Yes"] = 1] = "Yes";
})(ResponseEnum || (ResponseEnum = {}));
function respond(str, message) {
    // ...
    if (message) {
        // message가 Yes이면
        console.log(`Yes : ${str}`);
    }
    else {
        throw new Error(str);
    }
}
try {
    respond("Princess Caroline", ResponseEnum.No);
}
catch (e) {
    console.error("에러에러");
}
/**
 * 문자열 열거형과 숫자 열거형 같이 사용해도 에러는 발생하지 않으나,
 * 권장하지 않음.
 */
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 5] = "Y";
    E[E["Z"] = 6] = "Z";
})(E || (E = {})); // 열거형 E의 X는 상수
// 유니온 타입
// type UnionType = string | '1'
