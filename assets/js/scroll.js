   // Cache our vars for the fixed sidebar on scroll
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
           $sidebar.removeClass('sticky');
       }
       // Scroll is past the original position of sidebar
       else if (windowScrollTop >= sidebarTop) {
           // Otherwise add the sticky if $sidebar doesnt have it already!
           if (!$sidebar.hasClass('sticky')) {
               $sidebar.addClass('sticky');
            //    document.getElementsByClassName("zoomContainer").style.width = "460px";
           }
       }
   }

   $(document).ready(function(){



    $(window).scroll(function(){

        if(window.matchMedia("(max-width: 1200px)") && window.matchMedia("(max-width: 992px)"))
        {
            if($(this).scrollTop() > 1100){

                $("#fixed-image").fadeOut();
    
            } else{
    
                $("#fixed-image").fadeIn(); 
    
            }
        }

        

    })})

    var div = document.getElementById("hidden-random");

    function getRandomNumber() {
        var Number = '0';
         for (var i = 0; i < 9; i++ ) {
            Number = Math.floor(Math.random() *100);
         }
         return Number;
    }

    function changeNumber(){
        div.innerHTML= getRandomNumber();
    }
    setInterval(changeNumber,2000);