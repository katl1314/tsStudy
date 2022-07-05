type StringNumber = string | number; // 유니온 타입을 이용하여 새로운 타입 별칭 생성

function padLeft(value: string, padding: StringNumber): string {
    if (typeof padding === "number") {
        // 두번째 인자가 숫자타입이면 문자열의 그 숫자만큼 문자열 왼쪽에 더해짐.
        return Array(padding + 1).join(" ") + value;
    } else if (typeof padding === "string") {
        // 두번째 인자가 문자열이면, 첫번째 인자로 전달받은 문자열 왼쪽에 추가한다.
        return padding + value;
    }
    throw new Error(`Expected string of number, got ${value}`);
}

console.log(padLeft("Hello World", 4)); // 첫번째 인자 왼쪽에 두번째 인자의 개수만큼 공백을 추가한다.
console.log(padLeft("Hello World", "Smart")); // SmartHello World

// 두번째 인자는 문자열 또는 숫자 이외의 값은 사용할 수 없음.

interface Egg {
    layEgg(): void;
}

interface Bird extends Egg {
    fly(): void;
}

interface Fish extends Egg {
    swim(): void;
}

declare function getSmallPet(): Bird | Fish;

let pet = getSmallPet();

pet.layEgg(); // 두 타입의 공통 멤버만 접근이 허용됨. 변수 pet이 어떤 타입인지 알 수 없기 때문.

// getSmallPet함수의 반환값은 Fish 또는 Bird으로 각각 멤버를 가지고 있음.
// 다만 pet이라는 변수는 Fish인지 Bird인지 확실하게 어떤 타입인지 알 수 없음.

type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSucessState = {
    state: "sucess";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};
/**
 * 위 세게의 타입 중 단 하나를 대표하는 타입을 만듦.
 * 그러나 3개 중 어떤 타입인지는 확실하게 알 수 없음.
 */
type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSucessState;

/**
 * 3개의 타입 NetworkLoadingState, NetworkSucessState, NetworkFailedState는 공통 멤버 state를 가지고 있으며,
 * 각각 별도의 멤버를 가지고 있음.
 * NetworkLoadingState: 존재하지 않음
 * NetworkSucessState: response : { title, duration, summary }
 * NetworkFailedState: code: number
 */

function networkState(state: NetworkState): string {
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
