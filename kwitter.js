function adduser(){

username=docuent.getelementbyid("user_name").value;
localStorage.setItem("user_name",username);
window.location="kwitter_room.html"
}