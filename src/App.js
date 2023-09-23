import "./App.css";
import Question from "./components/question.js";
import Button from "./components/button.js";

function App() {
    return (
        <div className="App">
            <h1>Poke Guesser</h1>

            <div className="home">
                <h1>Welcome to Poke-Guesser,</h1>
                <p>
                    a quiz to test your knowledge on Pokemon! Inspired by the
                    anime's half-way segment: "Who's that Pokemon?"
                </p>
                <p>
                    Created using React.js and (unamed database). Project
                    started on Sept. 21, 2023.
                </p>
            </div>
            {/* plan is to make all 3 pages in app and move it to other files then route it later, worry about nav later */}
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
            <div className="gallery"></div>
        </div>
    );
}

export default App;
