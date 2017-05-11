$(function(){

// モーダルウィンドウが開くときの処理	
$(".modalOpen").click(function(){
		
	var href = $(this).attr("href");
    $(href).fadeIn();
	$("body").addClass('lock');
	return false;
});

// モーダルウィンドウが閉じるときの処理	
$(".modalClose").click(function(){
	$(this).parents(".modal").fadeOut();
	$("body").removeClass("lock");
	return false;
});  
    
});