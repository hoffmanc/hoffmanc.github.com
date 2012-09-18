$(function() {
    elem = "div.textile";
    var converter = new Markdown.Converter();
    $(elem).html(converter.makeHtml($(elem).html())).fadeIn('slow');
});
