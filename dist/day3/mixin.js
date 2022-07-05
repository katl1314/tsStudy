/**
 * 인터섹션 타입을 이용하여 믹스인 패턴을 구현할 수 있다.
 */
class Person {
    constructor(name) {
        this.name = name;
    }
}
class ConsoleLogger {
    log(name) {
        console.log(`Hello, I'm ${name}`);
    }
}
function extend(first, second) {
    // Partial : 특정 타입의 부분집합을 만족하는 타입
    const result = {};
    for (const prop in first) {
        // 객체에 프로퍼티로 존재하면 result객체에 추가한다.
        if (first.hasOwnProperty(prop)) {
            // 타입 단언
            result[prop] = first[prop];
        }
    }
    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            // 타입 단언
            result[prop] = second[prop];
        }
    }
    return result;
}
const result = extend({ a: 1 }, { b: 2 });
console.log(result); // { a : 1, b : 2 }
