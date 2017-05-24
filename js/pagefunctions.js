function sayHello(name) {
		alert("Hello " + name + "!")
}

function showComingSoon() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

/*function whenPageLoaded() {
	$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('#jumbotronbox').offset().top;
    var ht = $('#jumbotronbox').height();
    if(scroll > os + ht){
        $('.nav .navbar-nav').addClass('.blue');
    }
	});
}*/
