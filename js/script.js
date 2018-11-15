// ------------scroll--------------------------------------------------------------INDEX------

// Add in a scroll counter

$(window).on('scroll', function () {
  let distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);

  /// If the user has scrolled at least 25
  if (distanceScrolled >= 25) {

    // fade in the intro text
    $('.hello').addClass('kaizen');

    //else remove the class
  } else {
    $('.hello').removeClass('kaizen');
  }

  ///if the user has scrolled at least 120
  if (distanceScrolled >= 120) {

    //fade in greeting one
    $('.workspacebold').addClass('kaizen');

    //else fade out the greeting
  } else {
    $('.workspacebold').removeClass('kaizen');
  }

  ///if the user has scrolled at least 200
      if (distanceScrolled > 250) {

    //fade in greeting two
    $('.workspacelight').addClass('kaizen');

    //else fade out the greeting
  } else {
    $('.workspacelight').removeClass('kaizen');
  }

  ///if the user has scrolled at least 450

    //fade in the slider

    //else the slider is hidden
});


//When the user hovers over the <span class="puppyfade"
$('.puppyfade').hover(
  function() {
  $('#puppemoji').fadeIn("slow");
}, function() {
  $('this').fadeOut("slow");
}
);
  /* Stuff to do when the mouse leaves the element */
// });)
    //fade in the puppemoji class

//else keep the class hidden



// --------------slider--------------------------------------------------------INDEX------
//create a counter, DF mainpage, default 0
let imageNumber = 0;

///When the user clicks the next button
$('.slider-next').on('click', function() {
  // if the imageNumber is less than 2, add 1. Otherwise, default it to 0.
  if (imageNumber < 2) {
    imageNumber += 1;
  } else {
    imageNumber = 0;
  }
  //log the result in the console
  console.log(imageNumber);
  $('.reframe img').hide();
  $('.reframe img').eq(imageNumber).show();
});

//When the user clikcs the back button
$('.slider-previous').on('click', function() {
  // if the imageNumber is greater than 0, subtract 1. Otherwise, default it to 2.
  if (imageNumber > 0) {
    imageNumber -= 1;
  } else {
    imageNumber = 2;
  }
  //log the result in the console.
  console.log(imageNumber);
  $('.reframe img').hide();
  $('.reframe img').eq(imageNumber).show();
});

// -----------contact from--------------------------------------------------------INDEX------------
// When the user clicks the contactme button
$('.ctabutton').on('click', contactMe);
  //fade toggle nada2
function contactMe() {
  $('.nada2').slideToggle('slow');
}

///don't actually load the page
$('.inputdone').on('click', function(event) {
  event.preventDefault();
  let userPlace = $('#place').val();
  let showSkills = $('#skills').val();
  console.log("you'd be an awesome " + showSkills + ".");

  if (userPlace.length === 0) {
    $('.error').fadeIn(300);
  } else {
    $('.error').fadeOut(300);
  }

});

//When the user clicks "send"
// $('.inputdone').on('click', errorMessage);
//   function errorMessage() {
//     $('#fake').slideDown('fast');
// }
  //if userPlace doesn't === 0

$('.inputdone').on('click', function() {
    let userPlace = $('#place').val();

    if (userPlace.length === 0) {
      $('#fake').slideDown("fast");
    }
    if (userPlace.length >= 0) {
      $('#success').slideDown("fast");
    }
});
    //fade in the .success div

  //else fade in the #fake div


// ---------burger button--------------------------------------------------------ALL------
//When the user clicks the burger
$('.ham').on('click', menuFade);
  //activate a function that shows the menu, class .nada
  function menuFade() {
  $(".nada").fadeToggle("slow");
}

  //activate a function that adds a class, changing the background color of the navbar to green
$('.ham').on('click', growGrass);
function growGrass() {
  $('#topnav').toggleClass('green');
}


// /WORK // slider//--------------------------------------------------------WORK--------
//create a counter
let workSlider = 0;

///if the imageNumber is less than 3, add one. Otherwise, default it to 0.
$('.samplecaptionone').on('click', function() {
  if (workSlider < 2) {
    workSlider += 1;
  } else {
    workSlider = 0;
  }
  //log the result in the console
  console.log(workSlider);
  $('.one img').hide();
  $('.one img').eq(workSlider).show();
});

// /expandable buttons --------------------------------------------------------WORK-------------
//context
  //When the user clicks the context buttons
$('#show1').on('click', showContext);
  //Toggle in the class
function showContext() {
  $('.container').toggleClass('explainit')
}

//results
  //When the user clicks the results buttons
$('#show2').on('click', showResults);
  //Toggle in the class
function showResults() {
  $('.container2').toggleClass('showmethemoney')
}


// /learning chinese proverbs --------------------------------------------------------LIB-------------

//when the user clicks on a module
// $('.gridmultiple').on('click', slideDown);
//
//
//
// }
  //if nothing is activated

    //slidedown the related div

    //and change the background color to highlighted

  //if another div is activated

    //slide up the acivated div && slide down the div just clicked

    // change the background color to highlighted



// -----------email button-----------------------------------------------------ALL-----------
//When the email button is clicked
$('.contact').on('click', emailMe);
  //fade in the beige bar
function emailMe() {
  $('.hidden').fadeToggle("slow");
}
