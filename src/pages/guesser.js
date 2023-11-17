import Question from "../components/question.js";
import Sprite from "../components/sprite.js";
import Name from "../components/name.js";
import GuessSprite from "../components/guessSprite.js";

export default function Guesser() {
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
                <GuessSprite />
                {/* make this sprite visible if guessSprite mode */}
            </div>
        </div>
    );
}
