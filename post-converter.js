document.addEventListener("DOMContentLoaded", function(event) {
    var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
    var latestPost = 'posts/latest.md'

    function loadFile() {
        reader.open('get', latestPost, true); 
        reader.onreadystatechange = displayContents;
        reader.send(null);
    }

    function displayContents() {
        if(reader.readyState==4) {
            var mdText = reader.responseText;
            console.log(mdText);
            var converter = new showdown.Converter(),
            html      = converter.makeHtml(mdText);

            console.log(html);

            document.getElementById("latest-post").innerHTML = html + document.getElementById("latest-post").innerHTML;
        }
    }

    loadFile();
    displayContents();
});