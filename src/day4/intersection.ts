/**
 * 인터섹션 타입은 여러 타입을 하나의 타입으로 결합한다.
 * 예를 들어 Person & Serializable & Loggable일 경우 해당 타입들의 멤버를 모두 갖는다.
 */
function extend2<First extends {}, Second extends {}>(
    first: First,
    second: Second
): First & Second {
    // 부분 집합
    const result: Partial<First & Second> = {};

    for (const key in first) {
        if (first.hasOwnProperty(key)) {
            (result as First)[key] = first[key];
        }
    }

    for (const key in second) {
        if (second.hasOwnProperty(key)) {
            (result as Second)[key] = second[key];
        }
    }

    return result as First & Second;
}

class Person1 {
    constructor(public name: string) {}
}

interface Loggable1 {
    log(msg: string): void;
}

class ConsoleLogger1 implements Loggable1 {
    log(msg: string): void {
        console.log(`I'm ${msg}`);
    }
}

const jim = extend2(new Person1("a"), ConsoleLogger1.prototype);
console.log(jim.name); // name의 접근제어자가 public이면 접근 가능

// ConsoleLogger1.prototype.log(msg);
ConsoleLogger1.prototype.log("asd");
new ConsoleLogger1().log("Test Choi");
