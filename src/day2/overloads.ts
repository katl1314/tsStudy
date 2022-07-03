/**
 * 오버로드(Overloads)
 * Javascript는 매두 동적인 언어.
 * 하나의 Javascript함수에 인자의 형태에 따라 각 다른 타입 객체를 반환하는 것이 아주 흔한일임.
 */
let suits = ["hearts", "spades", "clubs", "diamonds"];

// pickCard함수는 전달받은 매개변수의 타입에 따라 반환하는 결과가 다름.
/**
 * 함수 오버로딩은 동일 함수에 매개변수의 타입과, 반환 타입을 제공함.
 * 함수 오버로딩 목록은 여러개 선언 가능하여, 함수 호출들을 해결 시 사용함. => 타입 검사에 목적
 * 매개변수 타입및, 반환값 타입 선언은 여러개가 가능하나, 실제 구현은 하나의 함수에서 처리해야함.
 */
// 함수 오버로딩 선언
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: { suit: string; card: number }[]): number;
// 함수 정의
function pickCard(x): any {
    // 인자가 배열 또는 객체인지 확인
    // 만약 그렇다면, deck이 주어지고 card를 선택합니다.
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // 그렇지 않다면 그냥 card를 선택합니다.
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// pickCard("aaa"); // 에러
