$(window).on("scroll", () =>{
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 450) {
        $(".animacion").css("opacity", "1");
        $(".animacion").css("top", "0px");
    }else{
        $(".animacion").css("opacity", "0");
        $(".animacion").css("top", "100px");
    }
})
