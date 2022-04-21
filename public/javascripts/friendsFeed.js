const myFriends = () => {

  const userSession = document.querySelector(".user-profile");
  console.log("The session user below:")
  console.log(userSession.getAttribute("sessionUser"));
  const sessionUser = userSession.getAttribute("sessionUser");
  console.log("this is the const sessionUser");
  console.log(sessionUser);

  // finding friends array

  const sessionFriends = document.querySelector(".user-profile");
  console.log("The session user friends below:")
  console.log(sessionFriends.getAttribute("sessionFriends"));
  console.log("this is the const sessionFriends");
  console.log(sessionFriends.getAttribute("sessionFriends"));

  const sessionFriendsList = sessionFriends.getAttribute("sessionFriends");
  console.log("this is the const sessionFriendsList");
  console.log(sessionFriendsList);


  // post users
  
  const filteredPost = [];

  document.querySelectorAll(".posts").forEach(post => {
    console.log("The div user below:")
    console.log(post);
    console.log("The post user below:")
    console.log(post.getAttribute("postUser"));
    const postUser = post.getAttribute("postUser");
    console.log("this is the const postUser");
    console.log(postUser);

    // filtering friends

     if (sessionFriendsList.includes(postUser)) {
      console.log("this is filtered friends post");
      console.log(post);
      filteredPost.push(post);
    } else {
      console.log("no friends");
      
    }

})
console.log("printing filteredPost");
console.log(filteredPost);

};

myFriends();


