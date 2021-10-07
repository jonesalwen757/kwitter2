const firebaseConfig = {
      apiKey: "AIzaSyCovLlSA9XFd7GC8eplhNjyIZVhBcYl0xU",
      authDomain: "kwitter-8767f.firebaseapp.com",
      projectId: "kwitter-8767f",
      storageBucket: "kwitter-8767f.appspot.com",
      messagingSenderId: "982921287379",
      appId: "1:982921287379:web:21795208a73b0eb48ee626",
      measurementId: "G-KY74EZ7TQN"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addroom()
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose :"adding room name"
   });
   localStorage.setItem("room_name",room_name);
   window.location = "kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name -"+ Room_name);
      row= "<div class='room_name' id="+Room_name+"onclick='redirecToName(this.id)'># "+race_name+"</div><hr>"
      //End code
      });});}
getData();

function redirecToName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location("kwitter_room.html");
}

function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location("index.html");
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message : msg,
      like:0

      });
      document.getElementById("msg").value ="";
}