import "./styles/App.css";

import Home from "./pages/home.js";
import Guesser from "./pages/guesser.js";
import Gallery from "./pages/gallery.js";

function App() {
    const HOME = 1;
    const GUESSER = 2;
    const GALLERY = 3;
    var page = GALLERY;

    if (page == HOME) {
        return <Home />;
    } else if (page == GUESSER) {
        return <Guesser />;
    } else if (page == GALLERY) {
        return <Gallery />;
    }
}

export default App;
