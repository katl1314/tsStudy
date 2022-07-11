/**
 * 함수 오버로드 말고, 인터페이스 또는 타입 별칭을 통한 메서드 오버로딩도 가능.
 */
const user10 = {
    name: "Neo",
    age: 22,
    getData(a) {
        if (typeof a === "string") {
            // 전달받은 인자가 string타입이면 split메서드를 이용하여 특정 문자를 기준으로 배열로 변환
            return a.split("");
        }
        else if (typeof a === "number") {
            return a.toString(); // number값을 string값으로 변경
        }
    },
};
console.log(user10.getData("String"));
console.log(user10.getData(100));
// console.log(user10.getData(true)); // 메소드 오버로딩에 매개변수 타입에 해당되지 않기 때문에 에러
