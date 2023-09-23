import Hint from "./hint";

export default function question(props) {
    var pokeTitle = "error";

    // Generating a random pokemon
    // this is scuffed, for now I can choose a random number in each generation (each poke-number)
    // I think each pokemon has a universal number

    if (props.questionType === "sound") {
        pokeTitle = "poke_name_for_sound";
        // input a sound button (more complicated)
        // go into database (just a file with sound for now) and choose a sound linked with a pokemon
        // get answer
    } else if (props.questionType === "image") {
        // insert an element for image (react component)
        pokeTitle = "poke_name_for_image";
    }
    return (
        <div className="question-block">
            <h2 class="question">{props.question}</h2>

            <Hint pokeName={pokeTitle} />
        </div>
    );
    // make the class changeable
}
