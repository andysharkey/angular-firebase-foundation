
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyAuUM-73VyykFzJb_cyb6xJbj5J-lmzBoc",
    authDomain: "ambient-34c45.firebaseapp.com",
    databaseURL: "https://ambient-34c45.firebaseio.com",
    storageBucket: "ambient-34c45.appspot.com",
    messagingSenderId: "221338218466"
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};