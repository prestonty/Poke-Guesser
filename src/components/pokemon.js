import Sprite from "./sprite.js";
import Name from "./name.js";

export default function Pokemon(props) {
    return (
        <div class="font-mono text-center text-midnight text-lg">
            <Sprite pokePath={props.pokePath} size={props.size} />
            <Name pokePath={props.pokePath} />
        </div>
    );
}
