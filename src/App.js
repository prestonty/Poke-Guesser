import "./styles/App.css";

// wait you dont have to make react components, u can use constant variables
import { Auth } from "./pages/auth.js";
import Home from "./pages/home.js";
import Guesser from "./pages/guesser.js";
import Gallery from "./pages/gallery.js";

import { useEffect, useState } from "react";
import { db, auth } from "./firebase.js";

function App() {
    const AUTH = 0;
    const HOME = 1;
    const GUESSER = 2;
    const GALLERY = 3;
    var page = AUTH;

    if (page === AUTH) {
        return <Auth />;
    } else if (page === HOME) {
        return <Home />;
    } else if (page === GUESSER) {
        return <Guesser />;
    } else if (page === GALLERY) {
        return <Gallery />;
    }
}

export default App;
