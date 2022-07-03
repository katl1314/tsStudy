var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
const test2 = "ERROR";
let type2 = {
    ERROR: LogLevel.ERROR,
    WARN: LogLevel.WARN,
    INFO: LogLevel.INFO,
    DEBUG: LogLevel.DEBUG,
};
const lvl = "ERROR";
function print2(obj, key) {
    console.log(obj, key);
}
print2({ name: "Choi" }, "name");
print2({ name: "Choi", age: 30 }, "age");
// 제네릭 사용시 인터페이스, 함수, 클래스 등을 다양한 타입으로 재사용이 용이함.
// 실행시 타입을 명시.
