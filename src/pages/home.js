export default function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Welcome to Poke-Guesser</h1>
            {/* this has to be huge!!! */}
            <div>
                <p className="large">
                    a quiz to test your knowledge on Pokemon! Inspired by the
                    anime's half-way segment: "Who's that Pokemon?"
                </p>
                {/* REACT ASSUMES ALL IMAGES ARE ALREADY IN PUBLIC FOLDER!!! */}
                <img
                    className="large-image"
                    src="/assets/images/WhoThatPokemon.jpg"
                    alt="image"
                />
            </div>
            <br />

            <h2>
                Didn't have a childhood? Fret not, I will catch you up on the
                Pokemon lore:
            </h2>
            <p>
                "Who's that Pokémon?" is a popular and recurring segment in the
                Pokémon animated TV series, which is used to engage the
                audience, especially younger viewers.
                <br />
                <br />
                Here's how the segment works:
                <br />
                <br />
                Timing: The "Who's that Pokémon?" segment usually occurs once
                per episode, typically right before or after a commercial break.
                <br />
                <br />
                Narration: The segment begins with a brief introduction by the
                show's narrator or one of the characters. The narrator's voice
                is often used for consistency and recognition.
                <br />
                <br />
                Silhouette: A silhouette or shadow of a Pokémon is displayed on
                the screen, obscuring the creature's identity. This is done to
                create anticipation and suspense among the viewers. Question: A
                voiceover, often the narrator or a character, asks the question,
                "Who's that Pokémon?" This is the cue for the audience to try
                and guess the Pokémon's identity.
                <br />
                <br />
                Commercial Break (Optional): Sometimes, the segment occurs just
                before or after a commercial break, adding to the suspense.
                Viewers are left wondering about the Pokémon's identity until
                the show returns.
                <br />
                <br />
                Reveal: After a short break or pause, the show returns, and the
                silhouette is removed to reveal the Pokémon's true identity.
                <br />
                <br />
                Explanation: A brief description of the revealed Pokémon is
                provided, along with some of its characteristics or abilities.
                This is often delivered by the narrator or one of the
                characters.
                <br />
                <br />
                Educational Element: "Who's that Pokémon?" serves an educational
                purpose as well, introducing viewers to different Pokémon
                species and expanding their knowledge of the Pokémon world. The
                segment is not just a fun way to engage the audience but also
                serves as a form of interactivity, encouraging fans to test
                their knowledge of Pokémon by guessing the silhouette before the
                big reveal. It has become a beloved and iconic part of the
                Pokémon animated series, and many fans fondly remember this
                segment from their childhood.
            </p>
            <br />
            <br />
            <p>
                Created using React.js and FireBase. Project was started on
                Sept. 21, 2023... And was continued on Oct. 17, 2023.
            </p>
        </div>
    );
}
