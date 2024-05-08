export function errorMessages(error) {
    switch (error) {
        case "length": return "the length of the text is not valid, try to reduce"
        case "user": return "you are not authorized to make this request"
        default: return "no error Cacth"
    }
}