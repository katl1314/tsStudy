const myObj2 = {};
myObj2["a"] = 1;
myObj2[1] = true;
const makeObject = (arg) => {
    // for (const key in obj) {
    if (_isNumber(arg)) {
        // 전달받은 인자가 숫자이면?(타입 가드)
        console.log(Math.pow(arg, 2)); // arg: number
    }
    else {
        console.log(arg + arg); // arg: string
    }
    // }
};
makeObject(5);
// makeObject({'num' : true});
makeObject("choi");
function _isNumber(arg) {
    return typeof arg === "number";
}
console.log(_isNumber(1));
console.log(_isNumber("aa"));
function sum3(num1, num2) {
    return num1 + num2;
}
class Circle {
    constructor(a = 10) {
        this.a = a;
    }
}
/**
 * readonly : 읽기 전용 인스턴스 속성, 인터페이스 속성 등 한번 초기화를 하면, 재 할당이 불가능.
 * 클래스의 경우 constructor내 인스턴스 속성  설정 시 readonly사용 가능 단 접근제한자 사용 시 접근제어자 다음에 readonly를 사용해야함.
 */
const myTuple = ["a", 1, false]; // 튜플은 고정된 길이이며, 정해진 타입만 받을 수 있는 배열
/**
 * 선택적 매개변수, 프로퍼티 : ?물음표를 프로퍼티 키뒤에 사용하여, 해당 속성은 선택적으로 입력받을 수 있음.
 * 기본 매개변수, 프로퍼티 : 해당 값이 undefined이면 기본값을 대체함.
 */
