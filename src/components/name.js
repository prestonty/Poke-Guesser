// YourComponent.js
import React from "react";
import { db } from "../firebase.js";
import { ref, onValue } from "firebase/database";

const Name = (props) => {
    // pokePath is item name in database. E.g. pokemon1, pokemon2, etc.
    let name;
    const distanceRef = ref(
        db,
        "-Nf9P_ZKzLU2pL6Z6dgp/" + props.pokePath + "/name"
    );
    onValue(distanceRef, (snapshot) => {
        // take a snapshot of the item in the database (since value can possibly constantly updates)
        name = snapshot.val(); // get value
    });

    return (
        <div>
            <p class="name">{name}</p>
        </div>
    );
};

export default Name;
