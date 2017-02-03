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
})
$("#html-signature-horizontal-tabs a").click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

//
// Set variables and defaults
var employee = {
  full_name: "Louis Armstrong",
  position: "Dapper Trumpeter",
  email_address: "louis.armstrong@wpengine.com",
  promo: "Voted #1 Top Workplace of Greater Austin ",
  company_name: "WP Engine, Inc."
}

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
  austin: "504 Lavaca Street, Suite 1000<br>Austin, Texas 78701",
  san_antonio: "110 E Houston St, Suite 202<br>San Antonio, Texas 78205",
  san_francisco: "San Francisco, California",
  london: "Second Home<br>68-80 Hanbury Street<br>London, E1 5JL, United Kingdom"
}
var address_horizontal = {
  austin: "504 Lavaca Street, Suite 1000 Austin, Texas 78701",
  san_antonio: "110 E Houston St, Suite 202 San Antonio, Texas 78205",
  san_francisco: "San Francisco, California",
  london: "Second Home 68-80 Hanbury Street London, E1 5JL, United Kingdom"
}

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
// HTML Horizontal signature output
function output_address_horizontal() {
  var address_line_horizontal = address_horizontal.austin;
  $("span.output_address_horizontal").html(address_line_horizontal);
  $(".input_office input[type=radio]").on("change", function(){
    if(document.getElementById('location_austin').checked) {
      address_line_horizontal = address_horizontal.austin;
    }
    if(document.getElementById('location_san_antonio').checked) {
      address_line_horizontal = address_horizontal.san_antonio;
    }
    if(document.getElementById('location_san_francisco').checked) {
      address_line_horizontal = address_horizontal.san_francisco;
    }
    if(document.getElementById('location_london').checked) {
      address_line_horizontal = address_horizontal.london;
    }
    $("span.output_address_horizontal").html(address_line_horizontal);
    updateHtmlSigRaw()
  });
}
output_address_horizontal();

//
// Promotional lines
$("span.output_promo_line").html(employee.promo);
var promo_line = "";
$(".input_promotion input[type=radio]").on("change", function(){
  if(document.getElementById('promotion-2').checked) {
    promo_line = "Voted #1 Top Workplace of Greater Austin";
  } else {
    promo_line = "";
  }
  // Inject promo line, if user wants one
  if(promo_line) {
    $(".promo_line_element").show();
    $("span.output_promo_line").html(promo_line);
  } else {
    $(".promo_line_element").hide();
  }
  updateHtmlSigRaw()
});

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
// Check input field for data
// $(".input-phone-office input").on("change keyup paste", function(){
//   phone_office = $(this).val();
//   if(phone_office) {
//     $(".phone_numbers_element").show();
//     $(".phone_office_element").show();
//     $("span.output_phone_office").html(phone_office);
//   } else {
//     $(".phone_office_element").hide();
//   }
//   if(!phone_office && !phone_mobile) {
//     $(".phone_numbers_element").hide();
//   }
//   updateHtmlSigRaw()
// });
// Mobile phone number
// Field is optional. Hide on DOM load
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

////////////////////////
// Raw HTML version
////////////////////////

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
      }

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