import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { ref, onValue } from "firebase/database";

const Name = (props) => {
    // pokePath is item name in database. E.g. pokemon1, pokemon2, etc.
    let [loadName, setLoadName] = useState(null);
    // let name;
    useEffect(() => {
        const distanceRef = ref(
            db,
            "-NiwuMEa3bY2QKh25lGR/" + props.pokePath + "/name"
        );
        // onvalue is asynchronous and this is why images do not load when website is updated
        const unsubscribe = onValue(distanceRef, (snapshot) => {
            // take a snapshot of the item in the database (since value can possibly constantly updates)
            const fetchName = snapshot.val(); // get value
            setLoadName(fetchName);
        });
        return () => unsubscribe();
    }, [props.pokePath]);

    return (
        <div className="">
            {loadName ? <p class="name">{loadName}</p> : <p>Loading</p>}
        </div>
    );
};

export default Name;
