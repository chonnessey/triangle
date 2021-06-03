$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());
    let result;

    if (side1 === side2 && side2 === side3 && side1 === side3) {
      result = "#equilateral"
    }  else if (side1 === side2 || side1 === side3 ) {
      result = "#isosceles"
    } else if (side1 !== side2 || side1 !== side3) {
      result = "#scalene"
    } else if (side1 + side2 === side3) {
      result = "#not"
    }


    $(".previous").hide();


    if (result === "#equilateral") {
      $("#equilateral").show();
    } else if (result === "#isosceles") {
      $("#isosceles").show(); 
    }  else if (result === "#scalene") {
      $("#scalene").show();
    }  else if (result === "#not") {
      $("#not").show();
    }
    
    
    // $("#isosceles").show(result);
    // $("#scalene").show(result);
    // $("#not").show(result);
  });  
});