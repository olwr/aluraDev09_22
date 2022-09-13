// initial interface //
var comicCovers = ["imgs/Dark Knights of Steel-000.jpg", "imgs/Hawkeye-000.jpg", "imgs/Red Hood and the Outlaws - Rebirth-000.jpg", "imgs/Tales of Suspense - Hawkeye & The Winter Soldier-000.jpg", "imgs/Batman- Under the Red Hood-000.jpg", "imgs/Black Widow 002-000.jpg", "imgs/Green Arrow - The Rebirth Deluxe Edition - Book 1-009.jpg", "imgs/Young Avengers-000.jpg", "imgs/Batman - Kings of Fear-000.jpg", "imgs/Hawkeye vs. Deadpool-000.jpg", "imgs/Batman - Red Hood - The Lost Days-000.jpg", "imgs/Black Widow (2020-) 014-000.jpg", "imgs/Green Arrow - Stranded (2022)-000.jpg", "imgs/Runaways & Young Avengers - Civil War-001.jpg"];
var trailers = ["https://www.youtube.com/watch?v=WspmgrmEgn4", "https://www.youtube.com/watch?v=ssj0P0uY08U", "https://www.youtube.com/watch?v=wwpHt6q4_I4", "https://youtu.be/6nMDnHaAY8U", "https://www.youtube.com/watch?v=T6DBkcO4Fds", "https://www.youtube.com/watch?v=kS4uWz4lGbA", "https://www.youtube.com/watch?v=RIFY9AxFgw4", "https://www.youtube.com/watch?v=vYqdheEUFpo", "https://www.youtube.com/watch?v=100zoWKcd9w", "https://www.youtube.com/watch?v=Ge6OX7PNkDQ", "https://www.youtube.com/watch?v=hU4CGMsotEo", "https://www.youtube.com/watch?v=T1mkG14RxtQ", "https://www.youtube.com/watch?v=wCgsFm0vUjw", "https://www.youtube.com/watch?v=F6kKZnQXmGQ"]
var publishers = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
var i = 0;
var blockDC = document.querySelector("#block-dc");
var blockMarvel = document.querySelector("#block-marvel");

render()

var publisher = document.querySelector("select").value;
document.querySelector("select") = function renderPublisher() {
    publisher = document.querySelector("select").value;
    return publisher;
}

// add new comics to the list // 
//document.querySelector(".btn-submit") = function addOnList() {
//  var newCover = document.querySelector("#comic-cover");
// var newTrailer = document.querySelector("#comic-url");

//  if ([newCover.value, newTrailer.value].every((elementValue) => elementValue != "")) {
//      if (publisher == "dc") {
//         publisher.push(0);
//      } else {
//          publisher.push(1);
//     }

//     comicCovers.push(newCover.value);
//      trailers.push(newTrailer.value);
//      newCover.value = "";
//      newTrailer.value = "";
//      render()
//  }
//}

// render initial comics //
function render() {
    for (i; i < comicCovers.length; i++) {
        // creates the comic covers using js var //
        var comicCover = document.createElement("img");
        comicCover.setAttribute("src", `${comicCovers[i]}`);

        // creates trailer button //
        var trailerButton = document.createElement("button");

        //  //
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        container.appendChild(trailerButton);
        container.appendChild(comicCover);
        blockDC.appendChild(container);
        trailerButton.appendChild(document.createTextNode("Trailer"));
        trailerButton.setAttribute("class", "trailer-button");
        trailerButton.setAttribute("onclick", `openTrailer("${trailers[i]}")`);

        if (publishers[i] == 0) {
            blockDC.appendChild(container);
        } else {
            blockMarvel.appendChild(container);
        }
    }
}

// trailer pop up //
function openTrailer(trailer) {
    var trailerPopUp = trailer.replace("watch?v=", "embed/");
    trailerPopUp = trailerPopUp.split("&");
    swal.fire({
        html: `<iframe width="560" height="315" src="${trailerPopUp[0]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        width: "fit-content",
        background: "#343a40",
        confirmButtomColor: "#dc3545",
    })
}
