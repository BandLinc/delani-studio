$(document).ready(function () {
    $("div#test").click(function () {
        if ($('#design').css('display') == 'none') {
            $("#design").show();
            $("#test").hide();
            $("#design_text").hide();
        }
        else {
            $("#test").show();
            $("#design").hide();
        }
    });
});
$(document).ready(function () {
    $("div#test1").click(function () {
        if ($('#development').css('display') == 'none') {
            $("#development").show();
            $("#test1").hide();
            $("#development_text").hide();
        }
        else {
            $("#test1").show();
            $("#development").hide();
        }
    });
});
$(document).ready(function () {
    $("div#test2").click(function () {
        if ($('#product').css('display') == 'none') {
            $("#product").show();
            $("#test2").hide();
            $("#product_text").hide();
        }
        else {
            $("#test2").show();
            $("#product").hide();
        }
    });
});
//main function that is called by form
function myFunction() {
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var message=document.getElementById("message").value;

  if (validateData(name,email,message)==true) {
    alert("Thank you for contacting us "+name+". Your message is received. Our support team will get in touch with you");
  } else {
      alert ("Sorry, please capture all information on needed on the contact form.")
  }

}
//function to validate details entered
function validateData (name,email,message) {
   var result=true;
   if (name=="" || email=="" || message=="")  {
        result=false;
   }
   return result;
}
