import "./styles/App.css";

// wait you dont have to make react components, u can use constant variables
import { Auth } from "./pages/auth.js";
import Home from "./pages/home.js";
import Guesser from "./pages/guesser.js";
import Gallery from "./pages/gallery.js";
import Navbar from "./components/navbar.js";

// Page variables
const AUTH = 0;
const HOME = 1;
const GUESSER = 2;
const GALLERY = 3;
var page = HOME; // this should be default value
console.log("REPEATING");

// TO DO, ADD A HOOK IN REACT TO UPDATE HE PAGE. SINCE THE PROBLEM IS THAT APP() DOES NOT RUN AFTER U CLICK THE BUTTON
// Add a link to my github and linkedin (contact me)

function App() {
    console.log("pAGE " + page);
    if (page === AUTH) {
        return (
            <div className="p-5 bg-cyan">
                <Navbar />
                <Auth />
            </div>
        );
    } else if (page === HOME) {
        return (
            <div className="p-5 bg-cyan">
                <Navbar />
                <Home />
            </div>
        );
    } else if (page === GUESSER) {
        return (
            <div className="p-5 bg-cyan">
                <Navbar />
                <Guesser />
            </div>
        );
    } else if (page === GALLERY) {
        return (
            <div className="p-5 bg-cyan">
                <Navbar />
                <Gallery />
            </div>
        );
    }
}

export default App;

export function navHome() {
    page = HOME;
    console.log("HOME");
}

export function navGuesser() {
    page = GUESSER;
    console.log("Guesser");
}

export function navGallery() {
    page = GALLERY;
    console.log("Gallery");
}
