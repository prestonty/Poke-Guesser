import Sprite from "./sprite.js";
import Name from "./name.js";

export default function Pokemon(props) {
    return (
        <div>
            <Sprite pokePath={props.pokePath} />
            <Name pokePath={props.pokePath} />
        </div>
    );
}
