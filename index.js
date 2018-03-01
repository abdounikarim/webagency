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