export const getArray = () => {
    let uniqueArray = getUniqueRandomArray();

    return shuffleArray(uniqueArray.concat(uniqueArray));
};

const getUniqueRandomArray = () =>
    new Array(9).fill().reduce(array => {
        let randomNumber = getRandomInt(0, 52);

        while (array.includes(randomNumber)) {
            randomNumber = getRandomInt(0, 52);
        }

        array.push(randomNumber);

        return array;
    }, []);

const getRandomInt = (min, max)  =>
    Math.floor(Math.random() * (max - min)) + min;

const shuffleArray = array =>
    array.sort((a, b) => 0.5 - Math.random());
