var swiper = new Swiper(".mySwiper", {
    observer: true,
    observerParents: true,
});

$(function(){
    $.ajax({
        url: 'https://valorant-api.com/v1/agents',
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
            let bgColor = `#${res.data[i].backgroundGradientColors[0]}`;

            console.log(bgColor);
                        
            $('.swiper-wrapper').append(`
                <div class="swiper-slide ${id}">
                
                    <div class='infos'>
                        <p class='name'>${name}</p>
                        <p class='desc'>${desc}</p>
                        <div class='spells'></div>
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
                $(`.${id}`).css('background', `${bgColor} !important`);
                    }
    })

    .fail(function(error){
        alert("echec de la requête: " + JSON.stringify(error));
    })

    // .always(function(){
    //     alert("Requête effectuée");
    // });

});