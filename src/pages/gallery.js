import Grid from "../components/grid.js";

export default function Gallery() {
    return (
        <div className="gallery bg-cyan font-mono mx-20">
            <h1 className="title text-midnight text-center text-8xl">Pokemon Gallery</h1>
            <br />
            <p className="text text-midnight text-center text-lg text-3xl">
                This is a gallery of all the Pokemon sprites used in this app.
            </p>
            <h2 className="sub-title text-midnight text-center text-5xl mt-20">
                Brief History of 2D Sprites
            </h2>
            <p className="text-midnight text-lg">
                2D sprites have played a significant role in the history of
                Pokémon, as they were the primary graphical representation of
                Pokémon in the early games. Here's a brief history of 2D sprites
                in Pokémon: <br />
                <br />
                <span className="font-bold">Generation I (1996-1998):</span> The
                Pokémon series began with Pokémon Red and Green (Blue in the
                international release) for the Game Boy. These games featured
                simple, pixelated 2D sprites for the 151 original Pokémon. Each
                Pokémon had front and back sprites, and these designs were
                iconic for many fans.
                <br />
                <br />
                <span className="font-bold">
                    Generation II (1999-2000):
                </span>{" "}
                Pokémon Gold and Silver continued to use 2D sprites on the Game
                Boy Color. The number of Pokémon increased to 251, and the
                graphics became more detailed. Gender differences were
                introduced, and some Pokémon had animated sprites.
                <br />
                <br />
                <span className="font-bold">
                    Generation III (2002-2006):
                </span>{" "}
                Pokémon Ruby and Sapphire, along with FireRed and LeafGreen,
                introduced 386 Pokémon. The sprites took advantage of the Game
                Boy Advance's improved capabilities, allowing for more colors
                and better animations. Pokémon contests and double battles added
                further complexity to the sprites.
                <br />
                <br />
                <span className="font-bold">
                    Generation IV (2006-2010):
                </span>{" "}
                Pokémon Diamond and Pearl for the Nintendo DS featured 493
                Pokémon with even more detailed sprites and animations. Some
                Pokémon also had unique animations when they entered battle.
                These games also introduced the concept of alternate forms for
                some Pokémon.
                <br />
                <br />
                <span className="font-bold">
                    Generation V (2010-2013):
                </span>{" "}
                Pokémon Black and White took advantage of the DS's hardware to
                create dynamic and animated sprites for the 156 new Pokémon
                introduced in these games. The Unova region's 2D sprites
                received praise for their quality.
                <br />
                <br />
                <span className="font-bold">
                    Generation VI (2013-2016):
                </span>{" "}
                Pokémon X and Y for the Nintendo 3DS marked a transition to 3D
                models for the first time in the main series. While not 2D
                sprites, it's worth mentioning here as it was a significant
                departure from the traditional sprite-based design.
                <br />
                <br />
                2D sprites continue to be used in various Pokémon spin-off
                games, such as Pokémon Mystery Dungeon and various mobile apps.
                They also make appearances in the Pokémon games through elements
                like the "PokeDex" and other menu interfaces. While the main
                series games have moved to 3D models, 2D sprites remain a
                beloved part of Pokémon's history and continue to be used in
                various forms in the broader Pokémon franchise.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />

            <h3 className="text-midnight text-8xl text-center">
                The National PokeDex
            </h3>
            <br />
            <br />
            <Grid size={192} />
        </div>
    );
}
