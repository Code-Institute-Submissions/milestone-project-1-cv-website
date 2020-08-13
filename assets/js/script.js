// Code modified from Will Chow's original at: https://jsfiddle.net/wilchow/4hzenxkh/
// Also used the first line of @dynamyc-2's code from CSS Tricks: https://css-tricks.com/forums/topic/jquery-window-width-condition/


//BUT ALSO: Need to have this NOT apply to the last icon on the timeline - the sun. How????


$(document).ready(function () {
    toggleTimeline()
});

$(window).resize(function () {
    toggleTimeline()
});


/* Timeline toggle function

    1. This function starts by dividing the logic into two sections small screens and large screens.
    2. Then on mouse over (click or hover): show the timeline information.
    3. Hide the icon that was clicked.
    4. Hide the timeline line following that clicked icon.

    The following is only applied to small screens:
   
    5. Blur and darken all the other timeline icons.
    6. Blur and darken all the other timeline lines.
    7. Blur and darken the Work History Heading.
    8. Blur and darken the instructions under the heading
    9. Blur and darken the paragraph at the end of the timeline.
    10. Blur and darken the scrolling arrow and text. 

    Then all this is undone on mouseout. 

*/

const workHistorySection = $("#work-history-section");

function toggleTimeline() {
    if ( $(window).width() < 768 ) {
         console.log("window went under 768")

            $(".timeline-icon").mouseover(function () {
                
                $(this).parent().parent().find(".timeline-info").css("display", "block"); //show timeline info
                $(this).css("visibility", "hidden"); //hide icon clicked
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "hidden"); //hide line following icon clicked
                
                workHistorySection.find(".timeline-icon").addClass("blur-and-darken"); 
                workHistorySection.find(".timeline-line").addClass("blur-and-darken"); 
                $(".work-history-heading").addClass("blur-and-darken");
                $(".timeline-instruction-device").addClass("blur-and-darken");
                $(".end-of-timeline").addClass("blur-and-darken");
                $(".arrow-down-history-to-skills").addClass("blur-and-darken");
            })

            $(".timeline-icon").mouseout(function () {
                $(".timeline-info").css("display", "none"); //hide timeline info
                $(this).css("visibility", "visible"); //show icon clicked
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "visible"); //show line following icon clicked
                
                workHistorySection.find(".timeline-icon").removeClass("blur-and-darken"); 
                workHistorySection.find(".timeline-line").removeClass("blur-and-darken");
                $(".work-history-heading").removeClass("blur-and-darken");
                $(".timeline-instruction-device").removeClass("blur-and-darken");
                $(".end-of-timeline").removeClass("blur-and-darken");
                $(".arrow-down-history-to-skills").removeClass("blur-and-darken");             
            })

        } else if ( $(window).width() >= 768 ) {

             $(".timeline-icon").mouseover(function () {
                $(this).css("visibility", "visible");
                $(this).parent().parent().find(".timeline-info").css("display", "block"); // show current timeline info
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "visible");
                })

                $(".timeline-icon").mouseout(function () {
                $(".timeline-info").css("display", "none"); // hide all timeline infos
            
                })

            }
}
