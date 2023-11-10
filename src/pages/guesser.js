import Question from "../components/question.js";
import Button from "../components/button.js";
import Sprite from "../components/sprite.js";
import Name from "../components/name.js";

export default function Guesser() {
    return (
        <div className="guesser">
            <div className="quiz">
                <Question
                    question={"This is a question"}
                    questionType="image"
                />
                <h1>UNDER HERE</h1>
                <Sprite pokePath="pokemon1" />
                <Name pokePath="pokemon1" />
                <h2>ENDS HERE</h2>
                {/* OH I GOTTA THEME THE OPTIONS TOWARDS THE 6 POKEMON IN YOUR PARTY!!!! */}
                <ul>
                    <li>
                        <Button />
                    </li>
                    <li>
                        <Button />
                    </li>
                    <li>
                        <Button />
                    </li>
                    <li>
                        <Button />
                    </li>
                    <li>
                        <Button />
                    </li>
                    <li>
                        <Button />
                    </li>
                </ul>
            </div>
        </div>
    );
}
