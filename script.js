var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// test call
// $(document).ready(function(){
//     $.ajax({
//         url: 'https://valorant-api.com/v1/agents/dade69b4-4f5a-8528-247b-219e5a1facd6',
//         method: "GET",
//         dataType : "json",
//     })

//     .done(function(res){Slide 1
//         let status = res.status;
//         let data = JSON.stringify(res);
//         let name = res.data.displayName;
//         $(".test").append(name);
//         $('.illustration').attr('src', res.data.displayIcon)
//         console.log(res.data)
//     })

//     .fail(function(error){
//         alert("echec de la requête: " + JSON.stringify(error));
//     })

    // .always(function(){
    //     alert("Requête effectuée");
    // });

// });