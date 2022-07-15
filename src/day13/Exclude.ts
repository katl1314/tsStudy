/**
 * Exclude<T1, T2>
 * 타입 T1에서 유니온 T2를 제외한 나머지를 새로운 타입으로 반환
 */

type NewType = string | number;

// Exclude<NewType, string>을 통해 타입 NewType중 유니온 타입인 string을
// 제외한 number를 가지고 새로운 타입으로 반환
const onlyNumber: Exclude<NewType, string> = 10;
// const dontString: Exclude<NewType, string> = "10"; // Error

const _test1: NewType = 1; // NewType은 number 또는 string타입 모두 사용할 수 있음.
const _test2: NewType = 1; // NewType은 number 또는 string타입 모두 사용할 수 있음.
