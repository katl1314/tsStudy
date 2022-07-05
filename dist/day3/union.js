function padLeft(value, padding) {
    if (typeof padding === "number") {
        // 두번째 인자가 숫자타입이면 문자열의 그 숫자만큼 문자열 왼쪽에 더해짐.
        return Array(padding + 1).join(" ") + value;
    }
    else if (typeof padding === "string") {
        // 두번째 인자가 문자열이면, 첫번째 인자로 전달받은 문자열 왼쪽에 추가한다.
        return padding + value;
    }
    throw new Error(`Expected string of number, got ${value}`);
}
console.log(padLeft("Hello World", 4)); // 첫번째 인자 왼쪽에 두번째 인자의 개수만큼 공백을 추가한다.
console.log(padLeft("Hello World", "Smart")); // SmartHello World
let pet = getSmallPet();
pet.layEgg(); // 두 타입의 공통 멤버만 접근이 허용됨. 변수 pet이 어떤 타입인지 알 수 없기 때문.
/**
 * 3개의 타입 NetworkLoadingState, NetworkSucessState, NetworkFailedState는 공통 멤버 state를 가지고 있으며,
 * 각각 별도의 멤버를 가지고 있음.
 * NetworkLoadingState: 존재하지 않음
 * NetworkSucessState: response : { title, duration, summary }
 * NetworkFailedState: code: number
 */
function networkState(state) {
    // 일단 타입 추론을 통해 각각 타입에 대해 별도로 처리해보자.
    // 여기까지 인자 state가 어떤 타입인지 확실하지 않기 때문에, 타입의 범위를 줄여나가야 한다.
    switch (state.state) {
        case "loading":
            return "Loading ...";
        case "failed":
            const { code } = state;
            return `Error... ${code}`;
        case "sucess":
            const { title, summary } = state.response;
            return `Sucess... ${title} - ${summary}`;
        default:
            return "";
    }
}
