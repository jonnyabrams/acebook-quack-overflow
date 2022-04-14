$(document).ready(function () {
  $(".delete-post").on("click", function (e) {
    $target = $(e.target);
    const id = $target.attr("data-id");
    console.log(id);
    $.ajax({
      type: "DELETE",
      url: "/posts/" + id,
      success: function (data) {
        // alert("Deleting Article");
        console.log(data);
        window.location.href = "/posts";
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
