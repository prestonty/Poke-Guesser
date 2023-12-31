import Sprite from "../components/sprite.js";
import Name from "../components/name.js";
import GuessSprite from "../components/guessSprite.js";
import Scoreboard from "../components/scoreboard.js";
import React, { useState, useEffect } from "react";

export default function Guesser() {
    const [score, setScore] = useState(0); // default score is zero. But it should be replaced by current user score from database
    const [badges, setBadges] = useState(0); // default score is zero. But it should be replaced by current user score from database
    const [streak, setStreak] = useState(0); // default score is zero. But it should be replaced by current user score from database

    return (
        // BORDERS ARE A HACK, I CAN VISUALIZE SO MUCH BETTER!!!
        <div className="guesser bg-cyan font-mono mx-20 border-black border-2">
            <Scoreboard score={score} badges={badges} streak={streak} />
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
                <GuessSprite
                    score={score}
                    badges={badges}
                    streak={streak}
                    setScore={setScore}
                    setBadges={setBadges}
                    setStreak={setStreak}
                />
                {/* make this sprite visible if guessSprite mode */}
            </div>
        </div>
    );
}
