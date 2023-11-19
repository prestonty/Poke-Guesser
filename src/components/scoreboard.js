import React, { useState, useEffect } from "react";

export default function Scoreboard() {
    const [score, setScore] = useState(0); // default score is zero. But it should be replaced by current user score from database
    function increaseScore(props) {
        props.setScore(++score);
    }
    return (
        <div class="scoreboard">
            <h2>ScoreBoard</h2>
            <p>Score: {score} </p>
        </div>
    );
}
