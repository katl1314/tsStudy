interface UIElement {
    addEventListener(onclick: (this: Handler, e: Event) => void);
}

class Handler {
    info: string;
    onClickBad(e: Event) {
        // this는 Handler가 아닌 void타입이기 때문에 this를 사용할 수 없음.
        this.info = e.type;
        console.log("clicked");
    }
}

const h = new Handler();

const uiElement: UIElement = {
    addEventListener: function (onclick: (this: Handler, e: Event) => void) {},
};

uiElement.addEventListener(h.onClickBad);
