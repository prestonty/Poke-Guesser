import Question from "../components/question.js";
import Button from "../components/button.js";

export default function Guesser() {
    return (
        <div className="guesser">
            <div className="quiz">
                <Question
                    question={"This is a question"}
                    questionType="image"
                />

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
