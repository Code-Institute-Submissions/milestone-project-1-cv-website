// Code modified from Will Chow's original at: https://jsfiddle.net/wilchow/4hzenxkh/
// Also used the first line of @dynamyc-2's code from CSS Tricks: https://css-tricks.com/forums/topic/jquery-window-width-condition/


// On screens smaller than 768 - do this: 
//BUT ALSO: Need to have this NOT apply to the last icon on the timeline - the sun. How????


$(document).ready(function () {

     if ( $(window).width() < 768 ) {

            $(".timeline-icon").mouseover(function () {
    
                $(this).parent().parent().find(".timeline-info").css("display", "block"); // show current ('this') timeline info
                $(this).css("visibility", "hidden");
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "hidden"); //this would be better with z-index but can't seem to make that work? 
            
            })
            $(".timeline-icon").mouseout(function () {
                $(".timeline-info").css("display", "none"); // hide the timeline info
                $(this).css("visibility", "visible");
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "visible"); 
                
            })

        } else if ( $(window).width() >= 768 ) {

        //On large screens do this: 
             $(".timeline-icon").mouseover(function () {
                $(this).parent().parent().find(".timeline-info").css("display", "block"); // show current timeline info
                })

                $(".timeline-icon").mouseout(function () {
                $(".timeline-info").css("display", "none"); // hide the timeline info
            
                })

            }
});

$(window).resize(function () {

     if ( $(window).width() < 768 ) {
         console.log("window went under 768")

            $(".timeline-icon").mouseover(function () {
                
                $(this).parent().parent().find(".timeline-info").css("display", "block"); // show current timeline info
                $(this).css("visibility", "hidden");
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "hidden");  
            })

            $(".timeline-icon").mouseout(function () {
                $(".timeline-info").css("display", "none"); // hide all timeline infos
                $(this).css("visibility", "visible");
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "visible");              
            })

        } else if ( $(window).width() >= 768 ) {
            console.log("window went over 768")
            //On large screens do this: 

             $(".timeline-icon").mouseover(function () {
                $(this).css("visibility", "visible");
                $(this).parent().parent().find(".timeline-info").css("display", "block"); // show current timeline info
                $(this).parent().parent().next().find(".timeline-line").css("visibility", "visible");
                })

                $(".timeline-icon").mouseout(function () {
                $(".timeline-info").css("display", "none"); // hide all timeline infos
            
                })

            }
});

//There must be a shorter way to write the above. Something like "When the document is ready OR when the window is resized - do all this:"

//Also - resizing to small is fine on mobile, but in small windows on mouse hover on desktop there is an annoying flickering effect. Don't know why. 

