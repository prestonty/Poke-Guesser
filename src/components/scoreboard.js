export default function Scoreboard(props) {
    // function increaseScore(props) {
    //     props.setScore(++score);
    // }
    return (
        <div class="scoreboard">
            {/* <h2>ScoreBoard</h2> */}
            <ul>
                <li>Total Score: {props.score}</li>
                {/* <li>Number of Badges: {props.badges}</li> */}
                <li>Current Streak: {props.streak}</li>
            </ul>
        </div>
    );
}
