/**
 * 인터섹션 타입은 여러 타입을 하나의 타입으로 결합한다.
 * 예를 들어 Person & Serializable & Loggable일 경우 해당 타입들의 멤버를 모두 갖는다.
 */
function extend2(first, second) {
    // 부분 집합
    const result = {};
    for (const key in first) {
        if (first.hasOwnProperty(key)) {
            result[key] = first[key];
        }
    }
    for (const key in second) {
        if (second.hasOwnProperty(key)) {
            result[key] = second[key];
        }
    }
    return result;
}
class Person1 {
    constructor(name) {
        this.name = name;
    }
}
class ConsoleLogger1 {
    log(msg) {
        console.log(`I'm ${msg}`);
    }
}
const jim = extend2(new Person1("a"), ConsoleLogger1.prototype);
console.log(jim.name); // name의 접근제어자가 public이면 접근 가능
// ConsoleLogger1.prototype.log(msg);
ConsoleLogger1.prototype.log("asd");
new ConsoleLogger1().log("Test Choi");
