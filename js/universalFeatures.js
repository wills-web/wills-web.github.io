function getUniversalFeatures(pageToFetch) {
	
	document.getElementById("navbarBox").innerHTML = 
	'<nav class="navbar navbar-default navbar-fixed-top" role="navigation">' +
		'<div class="container-fluid" id="navigationbar">' +
			'<!-- Brand and toggle get grouped for better mobile display -->' +
			'<div class="navbar-header">' +
				'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
					'<span class="sr-only">Toggle navigation</span>' +
					'<span class="icon-bar"></span>' +
					'<span class="icon-bar"></span>' +
					'<span class="icon-bar"></span>' +
				'</button>' +
			'</div>' +

			'<!-- Collect the nav links, forms, and other content for toggling -->' +
			'<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
				'<div class="main-container"> ' +
					'<div class="fixer-container"> ' +
					  '<ul class="nav navbar-nav">' +
						'<li id="homeButton"><a href="http://wills-web.com/index.html">Home</a></li>' +
						'<li id="aboutButton"><a href="http://wills-web.com/about.html">About</a></li>' +
						'<li id="educationButton"><a onclick="showComingSoon()">Education</a></li>' +
						'<li id="esafeButton"><a onclick="showComingSoon()">E-Safety</a></li>' +
						'<li id="computingButton"><a href="http://wills-web.com/articles.html">Computing Articles</a></li>' +
						'<li id="downloadsButton"><a onclick="showComingSoon()">Downloads</a></li>' +
						'<li id="contactButton"><a href="http://wills-web.com/contact.html">Contact</a></li>' +
					  '</ul>' +
					'</div>' +
				'</div>' +
			'</div><!-- /.navbar-collapse -->' +
		'</div><!-- /.container-fluid -->' +
	'</nav>'+
	'<!-- Jumbotron block -->'+
	'<div class="jumbotron-container"> <!-- Container for the jumbotron header! -->'+
		'<div class="jumbotron jumbotron-fluid" id="jumbotronbox">'+
		  '<div class="image-container">'+
			'<center><img src="http://wills-web.com/media/images/logos/mainheader.png" alt="Will\'s World logo!" id="headerimage"></center>'+
		  '</div>'+
		'</div>'+
	'</div>';
	
	if (pageToFetch == 'home') {
		document.getElementById("homeButton").className += "active";
	}
	else if (pageToFetch == 'about') {
		document.getElementById("aboutButton").className += "active";
	}
	else if (pageToFetch == 'education') {
		document.getElementById("educationButton").className += "active";
	}
	else if (pageToFetch == 'esafe') {
		document.getElementById("esafeButton").className += "active";
	}
	else if (pageToFetch == 'computing') {
		document.getElementById("computingButton").className += "active";
	}
	else if (pageToFetch == 'downloads') {
		document.getElementById("downloadsButton").className += "active";
	}
	else if (pageToFetch == 'contact') {
		document.getElementById("contactButton").className += "active";
	}
	
}
