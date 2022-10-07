var swiper = new Swiper(".mySwiper", {
  observer: true,
  observerParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$( "span" ).hover(function() {
  $( "p" ).show( "slow" ).delay(300).hide();
  $("h1").hide("slow");
});

$(function () {
  $.ajax({
    url: "https://valorant-api.com/v1/weapons",
    method: "GET",
    dataType: "json",
  })

    .done(function (res) {
      for (let i = 0; i <= res.data.length; i++) {
        let id = res.data[i].uuid;
        let name = res.data[i].displayName;
        let icon = res.data[i].displayIcon;
        let illustration = res.data[i].fullPortrait;
        let background = res.data[i].background;

        $(".swiper-wrapper").append(`
              <div class="swiper-slide ${id}">
              


                  <div class='illustration'>
                  <h2 class='nameWeapons'>${name}</h2> 
                  <img
                  class='displayIllustrationWeapons'
                          src= ${icon} 
                      ></img>
                  </div>
              </div>`);
      }
    })

    .fail(function (error) {
      alert("echec de la requête: " + JSON.stringify(error));
    });

  // .always(function(){
  //     alert("Requête effectuée");
  // });
});
