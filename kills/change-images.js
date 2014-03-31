$("img").each(function()
{
    //put your image urls here
    var newImages = [
            "http://placekitten.com/g/500/500", 
            "http://placekitten.com/g/400/400", 
            "http://placekitten.com/g/300/300"
            ];
    
    $(this).attr("src", newImages[Math.floor(Math.random()*newImages.length)]);
});