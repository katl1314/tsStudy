/**
 * optional : 타입을 선언할 때 선택적 매개 변수를 지정할 수 있음.
 * 선택적 매개변수는 매개변수 뒤에 (?)를 추가한다.
 * 해당 값이 undefined이어도 정상적으로 동작함.
 */
// 매개 변수(Parameters)
// function add5(x: number, y?: number): number {
// 다음과 같이 매개변수 y의 타입에 undefined를 명시하면, 함수 호출시 반드시 인자의 개수와 매개변수의
// 개수는 일치해야함.
function add5(x, y) {
    // y가 undefined이면 0으로 대체함.
    return x + (y || 0);
}
console.log(add5(10, undefined)); // 10 + 0 => 10
console.log(add5(10, 20)); // 10 + 20 => 30
// 함수의 매개변수 y의 타입이 number | undefined형태로 유니온 타입이면 반드시 입력되어야함.
// console.log(add5(2)); // Error
