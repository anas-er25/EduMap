$("details").on("click", function () {
  $("details[open]").not(this).removeAttr("open");
});

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var destination = $("#destinationInput").val();
    var newSrc =
      "https://maps.google.com/maps?q=" +
      encodeURI(destination) +
      "&output=embed";
    $("#mapFrame").attr("src", newSrc);
  });
});

jQuery(document).ready(function () {
  $("#myModal").on("shown.bs.modal", function () {
    $("#video1").play();
  });
  $("#myModal").on("hidden.bs.modal", function () {
    $("#video1").pause();
  });
});

var videosISTA = [
  {
    numero: 1,
    intitule: "ista ouarzazte",
    nombreFilier: 19,
    videosrc: "https://www.youtube.com/embed/eWI_-D9Z6gc?si=bSQqFOSl55gca8NF",
  },
  {
    numero: 2,
    intitule: "ismc ouarzazate",
    nombreFilier: 20,
    videosrc: "https://www.youtube.com/embed/5y-UTpWitGI?si=-oCvKzUM6LGIg9Bk",
  },
  {
    numero: 3,
    intitule: "ista zagoura",
    nombreFilier: 19,
    videosrc: "https://www.youtube.com/embed/gMbQRiZc8Gc?si=SWOOqBgicfdBo68A",
  },
  {
    numero: 4,
    intitule: "ista agadir",
    nombreFilier: 20,
    videosrc: "https://www.youtube.com/embed/ArQKhmN_AqA?si=6KTOlLqki5lhG2wX",
  },
];


//===========pour fermer les boite modal============
var youtubeIcons = document.getElementsByClassName("youtube-icon");
for (var i = 0; i < youtubeIcons.length; i++) {
  youtubeIcons[i].addEventListener("click", function () {
    $("#myModal").modal("show");
  });
}

var Infos = document.getElementsByClassName("info-icon");

for (var i = 0; i < Infos.length; i++) {
  Infos[i].addEventListener("click", function () {
    $("#my-modal").modal("show");
  });
}
//==========================================================


function Afficher(Table, NumISTA) {
  nouveau = Table.filter((x) => x.numero === NumISTA);
  return nouveau[0].videosrc;
}

function lireVideo(Num) {
  var sourceVideo = Afficher(videosISTA, Num);
  $(".video").attr("src", sourceVideo);
}

$(document).ready(function () {
  $(".closeM2").on("click", function () {
    $("#myModal").modal("hide");
    pauseVideo();
  });

  $(".dismiss-btn").on("click", function () {
    $("#my-modal").modal("hide");
  });

});
