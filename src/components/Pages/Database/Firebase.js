import Firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app= Firebase.initializeApp({
          apiKey: "AIzaSyCB8JJqFUCVO8CQFUW2SGCGQGpPzRZ1q0I",
          authDomain: "hellosuperstar-userauth.firebaseapp.com",
          projectId: "hellosuperstar-userauth",
          storageBucket: "hellosuperstar-userauth.appspot.com",
          messagingSenderId: "969718069500",
          appId: "1:969718069500:web:34c3d7f78cd3b40f8d7f79"
});

const auth= app.auth();
export {auth};

export default app;