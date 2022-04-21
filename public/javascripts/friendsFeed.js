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
  
  document.querySelectorAll(".username").forEach(username => {
    console.log("The div user below:")
    console.log(username);
    console.log("The post user below:")
    console.log(username.getAttribute("postUser"));
    const postUser = username.getAttribute("postUser");
    console.log("this is the const postUser");
    console.log(postUser);

    // filtering friends

    if (sessionFriendsList.includes(postUser)) {
      console.log("this is filtered friends post");
      console.log(postUser);
    } else {
      console.log("no friends");
    }
  });












};

myFriends();

