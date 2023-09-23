export default function hint(props) {
    // props.pokeTitle
    // use this variable to reach into folder and get correct pokeName
    // return the image/sound

    // also find 3 pokemon (of different generation to make it harder)

    return (
        <div>
            <p>this is the hint</p>
            <button class="answer">{props.answer}</button>
        </div>
    );
    // make the class changeable
}
