
   let started = false;
   let pat;
   $("img").click(function(){
    
     pat =  $(this).attr("id");
        $("#"+pat).fadeOut(300).fadeIn(300);
        playSong(pat);
        images(pat);
    // console.log(pat);
    })  

   
    $("#para").click(function(){
        $("#demo").slideDown("slow");
    })

function images(pic){
    document.querySelector("#"+pic).addEventListener("click",function(){
        $(".wish-"+pic).slideDown("slow");
        setTimeout(function(){
            $(".wish-"+pic).slideUp();
        },3000)
    })
}


    function playSong(wisher){
        if(!started){
        let audio = new Audio("audio/"+wisher+".ogg");
        audio.play();
        started=true;
        setTimeout(function(){
            started = false;
        } ,2000);
    }
}





