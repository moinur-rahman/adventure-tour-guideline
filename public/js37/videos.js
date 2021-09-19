
$(document).ready(function () {
    $(window).scroll(function () { 
        var position = $(document).scrollTop();
        //console.log(position);
        if(position>=348)
        {   $(".video-section-col").addClass("animate__animated animate__slideInUp");
             var element=document.querySelectorAll(".video-section-col");
             var len = element.length;
             $("#video-section-id h1").addClass("animate__animated animate__slideInUp");
             var heading = document.querySelectorAll("#video-section-id h1");
             for(var i=0;i<3;i++)
             {
                heading[i].style.animationDuration=((i+1)*2)+"s";
             }
             
             for(var i=0;i<len;i++)
        {
           element[i].style.animationDuration = ((i+1)*0.3)+"s";
        }     
        }
    });
    
     
    
    $(".video-link img").click(function(){
        var str= $(this).attr("src");
        str=str.slice(27,38);
        str="https://www.youtube.com/embed/"+str;
       //alert(str);
        $("iframe").attr("src", str);
    
     
    });
    
    $(".video-link .play-btn").click(function(){
        var str= $(this).parent().children("img").attr("src");
        str=str.slice(27,38);
        str="https://www.youtube.com/embed/"+str;
        //alert(str);
        $("iframe").attr("src", str);
    
    
    });
    
    
    $(".video-link").magnificPopup({
       type:'inline',
       midClick:true
    });
    
});
