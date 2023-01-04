// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref,update} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
const loggedUserInfor = document.querySelectorAll('.user-loggedin')


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
apiKey: "AIzaSyAMLBeMzGNtOc9cCGrVEl0dnXM3FZjqNSQ",
authDomain: "authenication-app-3c261.firebaseapp.com",
databaseURL: "https://authenication-app-3c261-default-rtdb.firebaseio.com",
projectId: "authenication-app-3c261",
storageBucket: "authenication-app-3c261.appspot.com",
messagingSenderId: "609649252716",
appId: "1:609649252716:web:02bacc4ae128fb51513b49"
};*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
      login.addEventListener('click',(e)=>{
      
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const dt = new Date();
          update(ref(database,'users/' + user.uid),{
            last_login:dt,
        })
        window.location.href="Mainpage.html";
        alert('user logined in!');

        
      
      })
        .catch(function(error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message);
        });
      
      });



    