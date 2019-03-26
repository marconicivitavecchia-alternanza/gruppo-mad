var accedi=function(){
    console.log("Hai cliccato su accedi");
    var username = $("#username>input").val();
    console.log("username: "+ username);
    var password = $("#password>input").val();
    console.log("password: "+ password);
    var auth= btoa(username+password);
    console.log("auth: "+auth);

    $.get("http://10.3.0.205:3000/login?auth="+auth,
    accediRisposta);

}

var accediRisposta = function(data){
    console.log(data);
    alert(data);
}

var init  = function(){
    console.log("Ciao, sono Jonny Sins.");
    $("title").text("Marconi Alternanza prova");

    $("#username>input")
    .attr("placeholder","Jonny");
    $("#password>input")
    .attr("placeholder","Password");

    $("#accedi>button").on("click",accedi);
}


$(document).ready(init);