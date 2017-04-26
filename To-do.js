$("ul").on("click","li",function(){
	if($(this).css("color") === "rgb(0, 0, 0)"){
		$(this).css("color","gray");
		$(this).css("text-decoration","line-through");
}
else{
		$(this).css("color","black")
		$(this).css("text-decoration","none")
}
});
$("ul").on("click",".deleteMe",function(){
	$(this).css("text-decoration","none");
	$(this).parent().fadeOut("slow",function(){
		$(this).remove();
	});
});
$("input").keypress(function(event){
	if(event.which === 13){
			var grabbingTodo = $(this).val();
			$(this).val("");
			$("ul").append("<li><span class='deleteMe'><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+ grabbingTodo +"</li>");
	}
});
$(".fa-plus").on("click",function(){
	$("input").fadeToggle("slow");
});


