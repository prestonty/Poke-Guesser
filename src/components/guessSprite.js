import Sprite from "../components/sprite.js";
import Name from "../components/name.js";
import { genRandNum, randomizeOptions } from "./utility.js";

export default function GuessSprite(props) {
    let options = new Map();
    randomizeOptions(options);
    // initialize it at the beginning
    // have a button switch up its values

    let correctVisibility = "absolute visible"; // visible or invisible
    let incorrectVisibility = "absolute visible"; // visible or invisible

    function isCorrect(options, currentOption) {
        if (
            options.get(currentOption).valueOf() === options.get("ans").valueOf()
        ) {
            // visually tell user they got it correct
            // update score

            props.setScore(props.score + 1);
            props.setStreak(props.streak + 1);
        } else {
            // visually tell user they got it wrong
            // update score streak (reset to zero)
            // THIS SHIT DONT CHANGE WHEN I GET IT WREONG!!!! problem will be fixed if i make a visual indicator that they got it wrong!!!
            props.setStreak(0);
        }
    }

    return (
        <div class="guessSprite relative">
            <div class="question relative mt-28 ml-10 inline-block">
                <Sprite class="" pokePath={"pokemon" + options.get("ans")} size={192} />
                <div class="mt-32 ml-24">
                    <img class={correctVisibility} src="\assets\images\correct.png"/>
                    <img class={incorrectVisibility} src="\assets\images\incorrect.png"/>
                </div>
            </div>
            
            {/* answers */}
            {/* put this all in a component so i can make a CorrectBoxNumber variable and a CONSTRAINT variable to share among the children */}
            <div class="nameAnswers absolute inline-block ml-56">
                {/* make script that randomly puts the answer (MAKE SURE THERES AN ANSWER) in one of the 5 options below */}
                {/* make a script that generates a random number, if it equals to answer, regenerate again (loop). */}
                <ul class="text-3xl text-white">
                    <li>
                        <div class="mt-14 mb-22">
                        <button onClick={() => isCorrect(options, 0)}>
                            <Name className={""} pokePath={"pokemon" + options.get(0)} />
                        </button>
                        </div>
                    </li>
                    <li>
                        <div class="mb-22">
                        <button onClick={() => isCorrect(options, 1)}>
                            <Name className={""}  pokePath={"pokemon" + options.get(1)} />
                        </button>
                        </div>
                    </li>
                    <li>
                        <div class="mb-22">
                        <button onClick={() => isCorrect(options, 2)}>
                            <Name className={""}  pokePath={"pokemon" + options.get(2)} />
                        </button>
                        </div>
                    </li>
                    <li>
                        <div class="mb-22">
                        <button onClick={() => isCorrect(options, 3)}>
                            <Name className={""} pokePath={"pokemon" + options.get(3)} />
                        </button>
                        </div>
                    </li>
                    <li>
                        <div class="mb-22">
                        <button onClick={() => isCorrect(options, 4)}>
                            <Name className={""} pokePath={"pokemon" + options.get(4)} />
                        </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
