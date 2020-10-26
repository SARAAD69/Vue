export const textMixin = {
    computed: {
        reverseText() {
            return this.text.split("").reverse().join("");
        },
        appendedText() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}