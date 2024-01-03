import Sprite from "../components/sprite.js";
import Name from "../components/name.js";
import Scoreboard from "../components/scoreboard.js";
import { randomizeOptions } from "./utility.js";
import React, { useState, useEffect } from "react";


export default function GuessSprite(props) {
    let options = new Map();
    randomizeOptions(options);
    // initialize it at the beginning
    // have a button switch up its values

    const [correctVisibility, setCorrectVisibility] = useState("absolute invisible");
    const [incorrectVisibility, setIncorrectVisibility] = useState("absolute invisible");
    const [guiVisibility, setGuiVisibility] = useState("visible");

    useEffect(() => {
        setTimeout(() => {
            setCorrectVisibility("absolute invisible");
            setIncorrectVisibility("absolute invisible");
        }, 300);
    });

    useEffect(() => {
        setTimeout(() => {
            setGuiVisibility("visible");
        }, 300);
    });

    function isCorrect(options, currentOption) {
        if (
            options.get(currentOption).valueOf() === options.get("ans").valueOf()
        ) {
            // visually tell user they got it correct
            // update score

            setCorrectVisibility("absolute visible");
            setIncorrectVisibility("absolute invisible");
            props.setScore(props.score + 1);
            props.setStreak(props.streak + 1);
            // if(props.streak%10 == 0) {
            //     props.setBadges(props.badges + 1);
            // } // this aint working
        } else {
            setIncorrectVisibility("absolute visible");
            setCorrectVisibility("absolute invisible");
            props.setStreak(0);
        }
        setGuiVisibility("invisible");
    }

    return (
        <div class="guessSprite relative">
            <div class="question relative mt-28 ml-10 inline-block">
                <Sprite class={guiVisibility} pokePath={"pokemon" + options.get("ans")} size={192} />
                <div class="mt-32 ml-24">
                    <img class={correctVisibility} src="\assets\images\correct.png"/>
                    <img class={incorrectVisibility} src="\assets\images\incorrect.png"/>
                </div>
            </div>
            
            {/* answers */}
            {/* put this all in a component so i can make a CorrectBoxNumber variable and a CONSTRAINT variable to share among the children */}
            <div class={"nameAnswers absolute inline-block ml-56 "+guiVisibility}>
                {/* make script that randomly puts the answer (MAKE SURE THERES AN ANSWER) in one of the 5 options below */}
                {/* make a script that generates a random number, if it equals to answer, regenerate again (loop). */}
                <ul class="text-3xl text-white">
                    <li>
                        <div class="mt-14 mb-22">
                        <button onClick={() => isCorrect(options, 0)}>
                            <Name className={guiVisibility} pokePath={"pokemon" + options.get(0)} />
                        </button>
                        </div>
                    </li>
                    <li>
                        <div class="mb-22">
                        <button onClick={() => isCorrect(options, 1)}>
                            <Name className={guiVisibility}  pokePath={"pokemon" + options.get(1)} />
                        </button>
                        </div>
                    </li>
                    <li>
                        <div class="mb-22">
                        <button onClick={() => isCorrect(options, 2)}>
                            <Name className={guiVisibility}  pokePath={"pokemon" + options.get(2)} />
                        </button>
                        </div>
                    </li>
                    <li>
                        <div class="mb-22">
                        <button onClick={() => isCorrect(options, 3)}>
                            <Name className={guiVisibility} pokePath={"pokemon" + options.get(3)} />
                        </button>
                        </div>
                    </li>
                    <li>
                        <div class="mb-22">
                        <button onClick={() => isCorrect(options, 4)}>
                            <Name className={guiVisibility} pokePath={"pokemon" + options.get(4)} />
                        </button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="mt-64 ml-20 flex flex-row">
                <div class="">
                    <Scoreboard score={props.score} badges={props.badges} streak={props.streak} />
                </div>
                <div class="ml-20">
                    <ul>
                        {/* <li>
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
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
