// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID,
// };

// // Initialize Firebase
// export const db = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// all this code should be put into a function

export function retrieveFromDatabase() {
    const firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
    };

    // Initialize Firebase
    const db = initializeApp(firebaseConfig).database();

    var ref = db.ref("-Nf9P_ZKzLU2pL6Z6dgp");
    // you want to get a value
    // requires two callback functions, one function for when value is successfully received, and other when an error occurs
    ref.on("value", receivedData, errData);
}

function receivedData(data) {
    console.log(data);
}

function errData(err) {
    console.log("Error for Retrieving Data");
    console.log(err);
}
