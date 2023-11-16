import "./styles/App.css";
import React, { useState, useEffect } from "react";

// wait you dont have to make react components, u can use constant variables
import { Auth } from "./pages/auth.js";
import Home from "./pages/home.js";
import Guesser from "./pages/guesser.js";
import Gallery from "./pages/gallery.js";
import Navbar, { page } from "./components/navbar.js";

// Page variables
const AUTH = 1;
const HOME = 2;
const GUESSER = 3;
const GALLERY = 4;

// TO DO, ADD A HOOK IN REACT TO UPDATE HE PAGE. SINCE THE PROBLEM IS THAT APP() DOES NOT RUN AFTER U CLICK THE BUTTON
// Add a link to my github and linkedin (contact me)

function App() {
    const [page, setPage] = useState(2); // default is home page
    if (page === AUTH) {
        return (
            <div className="root p-5 bg-cyan">
                <Navbar setPage={setPage} />
                <Auth />
            </div>
        );
    } else if (page === HOME) {
        return (
            <div className="root p-5 bg-cyan">
                <Navbar setPage={setPage} />
                <Home />
            </div>
        );
    } else if (page === GUESSER) {
        return (
            <div className="root p-5 bg-cyan">
                <Navbar setPage={setPage} />
                <Guesser />
            </div>
        );
    } else if (page === GALLERY) {
        return (
            <div className="root p-5 bg-cyan">
                <Navbar setPage={setPage} />
                <Gallery />
            </div>
        );
    }
}

export default App;
