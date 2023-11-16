import Question from "../components/question.js";
import Party from "../components/party.js";
import Sprite from "../components/sprite.js";
import Name from "../components/name.js";

export default function Guesser() {
    return (
        // BORDERS ARE A HACK, I CAN VISUALIZE SO MUCH BETTER!!!
        <div className="guesser bg-cyan font-mono mx-20 border-black border-2">
            {/* <img className="" src="assets/images/GUI.png" alt="GUI" /> */}
            <div
                class="bg-contain bg-center border-white border-4"
                style={{
                    backgroundImage: "url('/assets/images/GUI.png')",
                    width: "1012px",
                    height: "814px",
                }}
            >
                {/* <h1>Whats good</h1> */}
            </div>
            <Party pokePath="pokemon1" />
        </div>
    );
}
