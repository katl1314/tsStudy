/**
 * Generic은 재사용(재활용)목적으로 클래스, 함수 호출 시점에 타입을 선언
 * 이해법 > 타입을 인수로 전달했다.
 * 제네릭은 <>(부등호)안에 타입을 명시한다. => 클래스명, 함수명 우측에 정의함.
 * 타입 변수는 원하는 이름으로 정의해도됨.
 */
// 제네릭을 이용하지 않을 경우
// 허용하는 타입이 늘어나게 되면 유니온 타입으로 매개변수의 타입, 반환 타입을 명시할 수 있으나,
// 가독성이 떨어지는 문제가 발생함.
/* function toArray(a: number | string, b: number | string): (number | string)[] {
    return [a, b];
} */
function toArray(a, b) {
    return [a, b];
}
console.log(toArray(1, 2)); // [1, 2]
// console.log(toArray<number>(1, "2")); // 에러 발생 배열 요소는 오직 number타입만 허용함.
console.log(toArray("Typescript", "Javascript")); // ["Typescript", "Javascript"]
console.log(toArray("Typescript", 1)); // ["Typescript", 1] (유니온 타입 두 타입 모두 지원)
