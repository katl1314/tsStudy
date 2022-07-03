class Handler {
    onClickBad(e) {
        // this는 Handler가 아닌 void타입이기 때문에 this를 사용할 수 없음.
        this.info = e.type;
        console.log("clicked");
    }
}
const h = new Handler();
const uiElement = {
    addEventListener: function (onclick) { },
};
uiElement.addEventListener(h.onClickBad);
