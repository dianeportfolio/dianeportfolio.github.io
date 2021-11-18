/* -----------------------------------------------
					Js Main
--------------------------------------------------

 
----------------------------------- */


(function ($) {
    "use strict";


    /* -----------------------------------
                Menu
    ----------------------------------- */
    function menu() {
        "use strict";
        $("#menuToggle").on("click", function () {
            $(".header-left").toggleClass("open");
            $(".main").toggleClass("open");
        });
        $(".cross").on("click", function () {
            $(".header-left").removeClass("open"); 
        });
        $(".nav-link").on("click", function () {
            $(".header-left").removeClass("open");
        });
    }



    /* -----------------------------------
	      All functions
    -----------------------------------*/

    // Document on Ready
    $(document).on("ready", function () {
        "use strict";
        menu();
    });



})(jQuery);