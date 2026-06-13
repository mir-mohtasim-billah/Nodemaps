// Firebase SDK (CDN use korbo, import na)

const firebaseConfig = {
  apiKey: "AIzaSyD22xK7PbJTKkYfmy8rQLiaA7sPLHzkCAg",
  authDomain: "nodemaps-410f8.firebaseapp.com",
  projectId: "nodemaps-410f8",
  storageBucket: "nodemaps-410f8.appspot.com",
  messagingSenderId: "87271462319",
  appId: "1:87271462319:web:7768c6454ca14ef59b0b5a"
};

// Initialize Firebase (OLD STYLE)
firebase.initializeApp(firebaseConfig);

// Auth ready
const auth = firebase.auth();
