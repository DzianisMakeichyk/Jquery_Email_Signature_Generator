////////////////////////
// FUNCTIONS
////////////////////////

//
// Place raw HTML of each version into appropriate containers
function updateHtmlSigRaw() {
  get_html_signature_full_visual = document.getElementById("signature-full-visual").innerHTML;
  get_html_signature_horizontal_visual = document.getElementById("signature-horizontal-visual").innerHTML;
  $("#signature-full-html textarea").text(get_html_signature_full_visual);
  $("#signature-horizontal-html textarea").text(get_html_signature_horizontal_visual);
}

///
// Reset form
function resetForm() {
  document.getElementById("employee-information-form").reset();
  initialize_dummy_data();
  // Office phone
  $(".phone_office_element").hide();
  $(".output_phone_office").empty();
  // Mobile phone
  $(".phone_mobile_element").hide();
  $(".output_phone_mobile").empty();
  // Twitter
  $(".twitter_element").hide();
  $(".output_twitter").empty();
}

////////////////////////
// INITIALIZE
////////////////////////

//
// Reset form, even on soft page refreshes
// Put new functionality BELOW this
resetForm();
//
// Reset form button functionality
$("#reset-form").click(function(e) {
  e.preventDefault();
  resetForm();
});

//
// Activate Bootstrap tabs
$("#html-signature-full-tabs a").click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
$("#html-signature-horizontal-tabs a").click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

//
// Set variables and defaults
var employee = {
  full_name: "Karl Benz",
  position: "CEO",
  email_address: "karl.benz@benz.com"
};

function initialize_dummy_data() {
  //
  // Assign default variables on DOM load
  for (var key in employee) {
    if(employee.hasOwnProperty(key)) {
      $("span.output_"+key).html(employee[key]);
    }
  }
}
initialize_dummy_data();

//
// Location addresses
var address_full = {
  austin: "Daimler AG<br />70546 Stuttgart Germany<br />Commercial Register Stuttgart, No. HRB 19360 <br />",
};

////////////////////////
// FORM FIELDS
////////////////////////

//
// HTML Full signature output
function output_address_full() {
  var address_line_full = address_full.austin;
  $("span.output_address_full").html(address_line_full);
  $(".input_office input[type=radio]").on("change", function(){
    if(document.getElementById('location_austin').checked) {
      address_line_full = address_full.austin;
    }
    if(document.getElementById('location_san_antonio').checked) {
      address_line_full = address_full.san_antonio;
    }
    if(document.getElementById('location_san_francisco').checked) {
      address_line_full = address_full.san_francisco;
    }
    if(document.getElementById('location_london').checked) {
      address_line_full = address_full.london;
    }
    $("span.output_address_full").html(address_line_full);
    updateHtmlSigRaw()
  });
}
output_address_full();
//
// Full name
// Check input field for data
$(".input-full-name input").on("change keyup paste", function(){
  var full_name = $(this).val();
  if(full_name) {
    $("span.output_full_name").html(full_name);
  } else {
    $("span.output_full_name").html(employee.full_name);
  }
  updateHtmlSigRaw()
});

//
// Position
// Check input field for data
$(".input-position input").on("change keyup paste", function(){
  var position = $(this).val();
  if(position) {
    $("span.output_position").html(position);
  } else {
    $("span.output_position").html(employee.position);
  }
  updateHtmlSigRaw()
});

//
// Email address
// Check input field for data
$(".input-email-address input").on("change keyup paste", function(){
  var email_address = $(this).val();
  if(email_address) {
    $("span.output_email_address").html(email_address);
    $(".email_address_anchor").attr("href", "mailto:"+email_address);
  } else {
    $("span.output_email_address").html(employee.email_address);
    $(".email_address_anchor").attr("href", "mailto:"+employee.email_address);
  }
  updateHtmlSigRaw()
});

// Hide optional phone numbers on DOM load
$(".phone_numbers_element").hide();
//
var phone_office = "";
var phone_mobile = "";
// Office phone number
// Field is optional. Hide on DOM load
$(".phone_office_element").hide();
$(".phone_mobile_element").hide();
// Check input field for data
$(".input-phone-mobile input").on("change keyup paste", function(){
  var phone_mobile = $(this).val();
  if(phone_mobile) {
    $(".phone_numbers_element").show();
    $(".phone_mobile_element").show();
    $("span.output_phone_mobile").html(phone_mobile);
  } else {
    $(".phone_mobile_element").hide();
  }
  if(!phone_office && !phone_mobile) {
    $(".phone_numbers_element").hide();
  }
  updateHtmlSigRaw()
});

updateHtmlSigRaw();

////////////////////////
// Upload image
////////////////////////
$(document).ready(function() {

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $('.view-img img').attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#upload").change(function() {
    readURL(this);
  });

  $('.uploadbtn').on('click', function() {
    $('#upload').trigger('click');

  });
});
