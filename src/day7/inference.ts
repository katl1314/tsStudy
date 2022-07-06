// 타입 추론
/**
 * 타입스크립트에서 변수에 타입 선언이 되어있지 않으면, 첫번째 값에 한에서
 * 타입 추론을 제공함.
 *
 * => 변수값을 판단의 근거로 삼아 추론.
 */
namespace Inference {
    const num = 12; // 타입스크립트는 number타입으로 추론

    /**
     * 이미 변수 선언 시 number타입으로 추론되었기 때문에, String값을 할당할 수 없음.
     */
    // num = "Hello Type";

    export function showNum(): number {
        return num;
    }
}

console.log(Inference.showNum);

const num = 12; // 변수 선언 후 number타입으로 추론

function sum(a: number = 2, b: number = 3): number {
    return a + b + num;
}

console.log(sum()); // 2 + 3 + 12
console.log(sum(1)); // 1 + 3 + 12
