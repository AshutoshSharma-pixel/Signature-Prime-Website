import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-QNpJSYHh_3VQ5AapDmDQjCJibIQDK38",
    authDomain: "signature-prime-8a370.firebaseapp.com",
    projectId: "signature-prime-8a370",
    storageBucket: "signature-prime-8a370.firebasestorage.app",
    messagingSenderId: "544622363926",
    appId: "1:544622363926:web:e74e15fa47904d31b87c37",
    measurementId: "G-ZL24P0KYL8"
};

// Initialize Firebase only on client side
let app: FirebaseApp;
let auth: Auth;
let googleProvider: GoogleAuthProvider;

if (typeof window !== 'undefined') {
    // Check if config variables are actually present
    if (firebaseConfig.apiKey) {
        try {
            app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
            auth = getAuth(app);
            googleProvider = new GoogleAuthProvider();
        } catch (error) {
            console.error("Firebase initialization error:", error);
        }
    } else {
        console.warn("Firebase config is missing or incomplete. Authentication will not work. Check your .env.local file.");
    }
}

export { auth, googleProvider };
