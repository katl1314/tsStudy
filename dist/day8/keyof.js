/**
 * keyof연산자 는 인덱싱 가능 타입에서 속성 이름을 타입으로 사용 가능함.
 */
const conutry = "kr"; // keyof IContries사용시 해당 인터페이스(인덱싱 가능 타입)내 속성명을 타입으로 사용 가능함. kr, en, cn이외의 값은 할당 불가
/**
 * 인터페이스 확장은 extends를 이용하여 확장이 가능함.
 * interface A {
 *  a : number;
 * }
 *
 * interface B extends A {
 *  b: number
 * }
 *
 * result
 * interface B {
 *  a: number;
 *  b: number;
 * }
 */
/** 2022-07-08 인덱스 시그니처, 구조 시그니처, 클래스 타입, keyof, 인터페이스 확장 끝 */
