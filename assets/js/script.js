/* Here I apply the toggleTimeline function univerally when the page has loaded */

$(document).ready(function() {
  toggleTimeline()
  animateUpArrow()
});

$(window).resize(function() {
  toggleTimeline()
});

/* FUNCTION 1: Timeline toggle function

    This code was modified from Will Chow's original at: https://jsfiddle.net/wilchow/4hzenxkh/
    I also used the first line of @dynamyc-2's code from CSS Tricks: https://css-tricks.com/forums/topic/jquery-window-width-condition/

    1. This function starts by dividing the logic into two sections small screens and large screens.
    2. Then on mouse over (click or hover): show the timeline information.
    3. Hide the icon that was clicked.
    4. Hide the timeline line following that clicked icon.

    The following is only applied to small screens and is included as a separate function (addBlurDarken()) which adds the blur-and-darken class to the elements
    that require it:
   
    5. Blur and darken all the other timeline icons.
    6. Blur and darken all the other timeline lines.
    7. Blur and darken the Work History Heading.
    8. Blur and darken the instructions under the heading
    9. Blur and darken the paragraph at the end of the timeline.
    10. Blur and darken the scrolling arrow and text. 

    Then on mouseout the removeBlurDarken() function undoes all of the above. */

const workHistorySection = $("#work-history-section");

function toggleTimeline() {
  if ($(window).width() < 768) {
    console.log("window went under 768")
    $(".timeline-icon").mouseover(function() {
      $(this).parent().parent().find(".timeline-info").css("display", "block"); //show timeline info
      $(this).css("visibility", "hidden"); //hide icon clicked
      $(this).parent().parent().next().find(".timeline-line").css("visibility", "hidden"); //hide line following icon clicked
      addBlurDarken()
      if ($(this).hasClass("fa-sun")) {
        $(this).css("visibility", "visible"); //if the icon clicked is the sun - continue to show it and remove the blur darken filters that were just applied. 
        removeBlurDarken();
      }
    })
    $(".timeline-icon").mouseout(function() {
      $(".timeline-info").css("display", "none"); //hide timeline info
      $(this).css("visibility", "visible"); //show icon clicked
      $(this).parent().parent().next().find(".timeline-line").css("visibility", "visible"); //show line following icon clicked    
      removeBlurDarken();
    })
  } else if ($(window).width() >= 768) {
    $(".timeline-icon").mouseover(function() {
      $(this).css("visibility", "visible");
      $(this).parent().parent().find(".timeline-info").css("display", "block"); // show current timeline info
      $(this).parent().parent().next().find(".timeline-line").css("visibility", "visible");
      removeBlurDarken()
    })
    $(".timeline-icon").mouseout(function() {
      $(".timeline-info").css("display", "none"); // hide timeline info
    })
  }
}

/* I was repeating a lot of this code so I separated it out into two functions: 
    FUNCTION 2: Add Blur and Darken Background of Timeline. */
function addBlurDarken() {
  workHistorySection.find(".timeline-icon").addClass("blur-and-darken");
  workHistorySection.find(".timeline-line").addClass("blur-and-darken");
  $(".work-history-heading").addClass("blur-and-darken");
  $(".timeline-instruction-device").addClass("blur-and-darken");
  $(".timeline-instruction-non-device").addClass("blur-and-darken");
  $(".end-of-timeline").addClass("blur-and-darken");
  $(".arrow-down-history-to-skills").addClass("blur-and-darken");
}

/* FUNCTION 3: Remove the blur and darkenening effect on the background of the timeline.  */
function removeBlurDarken() {
  workHistorySection.find(".timeline-icon").removeClass("blur-and-darken");
  workHistorySection.find(".timeline-line").removeClass("blur-and-darken");
  $(".work-history-heading").removeClass("blur-and-darken");
  $(".timeline-instruction-device").removeClass("blur-and-darken");
  $(".timeline-instruction-non-device").removeClass("blur-and-darken");
  $(".end-of-timeline").removeClass("blur-and-darken");
  $(".arrow-down-history-to-skills").removeClass("blur-and-darken");
}

/* FUNCTION 4: Add and remove the "active" class to NavBar as a user browses the page.
   Taken from Pete TNT's Stack Overflow Solution at: https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working */
$(".navbar-nav a").on("click", function() {
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

/* FUNCTION 5: Code to close the navbar on mobile devices when a user clicks outside of the navigation & when they click on a navigation link.
   Taken from nozzlemans's Stack Overflow Solution at: https://stackoverflow.com/questions/23764863/how-to-close-an-open-collapsed-navbar-when-clicking-outside-of-the-navbar-elemen */
$(document).ready(function() {
  $(document).click(function(event) {
    var clickedArea = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickedArea.hasClass("navbar")) {
      $("button.navbar-toggler").click();
    }
  });
});

/* FUNCTION 6: Code to animate the up arrow when a user hovers over the entire "Back to Top" div.
I had this originally as a hover effect over the icon, but I felt the icon was too small a target.  */
function animateUpArrow() {
  $(".back-to-top").mouseover(function() {
    $(".fa-long-arrow-alt-up").css("animation", "arrow-up 1s ease-in-out infinite");
  });
  $(".back-to-top").mouseout(function() {
    $(".fa-long-arrow-alt-up").css("animation", "none");
  });
}