// import { navHome, navGuesser, navGallery } from "../App.js";

// Page constants
const AUTH = 1;
const HOME = 2;
const GUESSER = 3;
const GALLERY = 4;

export default function Navbar(props) {
    function navHome() {
        props.setPage(HOME);
    }

    function navGuesser() {
        props.setPage(GUESSER);
    }

    function navGallery() {
        props.setPage(GALLERY);
    }

    return (
        // the my-5 is directly connected with the padding p-5 in App.js
        <div class="mx-24 my-5 flex justify-evenly font-mono text-midnight text-3xl font-bold">
            <button
                className="flex justify-center hover:text-white transition-colors duration-300"
                onClick={navHome}
            >
                <img src="/assets/images/logo.png" width={100} alt="logo" />
                <p className="m-auto ml-5">PokeGuesser</p>
            </button>
            <button
                className="hover:text-white transition-colors duration-300"
                onClick={navGuesser}
            >
                <p>Guesser</p>
            </button>
            <button
                className="hover:text-white transition-colors duration-300"
                onClick={navGallery}
            >
                <p>Gallery</p>
            </button>
        </div>
    );
    // make the class changeable
}
