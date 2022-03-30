export default () => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const random = Math.floor(Math.random() * alphabet.length)
    const randomChoice = alphabet[random];
    return randomChoice
}