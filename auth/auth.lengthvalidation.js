export function tweetTextValidation(text) {
    let valid = false
    text.length <= 180 ? valid = true : valid = false;
    return valid
}
