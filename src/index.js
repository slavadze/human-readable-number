module.exports = function toReadable (number) {
    
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const elevenNinety = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const others = ['hundred'];
    let devidedTen = number / 10;
    let devidedHundred = number / 100;
    let remainderTen = number % 10;
    let remainderHundred = number % 100;

    if (number <= 9) {
        return units[number];
    }
    if (number > 10 && number < 20) {
        return elevenNinety[remainderTen - 1];
    }
    if (remainderTen == 0 && number < 91) {
        return tens[devidedTen - 1];
    }
    if (number > 20 && number < 100) {
        return tens[parseInt(devidedTen)-1] + ' ' + units[remainderTen];
    }
    if (number % 100 == 0) {
        return units[devidedHundred] + ' ' + others[0];
    }
    if (number > 100 && remainderHundred <= 9){
        return units[parseInt(devidedHundred)] + ' ' + others[0] + ' ' + units[number % 100];
    }
    if (number > 100 && remainderTen == 0) {
        return units[parseInt(devidedHundred)] + ' ' + others[0] + ' ' + tens[parseInt(devidedTen) % 10 - 1];
    }
    if (number > 100 && remainderHundred <= 19){
        return units[parseInt(devidedHundred)] + ' ' + others[0] + ' ' + elevenNinety[(remainderHundred) - 10 - 1];
    }
    if (number > 100) {
        return units[parseInt(devidedHundred)] + ' ' + others[0] + ' ' + tens[(parseInt(devidedTen)) % 10 - 1] + ' ' + units[remainderTen];
    }
    return
}