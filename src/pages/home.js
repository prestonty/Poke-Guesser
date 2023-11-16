export default function Home() {
    return (
        <div className="home bg-cyan font-mono mx-20">
            <br />
            <br />
            <br />
            <h1 className="home-title text-white text-8xl flex justify-center">
                Welcome to Poke-Guesser
            </h1>
            <br />
            <br />
            <br />
            <div className="content flex content-start justify-center mx-[-100px]">
                <div
                    class="bg-cover bg-center bg-fixed flex w-screen h-screen"
                    style={{
                        backgroundImage: "url('/assets/images/snorelaxbg.png')",
                    }}
                >
                    <div class="left w-2/5 flex mt-40 ml-20 justify-items-start">
                        <p class="text-midnight text-3xl indent-16">
                            This website was inspired by the iconic "Who's that
                            Pokémon?" TV segment occurring once per episode,
                            usually before a commercial break.
                            <br />
                            <br />
                            <br />
                            The viewers guess the identity of a Pokémon's
                            silhouette and after a commercial break, the reveal
                            follows, providing a brief description of the
                            Pokémon and serving an educational purpose by
                            expanding viewers' knowledge.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content flex content-start justify-center">
                {/* <div className="right mr-40">
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
                    </div>
                </div> */}
                {/* REACT ASSUMES ALL IMAGES ARE ALREADY IN PUBLIC FOLDER!!! */}

                {/* ADD AN API HERE, LIKE A SPOTIFY API OR SOMETHING!!! */}
                <br />

                <div className="left text-white text-lg">
                    {/* <img
                        className="large-image"
                        src={"/assets/images/WhoThatPokemon.jpg"}
                        width={1000}
                        alt="Who's that Pokemon"
                    /> */}
                    <br />
                    <br />
                    <p>
                        Developed using React.js & Tailwind CSS for the
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
