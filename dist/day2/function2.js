/**
 * this와 화살표 함수
 * Javascript의 함수 내 this는 호출하는 방법에따라 결정
 *
 */
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    card: Array(52),
    createCardPicker() {
        // createCardPicke메서드 호출 시 함수를 반환함.
        return () => {
            // 해당 함수 내 this는 기본적으로 window객체를 가리키며, 별도의 bind, call, apply으로
            // 해당 함수의 this를 객체 deck으로 바인딩한다.
            // 화살표함수로 함수를 생성할 경우 this는 상위 스코프의 this를 참조, 해당 객체 deck을 가리킴.
            let pickedCard = Math.floor(Math.random() * this.card.length); // Math.random() * 52
            let pickedSuit = Math.floor(pickedCard / 13); // pickedCard / 13
            console.log(`pickedCard : ${pickedCard}`);
            console.log(`pickedSuit : ${pickedSuit}`);
            let suit = this.suits[pickedSuit];
            let card = pickedCard % 13;
            return { suit, card };
        };
    },
};
/**
 * 화살표함수는 this, arguments, super를 갖지 않는다.
 */
let cardPicker = deck.createCardPicker();
const { suit, card } = cardPicker();
console.log(suit, card);
