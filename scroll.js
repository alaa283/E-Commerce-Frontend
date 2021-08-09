 // Cache our vars for the fixed sidebar on scroll
 //code-feature
 var $sidebar = $('#fixed-image');
 // Get & Store the original top of our #sidebar-nav so we can test against it
 var sidebarTop = $sidebar.position().top;
 // Edit the `- 10` to control when it should disappear when the footer is hit.
 var blogHeight = $('#code-feature').outerHeight() - 10;

 // Add the function below to the scroll event
 $(window).scroll(fixSidebarOnScroll);

 // On window scroll, this fn is called (binded above)
 function fixSidebarOnScroll() {
     // Cache our scroll top position (our current scroll position)
     var windowScrollTop = $(window).scrollTop();

     // Add or remove our sticky class on these conditions
     if (windowScrollTop >= blogHeight || windowScrollTop <= sidebarTop) {
         // Remove when the scroll is greater than our #content.OuterHeight()
         // or when our sticky scroll is above the original position of the sidebar
        //  $sidebar.removeClass('sticky');

        document.getElementById("fixed-image").style.position = "static";
     }
     // Scroll is past the original position of sidebar
     else if (windowScrollTop >= sidebarTop) {
         // Otherwise add the sticky if $sidebar doesnt have it already!
         if (!$sidebar.hasClass('fixed-image')) {
            //  $sidebar.addClass('sticky');

            document.getElementById("fixed-image").style.position = "fixed";
            document.getElementById("fixed-image").style.top = "5px";
            document.getElementById("zoomWindowContainer").style.width = "460px";
            //  document.getElementById("product-details-img").style.position = "fixed";
            //  document.getElementById("code-feature").style.position = "absolute";
        }
            else if(window.matchMedia("(max-width: 768px)"))
            {
                
            }
     }
     else if(window.matchMedia("(max-width: 700px)"))
         {
            // document.getElementById("fixed-image").style.position = "static";
            document.getElementById("code-feature").style.position = "static";
         }
 }

$(document).ready(function(){



    $(window).scroll(function(){

        if($(this).scrollTop() > 150){

            $("#fixed-image").fadeOut();

         }
         else if($(this).scrollTop())
        {

            $("#fixed-image").fadeIn(); 
            document.getElementById("zoomWindowContainer").style.width = "250px";

            if(window.matchMedia("(max-width: 768px)"))
                {
                    // document.getElementById("fixed-image").style.position = "static";
                    document.getElementById("zoomWindowContainer").style.width = "80%";
                }

        }

    })})
