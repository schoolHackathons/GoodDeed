import * as firebase from 'firebase';

let config = {
	apiKey: "AIzaSyBeKFpjKYkvNvagxTui6gx_z0Ag-y1TFa4",
    authDomain: "gooddeed-2afa7.firebaseapp.com",
    databaseURL: "https://gooddeed-2afa7.firebaseio.com",
    projectId: "gooddeed-2afa7",
    storageBucket: "gooddeed-2afa7.appspot.com",
    messagingSenderId: "812683923565"
};

firebase.initializeApp(config);

export default firebase;