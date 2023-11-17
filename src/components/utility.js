// Functions
export function genRandNum(constraint) {
    const UPPER = 649;
    const LOWER = 1;
    let num;

    if (constraint == null) {
        constraint = 0;
    }
    do {
        num = Math.floor(Math.random() * UPPER + LOWER);
    } while (num === constraint); // keep generating number until number is not equal to constraint
    return num;
}

export function randomizeOptions(options) {
    // options are the possible answers to the question
    const FIRST_POSITION = 0;
    const LAST_POSITION = 4;

    let randPosition = Math.floor(
        Math.random() * LAST_POSITION + FIRST_POSITION
    ); // generates a random position for answer to be in from 0 to 4
    let ans = genRandNum(0);
    options.set("ans", ans); // generates a number from 1-649 for random pokemon
    for (let i = FIRST_POSITION; i <= LAST_POSITION; i++) {
        // options from 0 to 4
        if (i == randPosition) {
            options.set(i, ans);
        } else {
            options.set(i, genRandNum(ans)); // generate random options that are not equal to answer
        }
    }
}
