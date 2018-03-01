$( document ).ready(function() {

    //On masque le menu par défaut

    //Lors du clic sur le bouton, on affiche ou masque le menu
    $('#burger').click(function () {
        $('ul').slideToggle();
    });

    //Scrollspy fluide
    $('ul a').on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, function(){
            window.location.hash = hash;
        });
        $("li.active").removeClass("active");
        $(this).parent().addClass('active');
    });
    
    //Slider
    $(".accueil-angle").click(function () {
        $('body').off("click", ".accueil-angle");
        var bg1 = $("#accueil").attr('class');
        var opacity = $("#accueil").css('opacity');
        for(var i = 0; i <= opacity; i = i + 0.50)
        {
            $("#accueil").fadeTo(400, i, function () {
                if(bg1 === "bg1"){
                    $("#accueil").css('background-image', "url(images/slider/bg2.jpg)");
                    $("#accueil").toggleClass();
                }
                else{
                    $("#accueil").css('background-image', "url(images/slider/bg1.jpg)");
                    $("#accueil").toggleClass();
                }
            });
            console.log(i);
        }
        console.log('fini');
        $('body').on('click', ".accueil-angle");
    });
    
    //Menu projets
    
    $('#pm_all_works').click(function(){
        $('#portfolio_menu li').removeClass();
        $('#portfolio_menu li').addClass('other_choices');
        $(this).removeClass()
        $(this).addClass('active_choice');
        $(".project").fadeOut(800);
        $(".project").fadeIn(800);
    });
    
    $('#pm_creative').click(function(){
        $('#portfolio_menu li').removeClass();
        $('#portfolio_menu li').addClass('other_choices');
        $(this).removeClass()
        $(this).addClass('active_choice');
        $(".project").fadeOut(800);
        $(".creative").fadeIn(800);
    });
    
    $('#pm_corporate').click(function(){
        $('#portfolio_menu li').removeClass();
        $('#portfolio_menu li').addClass('other_choices');
        $(this).removeClass()
        $(this).addClass('active_choice');
        $(".project").fadeOut(800);
        $(".corporate").fadeIn(800);
    });
    
    $('#pm_portfolio').click(function(){
        $('#portfolio_menu li').removeClass();
        $('#portfolio_menu li').addClass('other_choices');
        $(this).removeClass()
        $(this).addClass('active_choice');
        $(".project").fadeOut(800);
        $(".portfolio").fadeIn(800);
    });        
});