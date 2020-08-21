/* Here I apply the toggleTimeline function univerally when the page has loaded */

$(document).ready(function() {
  toggleTimeline()
  toggleTimelineAccessible()
  animateUpArrow()
});

// This sets a variable to compare current screen widths to in order to determine whether or not the screen has been resized. 
let lastWidth = $(window).width();

//The resize code below that specifically targets screen width change, is taken from https://stackoverflow.com/questions/10750603/detect-a-window-width-change-but-not-a-height-change

$(window).resize(function() {
   
   if($(window).width()!=lastWidth){
      location.reload();
      lastWidth = $(window).width();
   }       
  toggleTimeline()
  toggleTimelineAccessible()
});

/* FUNCTION 1: Timeline toggle function

    This code was modified from Will Chow's original at: https://jsfiddle.net/wilchow/4hzenxkh/ (also linked in README)
    I also used the first line of @dynamyc-2's code from CSS Tricks: https://css-tricks.com/forums/topic/jquery-window-width-condition/ (also linked in README)

    1. This function starts by dividing the logic into two sections small screens and large screens.

    SMALL SCREENS (<768px)

    2. On mouse click it shows the timeline information by...
    3. Increasing the z-index to 1000.
    4. Then it calls the blur and darken function (see below) to obscure the background. 
    5. Unless the icon clicked is the sun icon, then it calls the remove blur and darken function to ensure the sun remains 
    unchanged. 

    6. When the close button (or anywhere) is clicked:
    7. The timeline information is hidden again using z-index of -1000.
    8. The remove blur and darkness function is called to bring the background back to normal. 

    LARGE SCREENS (>=768px)

    9. On mouse hover it shows the timeline information using a z-index of 1000.
    10. On mouse out it hides the timeline information using a z-index of -1000.
*/

const workHistorySection = $("#work-history-section"); 

function toggleTimeline() {
  if ($(window).width() < 768) {
    $(".timeline-icon").click(function() {
      $(this).parent().parent().find(".timeline-info").css("z-index", "1000"); 
      addBlurDarken()
      if ($(this).hasClass("fa-sun")) {
        removeBlurDarken();
      }
    })   
    $(".close-button").click(function() {
      $(".timeline-info").css("z-index", "-1000");  
      removeBlurDarken();
    })
  } else if ($(window).width() >= 768) {
    $(".timeline-icon").mouseover(function() {
      $(this).parent().parent().find(".timeline-info").css("z-index", "1000"); 
    })
    $(".timeline-icon").mouseout(function() {
      $(".timeline-info").css("z-index", "-1000");
    })
  }
}

/* FUNCTION 2: Timeline toggle function for keyboard accessibility
    This function is identical to the one above except that instead of mousein and mouseout the trigger events are focus and blur.
*/

function toggleTimelineAccessible() {
  if ($(window).width() < 768) {
    $(".timeline-icon").focus(function() {
      $(this).parent().parent().find(".timeline-info").css("z-index", "1000"); 
      addBlurDarken()
      if ($(this).hasClass("fa-sun")) {
        removeBlurDarken();
      }
    })
    $(".close-button").focus(function() {
      $(".timeline-info").css("z-index", "-1000");  
      removeBlurDarken();
    })   
    $(".timeline-icon").blur(function() {
      $(".timeline-info").css("z-index", "-1000"); 
      removeBlurDarken();
    })
  } else if ($(window).width() >= 768) {
    $(".timeline-icon").focus(function() {
      $(this).parent().parent().find(".timeline-info").css("z-index", "1000");
    })
    $(".timeline-icon").blur(function() {
      $(".timeline-info").css("z-index", "-1000"); 
    })
  }
}

/*
    FUNCTION 3: Add Blur and Darken Background of Timeline.
    
    This function adds the blur-and-darken class to the elements that require it.
    It does this in the following order:
   
    1. Blurs and darkens all the timeline icons.
    2. Blurs and darkens all timeline lines.
    3. Blurs and darkens the Work History Heading.
    4. Blurs and darkens the instructions under the heading
    5. Blurs and darkens the paragraph at the end of the timeline.
    6. Blurs and darkens the scrolling arrow and text. 

    */

function addBlurDarken() {
  workHistorySection.find(".timeline-icon").addClass("blur-and-darken");
  workHistorySection.find(".timeline-line").addClass("blur-and-darken");
  $(".work-history-heading").addClass("blur-and-darken");
  $(".timeline-instruction-tap-click").addClass("blur-and-darken");
  $(".timeline-instruction-hover-focus").addClass("blur-and-darken");
  $(".end-of-timeline").addClass("blur-and-darken");
  $(".arrow-down-history-to-skills").addClass("blur-and-darken");
}

/* FUNCTION 4: Removes the blur and darkenening class from the elements listed above.  */

function removeBlurDarken() {
  workHistorySection.find(".timeline-icon").removeClass("blur-and-darken");
  workHistorySection.find(".timeline-line").removeClass("blur-and-darken");
  $(".work-history-heading").removeClass("blur-and-darken");
  $(".timeline-instruction-tap-click").removeClass("blur-and-darken");
  $(".timeline-instruction-hover-focus").removeClass("blur-and-darken");
  $(".end-of-timeline").removeClass("blur-and-darken");
  $(".arrow-down-history-to-skills").removeClass("blur-and-darken");
}

/* FUNCTION 5: Add and remove the "active" class to NavBar as a user browses the page.
   Taken from Pete TNT's Stack Overflow Solution at: https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working 
   
    1. When a navbar link is clicked...
    2. Find where is the active class is currently and remove it from that <li> element. 
    3. Add it to the current <a> tag's parent <li>. 
   
   */
  
  $(".navbar-nav a").on("click", function() {
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

/* FUNCTION 6: Code to close the navbar on mobile devices when a user clicks outside of the navigation & when they click on a navigation link.
   Taken from nozzlemans's Stack Overflow Solution at: https://stackoverflow.com/questions/23764863/how-to-close-an-open-collapsed-navbar-when-clicking-outside-of-the-navbar-elemen 

    1. When the DOM has loaded, 
    2. When there is a click event. 
    3. Create a variable called clickedArea that is the element clicked on.
    4. Create a variable called opened that is the mobile navbar with the class "show" i.e. the mobile nav in its open state.
    5. If the navbar is in its opened state and the clicked area is NOT the navbar...
    6. Click on the navbar toggler - effectively closing the navbar. 
    */

   $(document).ready(function() {
    $(document).click(function(event) {
    var clickedArea = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickedArea.hasClass("navbar")) {
      $("button.navbar-toggler").click();
    }
  });
});

/* FUNCTION 7: Code to animate the up arrow when a user hovers over the entire "Back to Top" div.
I had this originally as a hover effect over the icon, but I felt the icon was too small a target.  

    1. When the back-to-top div is hovered over
    2. Animate the arrow

    3. When the mouse leaves the div
    4. Stop the animation.

*/
function animateUpArrow() {
  $(".back-to-top").mouseover(function() {
    $(".fa-long-arrow-alt-up").css("animation", "arrow-up 1s ease-in-out infinite");
  });
  $(".back-to-top").mouseout(function() {
    $(".fa-long-arrow-alt-up").css("animation", "none");
  });
}
