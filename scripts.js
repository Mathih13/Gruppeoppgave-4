$("img#frontpageimage").click(function () { 
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

$("#fullfollowbutton").click(function () { 
      if($("#addfollow").attr("src") == "assets/ic_add_circle_outline_black_24px.svg")
        {
        $("#addfollow").attr("src", "assets/ic_check_circle_black_24px.svg");
        }
        else
        {
         $("#addfollow").attr("src", "assets/ic_add_circle_outline_black_24px.svg");
        }
 });


$("img#star").click(function () { 
      if($(this).attr("src") == "assets/star.png")
        {
        $(this).attr("src", "assets/stjerne-merket.png");
        }
        else
        {
         $(this).attr("src", "assets/star.png");
        }
 });








$("#settingsbutton").click(function () { 
      alert("Beklager, denne funksjonen er i ustand.");
 });

$("#fulladdartbutton").click(function () { 
      alert("Beklager, denne funksjonen er i ustand.");
 });
