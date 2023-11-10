// YourComponent.js
import React from "react";
import { db } from "../firebase.js";
import { ref, onValue } from "firebase/database";

const Sprite = (props) => {
    // pokePath is item name in database. E.g. pokemon1, pokemon2, etc.
    let imageSrc;
    const distanceRef = ref(
        db,
        "-Nf9P_ZKzLU2pL6Z6dgp/" + props.pokePath + "/image"
    );
    onValue(distanceRef, (snapshot) => {
        // take a snapshot of the item in the database (since value can possibly constantly updates)
        imSrc = snapshot.val(); // get value
    });

    return (
        <div>
            <img
                class="sprite"
                src={imageSrc}
                alt="im on a whole nother level in geekin"
            />
        </div>
    );
};

export default Sprite;
