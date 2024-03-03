// function changeImage(x, image) {
//     if (x == 1) {
//         image.src = "img/fur.png";
//     } else if (x == 2) {
//         image.src = "img/earfur.png";
//     }
// };

const hvrimg = document.getElementsByClassName("hvrimg");
for (let i = 0; i < hvrimg.length; i++) {
    hvrimg[i].dataset.src = hvrimg[i].src;
    hvrimg[i].addEventListener("mouseover", (event) => {
        // console.log(event.target.dataset);
        event.target.src = event.target.dataset.hvr;
    });
    hvrimg[i].addEventListener("mouseout", (event) => {
        // console.log(event.target.dataset.src);
        event.target.src = event.target.dataset.src;
    });
};
