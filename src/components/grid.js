import Pokemon from "./pokemon.js";

export default function Grid() {
    const numComponents = 649;

    // Generate an array of React components using a for loop
    const components = [];
    for (let i = 1; i <= numComponents; i++) {
        const key = `pokemon-${i}`;

        let path = "pokemon" + i;
        console.log(path);
        components.push(<Pokemon pokePath={path} key={key} index={i} />);
    }
    return (
        <ol>
            {components.map((component) => (
                <li key={component.key}>{component}</li>
            ))}
        </ol>
    );
    // make the class changeable
}
