import Pokemon from "./pokemon.js";

export default function Grid(props) {
    const numComponents = 649;

    // Generate an array of React components using a for loop
    const components = [];
    for (let i = 1; i <= numComponents; i++) {
        const key = `pokemon-${i}`;

        let path = "pokemon" + i;
        console.log(path);
        components.push(
            <Pokemon pokePath={path} size={props.size} key={key} index={i} />
        );
    }
    return (
        <ol class="items-center grid-cols-9">
            {components.map((component) => (
                <li class="inline-block" key={component.key}>
                    {component}
                </li>
            ))}
        </ol>
    );
    // make the class changeable
}
