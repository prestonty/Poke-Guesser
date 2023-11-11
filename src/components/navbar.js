import { navHome, navGuesser, navGallery } from "../App.js";

export default function Navbar(props) {
    return (
        // the my-5 is directly connected with the padding p-5 in App.js
        <div class="mx-24 my-5 flex justify-evenly font-mono text-midnight text-3xl font-bold">
            <button className="flex justify-center" onClick={navHome}>
                <img src="/assets/images/logo.png" width={100} alt="logo" />
                <p className="m-auto ml-5">PokeGuesser</p>
            </button>
            <button className="" onClick={navGuesser}>
                <p>Guesser</p>
            </button>
            <button className="" onClick={navGallery}>
                <p>Gallery</p>
            </button>
        </div>
    );
    // make the class changeable
}
