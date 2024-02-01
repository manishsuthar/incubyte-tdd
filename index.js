class StringCalculator {
    static add(numbers) {
        if (numbers === "") {
            return 0;
        }

        const numberArray = this.getNumbersFromString(numbers);

        const negatives = numberArray
            .filter((num) => parseInt(num) < 0)
            .map((neg) => parseInt(neg));

        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
        }

        return numberArray
            .map((num) => parseInt(num))
            .filter((num) => num <= 1000)
            .reduce((acc, num) => acc + num, 0);
    }

    static getNumbersFromString(numbers) {
        const str = numbers.replace(/[^0-9\-]/g, "|").split("|").filter(value => value !== '');
        return str;
    }
}

module.exports = StringCalculator;
