enum Color {
    red = 1,
    green = 2,
    blue = 4,
}

namespace Color {
    /**
     * @param colorName : 혼합된 색상 이름
     * @returns
     */
    export function mixColor(colorName: string) {
        if (colorName === "yellow") {
            return Color.red + Color.green;
        } else if (colorName === "white") {
            return Color.red + Color.green + Color.blue;
        } else if (colorName === "magenta") {
            return Color.red + Color.blue;
        } else if (colorName === "cyan") {
            return Color.green + Color.blue;
        }
    }
}

const yellowColor = Color.mixColor("yellow"); // Color.Red + Color.Green = 1 + 2
console.log(yellowColor);
