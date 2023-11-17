import Sprite from "./sprite.js";
import Name from "./name.js";

export default function Party(props) {
    return (
        <button class="answer">
            {/* make button border brightgreen */}
            {/* rectangle darkgreen */}
            {/* rectangle light green */}
            {/* pokemon sprite */}
            <Sprite pokePath={props.pokePath} size={props.size} />
            <Name pokePath={props.pokePath} />
            <img src="assets\images\lvl.png" width={40} />
            <img src="assets\images\hpBar.png" width={150} />
            <img src="assets\images\hpNum.png" width={80} />
            {/* pokemon name */}
            {/* level */}
            {/* hp bar image */}
            {/* health bar number 100/100 */}
        </button>
    );
    // make the class changeable
}
