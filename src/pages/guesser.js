import Question from "../components/question.js";
import Party from "../components/party.js";
import Sprite from "../components/sprite.js";
import Name from "../components/name.js";

export default function Guesser() {
    return (
        <div className="guesser bg-cyan font-mono mx-20">
            <Party pokePath="pokemon1" />
            {/* <div className="quiz">
                <Question
                    question={"This is a question"}
                    questionType="image"
                />
                <h1>UNDER HERE</h1>
                <Sprite pokePath="pokemon1" />
                <Name pokePath="pokemon1" />
                <h2>ENDS HERE</h2>
                <ul>
                    <li>
                        <Member />
                    </li>
                    <li>
                        <Member />
                    </li>
                    <li>
                        <Member />
                    </li>
                    <li>
                        <Member />
                    </li>
                    <li>
                        <Member />
                    </li>
                    <li>
                        <Member />
                    </li>
                </ul>
            </div> */}
        </div>
    );
}
