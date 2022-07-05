/**
 * 인터섹션 타입을 이용하여 믹스인 패턴을 구현할 수 있다.
 */
class Person {
    constructor(private name: string) {}
}

interface Loggable {
    log(name: string): void;
}

class ConsoleLogger implements Loggable {
    log(name: string): void {
        console.log(`Hello, I'm ${name}`);
    }
}

function extend<T extends {}, Q extends {}>(first: T, second: Q): T & Q {
    // Partial : 특정 타입의 부분집합을 만족하는 타입
    const result: Partial<T & Q> = {};
    for (const prop in first) {
        // 객체에 프로퍼티로 존재하면 result객체에 추가한다.
        if (first.hasOwnProperty(prop)) {
            // 타입 단언
            (result as T)[prop] = first[prop];
        }
    }

    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            // 타입 단언
            (result as Q)[prop] = second[prop];
        }
    }

    return result as T & Q;
}

const result = extend({ a: 1 }, { b: 2 });
console.log(result); // { a : 1, b : 2 }
