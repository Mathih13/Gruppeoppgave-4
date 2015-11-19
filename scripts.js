$("img#frontpageimage1").click(function () { 
      if($(this).attr("src") == "assets/frontpage%20image%201.png")
        {
        $(this).attr("src", "assets/Bildeavmannmedtekstfinal.png");
        }
        else
        {
         $(this).attr("src", "assets/frontpage%20image%201.png");
        }
    });


$("#recovery").click(function() {
        alert("Hei!\n\nDenne funksjonen er desverre skrudd av under prototyping.");
});

$("img#addfollow").click(function () { 
      if($("#addfollow").attr("src") == "assets/ic_add_circle_outline_black_24px.svg")
        {
        $("#addfollow").attr("src", "assets/ic_check_circle_black_24px.svg");
        document.getElementById("follow").innerHTML = "Følger";
        document.getElementById("follow").style.marginRight="-92px";
        }
        else
        {
         $("#addfollow").attr("src", "assets/ic_add_circle_outline_black_24px.svg");
         document.getElementById("follow").innerHTML = "Følg";
         document.getElementById("follow").style.marginRight="-80px";    
        }
 });


$("img#like").click(function () { 
      if($(this).attr("src") == "assets/ic_favorite_border_white_24px.svg")
        {
        $(this).attr("src", "assets/ic_favorite_white_24px.svg");
        }
        else
        {
         $(this).attr("src", "assets/ic_favorite_border_white_24px.svg");
        }
 });




$("img#interactbutton").click(function () { 
      alert("Beklager, denne funksjonen er i ustand.");
 });


$("#search").click(function () { 
      alert("Beklager, denne funksjonen er i ustand.");
 });

$("#sort").click(function () { 
      alert("Beklager, denne funksjonen er i ustand.");
 });


$("img#settingsimage").click(function () { 
      alert("Beklager, denne funksjonen er i ustand.");
 });

$("img#addart").click(function () { 
      alert("Beklager, denne funksjonen er i ustand.");
 });
