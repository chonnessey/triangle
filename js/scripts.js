$(document).ready(function(event) {
  event.preventDefault();
  const side1 = $("#side1").val();
  const side2 = $("#side2").val();
  const side3 = $("#side3").val();
  let result;

  if (side1 === side2 && side2 === side3 && side1 === side3) {
    result = "equilateral"
  } else if (side1 === side2 || side1 === side3 ) {
    result = "isosceles"
  } else if (side1 !== side2 || side1 !== side3) {
    result = "scalene"
  } else {
    result = "not"
  }
})