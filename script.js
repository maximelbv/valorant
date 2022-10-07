var swiper = new Swiper(".mySwiper", {
    observer: true,
    observerParents: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$( "span" ).hover(function() {
    $( "p" ).show( "slow" );
    $("h1").hide("slow");
  });

$(function(){
    $.ajax({
        url: 'https://valorant-api.com/v1/agents?isPlayableCharacter=true',
        method: "GET",
        dataType : "json",
    })

    .done(function(res){


        for (let i=0; i<= res.data.length; i++) {

            let id = res.data[i].uuid;
            let name = res.data[i].displayName;
            let icon = res.data[i].displayIcon;
            let desc = res.data[i].description;
            let illustration = res.data[i].fullPortrait;
            let background = res.data[i].background;
            let spell1Description = res.data[i].abilities[0].description;
            let spell2Description = res.data[i].abilities[1].description;
            let spell3Description = res.data[i].abilities[2].description;
            let spell4Description = res.data[i].abilities[3].description;
            let spell1Img = res.data[i].abilities[0].displayIcon;
            let spell2Img = res.data[i].abilities[1].displayIcon;
            let spell3Img = res.data[i].abilities[2].displayIcon;
            let spell4Img = res.data[i].abilities[3].displayIcon;

            $('.swiper-wrapper').append(`
                <div class="swiper-slide ${id}">
                
                    <div class='infos'>
                        <p class='name'>${name}</p>
                        <p class='desc'>${desc}</p>
                        <div class="spell">
                            <div class="spellimg">
                                <img id="img1" dataId=${i} src= ${spell1Img}></img>
                                <img id="img2" src= ${spell2Img}></img>
                                <img id="img3" src= ${spell3Img}></img>
                                <img id="img4" src= ${spell4Img}></img>
                            </div>
                        <p id="p1" >${spell1Description}</p>
                    </div>
                    </div>

                    <div class='illustration'>

                    <img
                    class='displayIllustration'
                            src= ${illustration} 
                            alt= ${name}
                        ></img>
                        
                        <img
                            class='displayBackground'
                            src= ${background} 
                            alt= ${name}
                        ></img>

                    </div>

                </div>`);

                $("#img1").click(function() {
                    $("#p1").text(res.data[0].abilities[0].description);
                });
                $("#img2").click(function() {
                    $("#p1").text(res.data[0].abilities[1].description);
                });
                $("#img3").click(function() {
                    $("#p1").text(res.data[0].abilities[2].description);
                });
                $("#img4").click(function() {
                    $("#p1").text(res.data[0].abilities[3].description);
                });
                    }
    })

    .fail(function(error){
        alert("echec de la requête: " + JSON.stringify(error));
    })

    // .always(function(){
    //     alert("Requête effectuée");
    // });

});