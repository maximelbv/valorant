// let swiper = new Swiper(".mySwiper", {
//     observer: true,
//     observerParents: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + "</span>";
//         },
//     },
// });

var swiper = new Swiper(".mySwiper", {
    observer: true,
    observerParents: true,
    spaceBetween: 10,
    slidesPerView: 20,
    freeMode: true,
    watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

$(function(){
    $.ajax({
        url: 'https://valorant-api.com/v1/agents',
        method: "GET",
        dataType : "json",
    })

    .done(function(res){


        for (let i=0; i<= res.data.length; i++) {

            let name = res.data[i].displayName;
            let icon = res.data[i].displayIcon;
            let desc = res.data[i].description;
            let illustration = res.data[i].fullPortrait;
            let background = res.data[i].background;
            let bgColor = res.data[i].backgroundGradientColors[0];
            

            $('.swiper-wrapper').append(`
                <div class="swiper-slide">

                    <div class='infos'>
                        <img 
                            class='displayIcon' 
                            src= ${icon} 
                            alt= ${name}
                        ></img>
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
        }
    })

    .fail(function(error){
        alert("echec de la requête: " + JSON.stringify(error));
    })

    // .always(function(){
    //     alert("Requête effectuée");
    // });

});