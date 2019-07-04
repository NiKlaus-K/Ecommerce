$(document).ready(function(){ 
    $("nav div ul li").click(function(){
		
		var index = $("nav div ul li").index(this);
		$("nav div ul li").removeClass("active")
		$("nav div ul li:eq(index)").addClass("active");
		console.log(index);
	})
}) 