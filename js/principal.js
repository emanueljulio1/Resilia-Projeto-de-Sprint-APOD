let url           = 'https://api.nasa.gov/planetary/apod?api_key=fxg9IYO49VMSbRYC6iVvBBvNoYr30l3B2pVBinVc';


function s(){
    let d         = $("#di").val()
   
    console.log(d)
    $.ajax({url   : url + "&date="+ d,
    success: (r)=>{
        m(r)
    },
    error: ()=>{
        alert("Esta imagem ainda não foi postada pela Nasa. Aguarde este dia chegar.")
    }
    })
}
function m(obj){
    $("#t").html(obj.title);
    $("#e").html(obj.explanation);
    if (obj.media_type == "image"){
        $(".c").css('background-image', 'url('+obj.url+')');
        $("iframe").attr("src", "")
    }
    else{
        console.log("video!",obj.url)
        $('.c').css('background-image', 'url("")');
        $("iframe").attr("src", obj.url)
    }

}
document.addEventListener("DOMContentLoaded", ()=>{s()})