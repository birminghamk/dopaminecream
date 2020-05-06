$(function() {
	//only loads first category of images
	function onPageLoad() {
		$(".graphic-design").fadeIn('slow');
		$(".cocktailIllustration").hide();
		$(".watercolor").hide();
		$(".colorImages").hide();
		$(".blackandwhite").hide();
		$(".lettering").hide();
		$(".mixed-media").hide();
		$(".geometric-design").hide();
	}

	onPageLoad();

	//nav control for art images
	function artNav () {
		$("#cocktails").click(function(){
			$(".cocktailIllustration").fadeIn('slow');
			$(".colorImages").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
		  });

		  $("#graphicDesign").click(function(){
			$(".graphic-design").fadeIn('slow');
			$(".cocktailIllustration").hide();
			$(".colorImages").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
		  });

		  $("#colorStudies").click(function(){
			$(".colorImages").fadeIn('slow');
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
		  });

		  $("#blackAndwhite").click(function(){
			$(".blackandwhite").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();

		  });
		  $("#Lettering").click(function(){
			$(".lettering").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();

		  });
		  $("#mixedMedia").click(function(){
			$(".mixed-media").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();

		  });
		  $("#Watercolor").click(function(){
			$(".watercolor").fadeIn('slow');
			$(".mixed-media").hide();
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();

		  });
		  $("#geometricDesign").click(function(){
			$(".geometric-design").fadeIn('slow');
			$(".watercolor").hide();
			$(".mixed-media").hide();
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".graphic-design").hide();

		  });
	}

	artNav();
});
