import Question from "../components/question.js";
import Party from "../components/party.js";
import Sprite from "../components/sprite.js";
import Name from "../components/name.js";

export default function Guesser() {
    // Functions
    function generateRandomOptions(constraint, options) {
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
    return (
        // BORDERS ARE A HACK, I CAN VISUALIZE SO MUCH BETTER!!!
        <div className="guesser bg-cyan font-mono mx-20 border-black border-2">
            <div class="scoreboard">
                <h3>Scoreboard:</h3>
                <ul>
                    <li>Total Score:</li>
                    <li>Number of Badges:</li>
                    <li>Current Streak:</li>
                </ul>
            </div>
            <div class="rules">
                <h2>Game Modes:</h2>
                <ul>
                    <li>
                        <button>Guess by Sprite</button>
                    </li>
                    <li>
                        <button>Guess by Name</button>
                    </li>
                    <li>
                        <button>Guess by Name HARD MODE!!!</button>
                    </li>
                    <li>
                        <button></button>
                    </li>
                </ul>
            </div>
            <div
                class="bg-contain bg-center border-white border-4"
                style={{
                    backgroundImage: "url('/assets/images/GUI.png')",
                    width: "1012px",
                    height: "814px",
                }}
            >
                {/* make this sprite visible if guessSprite mode */}
                <div class="guessSprite">
                    <Sprite pokePath="pokemon1" size={96} />

                    {/* answers */}
                    {/* put this all in a component so i can make a CorrectBoxNumber variable and a CONSTRAINT variable to share among the children */}
                    <div class="nameAnswers inline-block">
                        {/* make script that randomly puts the answer (MAKE SURE THERES AN ANSWER) in one of the 5 options below */}
                        {/* make a script that generates a random number, if it equals to answer, regenerate again (loop). */}
                        <ul>
                            <li>
                                <button>
                                    <Name
                                        pokePath={
                                            "pokemon" + generateRandomOptions(0)
                                        }
                                    />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <Name
                                        pokePath={
                                            "pokemon" + generateRandomOptions(0)
                                        }
                                    />
                                </button>
                                <li></li>
                                <button>
                                    <Name
                                        pokePath={
                                            "pokemon" + generateRandomOptions(0)
                                        }
                                    />
                                </button>
                                <li></li>
                                <button>
                                    <Name
                                        pokePath={
                                            "pokemon" + generateRandomOptions(0)
                                        }
                                    />
                                </button>
                                <li></li>
                                <button>
                                    <Name
                                        pokePath={
                                            "pokemon" + generateRandomOptions(0)
                                        }
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Party pokePath="pokemon1" />
        </div>
    );
}
