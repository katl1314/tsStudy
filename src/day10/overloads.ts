/**
 * 오버로드(Overloads)는 함수명은 같지만 매개변수 타입, 리턴 타입이 다른 여러 함수를 가질 수 있음.
 * 함수 선언과 함수 구현로 구성되어 있으며, 여러 함수를 선언(매개변수 타입, 리턴 타입이 모두 달라야.)
 * 하나의 함수 구현으로 구성되어있음.
 * 구조 : 여러 개의 함수 선언부, 단 하나의 함수 구현부
 * 함수 구현부의 타입은 대게 any타입을 사용함.
 * => 함수 선언부의 매개변수 개수와 함수 구현부의 매개변수 개수는 일치해야함.
 */

// 함수 선언
function add3(a: number, b: number): number;
function add3(a: string, b: string): string;

// 함수 구현
function add3(a: any, b: any): any {
    return a + b;
}

console.log(add3(1, 2));
console.log(add3("Typescript", "Javascript"));
// console.log(add3(1, "Javascript")); // 함수 선언부에 매개변수 타입이 일치하지 않으면 에러
