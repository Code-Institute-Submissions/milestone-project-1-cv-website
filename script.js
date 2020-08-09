// Code modified from Will Chow's original at: https://jsfiddle.net/wilchow/4hzenxkh/
// Also used the first line of @dynamyc-2's code from CSS Tricks: https://css-tricks.com/forums/topic/jquery-window-width-condition/


// On screens smaller than 768 - do this: 
//BUT ALSO: Need to have this NOT apply to the last icon on the timeline - the sun. How????

//The code below works EXCEPT when resizing the windows. Then it gets weird. - Need to fix that somehow?

$(document).ready(function () {

     if ( $(window).width() < 768 ) {

            $(".timeline-icon").mouseover(function () {
                console.log("window is small");
                console.log($(this))
                // $(".timeline-info").css("display", "none"); // hide all timeline-infos
                $(this).parent().parent().find(".timeline-info").css("display", "block"); // show current timeline info
                $(this).css("visibility", "hidden");
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "hidden"); //this would be better with z-index but can't seem to make that work? 
            
            })
            $(".timeline-icon").mouseout(function () {
                $(".timeline-info").css("display", "none"); // hide all timeline infos
                $(this).css("visibility", "visible");
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "visible"); //this would be better with z-index but can't seem to make that work? 
                
            })

        } else if ( $(window).width() >= 768 ) {
        //On large screens do this: 
             $(".timeline-icon").mouseover(function () {

                console.log("window is large");
                console.log($(this))
                // $(".timeline-info").css("display", "none"); // hide all timeline-info
                $(this).parent().parent().find(".timeline-info").css("display", "block"); // show current timeline info
           
                })

                $(".timeline-icon").mouseout(function () {
                $(".timeline-info").css("display", "none"); // hide all timeline infos
            
                })

            }
});




