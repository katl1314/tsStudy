/**
 * 타입 가드: 타입을 보장하기 위해 타입 단언을 여러번 사용하는 경우가 있음.
 * 타입 단언은 is 연산자를 이용하여 타입스크립트가 추론 가능한 범위를 보장하도록 한다. (보장)
 */
var TypeGuards;
(function (TypeGuards) {
    // 타입 술부를 반환 타입으로 명시한 함수.
    // 타입 술부 NAME is TYPE
    function isNumber(val) {
        return typeof val === "number";
    }
    TypeGuards.isNumber = isNumber;
    function someFunc(val) {
        // 타입 가드
        if (isNumber(val)) {
            return val.toFixed(2);
        }
        else {
            return val.toUpperCase();
        }
    }
    TypeGuards.someFunc = someFunc;
})(TypeGuards || (TypeGuards = {}));
console.log(TypeGuards.someFunc(12));
console.log(TypeGuards.someFunc("aBcD"));
/**
 * 타입 가드 방법 : 타입 술부를 반환 타입으로 명시한 함수를 호출하여 분기 처리
 * typeof를 통한 타입 체크, instanceof를 통한 식별자의 프로토타입 체인상에 생성자의 prototype이 존재
 * in 연산자를 통해 객체내 속성으로 존재 여부, ...
 */
