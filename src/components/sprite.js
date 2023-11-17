import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { ref, onValue } from "firebase/database";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Sprite = (props) => {
    // pokePath is item name in database. E.g. pokemon1, pokemon2, etc.
    let [loadImage, setLoadImage] = useState(null);

    useEffect(() => {
        const distanceRef = ref(
            db,
            "-NiwuMEa3bY2QKh25lGR/" + props.pokePath + "/image"
        );
        // onvalue is asynchronous and this is why images do not load when website is updated
        const unsubscribe = onValue(distanceRef, (snapshot) => {
            // take a snapshot of the item in the database (since value can possibly constantly updates)
            const fetchedImageSrc = snapshot.val(); // get value
            setLoadImage(fetchedImageSrc);
        });
        return () => unsubscribe();
    }, [props.pokePath]);

    return (
        <div>
            {loadImage ? (
                <LazyLoadImage
                    // image sizes: sideLength=192 for large, sideLength=96 for small
                    className="sprite"
                    src={loadImage}
                    width={props.size}
                    height={props.size}
                    // effect="blur"
                    alt="im on a whole nother level in geekin"
                />
            ) : (
                <img placeholderSrc={"/assets/images/LQIP.png"} />
            )}
        </div>
    );
};

export default Sprite;
