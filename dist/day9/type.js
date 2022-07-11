/**
 * 타입스크립트는 타입별칭을 이용하여 유니온 타입,
 * 인터섹션 타입(교차 타입)등 각 타입을 조합한 타입을 참조하도록 별칭을 만든다.
 * 두개 이상의 타입의 조합으로 구성하기 위해 유니온 타입을 많이 사용함.
 * 타입별칭은 type키워드를 사용함.
 */
const userA = { name: "Tomas", age: 25, isValid: true };
const userB = ["Tomas", 26, false];
function someFunc2(arg) {
    switch (arg) {
        case "s":
            console.log(arg.toString());
            break;
        case "n":
            console.log(parseInt(arg));
            break;
        case "b":
            console.log(!!arg);
            return;
    }
}
