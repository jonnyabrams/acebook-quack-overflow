const myFriends = () => {
  document.querySelectorAll(".username").forEach(username => {
    console.log("The div user below:")
    console.log(username);
    console.log("The post user below:")
    console.log(username.getAttribute("postUser"));
    const postUser = username.getAttribute("postUser");
    console.log("this is the const postUser");
    console.log(postUser);
  });
  const userSession = document.querySelector(".user-profile");
  console.log("The session user below:")
  console.log(userSession.getAttribute("sessionUser"));
  const sessionUser = userSession.getAttribute("sessionUser");
  console.log("this is the const sessionUser");
  console.log(sessionUser);
};

myFriends();

