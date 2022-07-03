let deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker() {
        // 상위 스코프인 createCardPicker의 this를 참조
        // 메서드 createCardPicker는 deck2객체에 속하기 때문에 this는 deck를 참조.
        return () => {
            const maxCards = this.cards.length / this.suits.length; // 52 / 4 => 13
            const pickerCard = Math.floor(Math.random() * this.cards.length);
            const pickerSuits = Math.floor(pickerCard / maxCards);
            return {
                card: pickerCard % maxCards,
                suit: this.suits[pickerSuits],
            };
        };
    },
};
const cardPicker2 = deck2.createCardPicker();
console.log("suit" in cardPicker2());
