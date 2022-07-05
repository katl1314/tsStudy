/**
 * 오버로드(Overloads)
 * Javascript는 매두 동적인 언어.
 * 하나의 Javascript함수에 인자의 형태에 따라 각 다른 타입 객체를 반환하는 것이 아주 흔한일임.
 */
let suits = ["hearts", "spades", "clubs", "diamonds"];
// 함수 정의
function pickCard(x) {
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
