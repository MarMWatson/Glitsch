// document.addEventListener("DOMContentLoaded", () => {
//     const collectionGrid = document.getElementById("caps");

//     // Image Data
//     const images = [
//         { src: "assets/Cap_1.png", alt: "Cap_1 Image" },
//         { src: "assets/Cap_2.png", alt: "Cap_1 Image" },
//         { src: "assets/Cap_3.png", alt: "Cap_1 Image" },
//         { src: "assets/Cap_4.png", alt: "Cap_1 Image" },
//         { src: "assets/Cap_5.png", alt: "Cap_1 Image" },
//         { src: "assets/Cap_7.png", alt: "Cap_1 Image" }
//     ];

//     // Generate Image Elements
//     images.forEach(image => {
//         const imgElement = document.createElement("img");
//         imgElement.src = image.src;
//         imgElement.alt = image.alt;
//         imgElement.classList.add("w-full", "h-auto", "rounded-lg", "shadow-lg", "hover:opacity-80", "transition");

//         // Append to Grid
//         collectionGrid.appendChild(imgElement);
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    const collections = {
        "caps": [
            { src: "assets/Cap_1.png", alt: "Cap 1 Image" },
            { src: "assets/Cap_2.png", alt: "Cap 2 Image" },
            { src: "assets/Cap_3.png", alt: "Cap 3 Image" },
            { src: "assets/Cap_4.png", alt: "Cap 4 Image" },
            { src: "assets/Cap_5.png", alt: "Cap 5 Image" },
            { src: "assets/Cap_7.png", alt: "Cap 7 Image" }
        ],
        "hoodies": [
            { src: "assets/Hoodie_1.png", alt: "Hoodie 1 Image" },
            { src: "assets/Hoodie_2.png", alt: "Hoodie 2 Image" },
            { src: "assets/Hoodie_3.png", alt: "Hoodie 3 Image" },
        ],
        "handbags": [
            { src: "assets/Handbag_1.png", alt: "Handbag 1 Image" },
            { src: "assets/Handbag_2.png", alt: "Handbag 2 Image" },
        ],
        "sunglasses": [
            { src: "assets/Sunglasses_1.png", alt: "Sunglasses 1 Image" },
            { src: "assets/Sunglasses_2.png", alt: "Sunglasses 2 Image" },
            { src: "assets/Sunglasses_3.png", alt: "Sunglasses 3 Image" },
        ],
        "tshirts": [
            { src: "assets/Tshirt_1.png", alt: "Tshirt 1 Image" },
            { src: "assets/Tshirt_2.png", alt: "Tshirt 2 Image" },
            { src: "assets/Tshirt_3.png", alt: "Tshirt 3 Image" },
            { src: "assets/Tshirt_4.png", alt: "Tshirt 4 Image" },
            { src: "assets/Tshirt_5.png", alt: "Tshirt 5 Image" },
            { src: "assets/Tshirt_7.png", alt: "Tshirt 7 Image" }
        ]
    };

    Object.keys(collections).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            collections[sectionId].forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image.src;
                imgElement.alt = image.alt;
                imgElement.classList.add("w-full", "h-auto", "rounded-lg", "shadow-lg", "hover:opacity-80", "transition");

                section.appendChild(imgElement);
            });
        }
    });
});