/**
 * Pick<TYPE, KEY>
 * TYPE에서 KEY로 속성을 선택한 새로운 타입을 반환
 * TYPE은 속성을 가진 인터페이스나 객체 타입이어야만 함.
 */
const pickMe = {
    name: "choi",
    email: "123@naver.com",
};
// keyof는 인터페이스에 정의된 속성명들을 타입으로 사용함.
/* function displayValue<T>(b: keyof T) {
    console.log(b);
}

displayValue<IPickType>("name");
 */
