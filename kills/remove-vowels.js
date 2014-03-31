$("*").each(function()
{
    if($(this).children().length == 0) {
        $(this).text($(this).text().replace(/[aeiou]/gi, ''));
    }
});