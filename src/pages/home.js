export default function Home() {
    return (
        <div className="home bg-cyan font-mono mx-20">
            <h1 className="home-title text-white text-8xl">
                Welcome to Poke-Guesser
            </h1>
            <br />
            <br />
            <br />
            <div className="content flex content-start justify-center">
                <div className="right mr-40">
                    <div>
                        <p className="text-white text-2xl">
                            A quiz to test your knowledge on Pokemon! Inspired
                            by the anime's half-way segment: "Who's that
                            Pokemon?"
                        </p>

                        <br />
                        <br />
                        <br />
                        <p className="text-white text-lg">
                            "Who's that Pokémon?" is a popular and recurring
                            segment in the Pokémon animated TV series, which is
                            used to engage the audience, especially younger
                            viewers.
                        </p>
                        <br />
                        <br />
                        {/* REACT ASSUMES ALL IMAGES ARE ALREADY IN PUBLIC FOLDER!!! */}

                        {/* ADD AN API HERE, LIKE A SPOTIFY API OR SOMETHING!!! */}
                    </div>
                </div>
                <br />

                <div className="left text-white text-lg">
                    <img
                        className="large-image"
                        src={"/assets/images/WhoThatPokemon.jpg"}
                        width={1000}
                        alt="Who's that Pokemon"
                    />
                    <br />
                    <br />
                    <h2 className="text-2xl">
                        Didn't have a childhood? Fret not, I will catch you up
                        on the Pokemon lore:
                    </h2>
                    <br />
                    <p>
                        The "Who's that Pokémon?" segment occurs once per
                        episode, usually before or after a commercial break. It
                        starts with a narrator introducing a Pokémon silhouette,
                        asking viewers to guess its identity. Sometimes placed
                        around a commercial break, the reveal follows, providing
                        a brief description of the Pokémon and serving an
                        educational purpose by expanding viewers' Pokémon
                        knowledge. This segment is beloved for its interactive
                        element, engaging fans to guess the Pokémon before its
                        unveiling, making it an iconic part of the Pokémon
                        animated series.
                    </p>
                    <br />
                    <br />
                    <p>
                        Developed using React.js & Tailwind Css for the
                        front-end and Python & FireBase for the back-end.
                        <br />
                        Project was started on Sept. 21, 2023... And was
                        continued on Oct. 17... And then picked back up on Nov.
                        10!
                    </p>
                </div>
            </div>
        </div>
    );
}
