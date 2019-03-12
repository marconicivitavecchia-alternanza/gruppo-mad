var init = function(){
    console.log("Ciao, sono Jonny Sins.");
    $("title").text("Marconi Alternanza prova");

    $("#username>input")
    .attr("placeholder","Jonny");
    $("#password>input")
    .attr("placeholder","Password");
}


$(document).ready(init);