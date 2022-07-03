enum LogLevel {
    ERROR = 0,
    WARN = 1,
    INFO = 2,
    DEBUG = 3,
}

/**
 * keyof typeof같이 사용하게 되면 열거형 내 키를 문자열로 나타내는 타입을 가져옴.
 * 열거형 내 키를 문자열로 나타내는 타입 'ERROR' | 'WRAN' | 'INFO' | 'DEBUG'가 됨.
 */
type choi = keyof typeof LogLevel;

interface myObj {
    name: string;
    age: number;
}

const test2: choi = "ERROR";
let type2: typeof LogLevel = {
    ERROR: LogLevel.ERROR,
    WARN: LogLevel.WARN,
    INFO: LogLevel.INFO,
    DEBUG: LogLevel.DEBUG,
};

/**
 * 다음과 동일합니다.
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG'
 */
type LogLevelStrings = keyof typeof LogLevel;
const lvl: LogLevelStrings = "ERROR";

interface MyPerson2 {
    name: string;
    age?: number;
}

function print2<T, K extends keyof T>(obj: T, key: K) {
    console.log(obj, key);
}

print2({ name: "Choi" }, "name");
print2({ name: "Choi", age: 30 }, "age");

// 제네릭 사용시 인터페이스, 함수, 클래스 등을 다양한 타입으로 재사용이 용이함.
// 실행시 타입을 명시.
