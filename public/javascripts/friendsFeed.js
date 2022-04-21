const myFriends = () => {
  document.querySelectorAll(".posts").forEach(post => {
    console.log("The post below:")
    console.log(post);
    
    console.log("The Username below:")
    console.log(post.getAttribute('username'));
    // console.log('username');
    console.log("we are here");
    
    // console.log(post.getAttribute("username"));
  });
};

myFriends();