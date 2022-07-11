/**
 * inter : infer키워드를 사용하여 타입 변수에 대한 타입 추론 여부를 확인 할 수 있음. (타입 변수에 대한 타입 추론 가능 여부를 확인)
 * 타입도 삼항 연산자와 유사한 방식으로 조건부 타입을 타이핑함.
 * 타입 변수 T가 U에 할당할 수 있는지 확인하고, 창이면 X, 아니면 Y타입을 사용함.
 *
 * <T>: T extends number ? number : null;
 * > U가 추론 가능한 타입이면 참, 아니면 거짓
 * 사용법 : T extends info U ? X : Y;
 */
const a2 = 10; // 타입 추론 가능.
console.log(a2);
const a3 = "a"; // 타입 추론 가능.
console.log(a3);
