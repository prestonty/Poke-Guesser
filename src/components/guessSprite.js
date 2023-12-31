import Sprite from "../components/sprite.js";
import Name from "../components/name.js";
import { genRandNum, randomizeOptions } from "./utility.js";

export default function GuessSprite(props) {
    let options = new Map();
    randomizeOptions(options);
    // initialize it at the beginning
    // have a button switch up its values

    function isCorrect(options, currentOption) {
        if (
            options.get(currentOption).valueOf() == options.get("ans").valueOf()
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
        <div class="guessSprite">
            <div class="question">
                <Sprite pokePath={"pokemon" + options.get("ans")} size={96} />
            </div>

            {/* answers */}
            {/* put this all in a component so i can make a CorrectBoxNumber variable and a CONSTRAINT variable to share among the children */}
            <div class="nameAnswers inline-block">
                {/* make script that randomly puts the answer (MAKE SURE THERES AN ANSWER) in one of the 5 options below */}
                {/* make a script that generates a random number, if it equals to answer, regenerate again (loop). */}
                <ul>
                    <li>
                        <button onClick={() => isCorrect(options, 0)}>
                            <Name pokePath={"pokemon" + options.get(0)} />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => isCorrect(options, 1)}>
                            <Name pokePath={"pokemon" + options.get(1)} />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => isCorrect(options, 2)}>
                            <Name pokePath={"pokemon" + options.get(2)} />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => isCorrect(options, 3)}>
                            <Name pokePath={"pokemon" + options.get(3)} />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => isCorrect(options, 4)}>
                            <Name pokePath={"pokemon" + options.get(4)} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
