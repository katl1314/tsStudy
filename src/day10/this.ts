/**
 * 명시적 this
 * 함수 내 this를 캡처할 수 있는 cat객체를 call메서드를 함수로 전달하였지만,
 * strict mode에서의 this는 암시적인 any타입이기 때문에 에러가 발생함.
 * strict mode는 컴파일러 옵션에서 strict: true 또는 noImplicitThis: true인 경우
 */

interface ICat5 {
    name: string;
}

const cat5: ICat5 = {
    name: "Elon Musk",
};

// 함수 매개변수에 this를 명시적으로 선언.
// 매개변수의 this는 fake 매개변수임.
function someFnThis(this: ICat5, arg: string) {
    // 자바스크립트 함수(화살표 함수를 제외)는 기본적으로 this, arguments등이 내장되어 있음.
    // 타입스크립트 컴파일옵션이 strict 모드 또는 noImplicitThis가 true이면 this는 암시적인 any타입
    // 이기때문에 에러가 발생함.
    console.log(`${this.name} ${arg}`);
}

someFnThis.call(cat5, "Hello"); // 함수 someFnThis내 this를 객체cat5로 변환
