var swiper = new Swiper(".mySwiper", {
    observer: true,
    observerParents: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
            console.log(res.data[i].displayName)
            $('.swiper-wrapper').append(`
                <div class="swiper-slide">
                    <p class='name'>${res.data[i].displayName}</p>
                    <img 
                        class='displayIcon' 
                        src= ${res.data[i].displayIcon} 
                        alt= ${res.data[i].displayName}
                    ></img>
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