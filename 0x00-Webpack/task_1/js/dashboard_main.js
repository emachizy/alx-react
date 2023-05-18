import $ from "jquery";

$(document).ready(function () {
  const heading = $("<h1>").text("Holberton Dashboard");
  const paragraph1 = $("<p>").text("Dashboard data for the students");
  const button = $("<button>").text("Click here to get started");
  const countParagraph = $("<p>").attr("id", "count");
  const copyrightParagraph = $("<p>").text("Copyright - Holberton School");

  $("body").append(
    heading,
    paragraph1,
    button,
    countParagraph,
    copyrightParagraph
  );
});

let count = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));