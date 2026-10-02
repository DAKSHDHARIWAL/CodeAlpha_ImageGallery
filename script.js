let currentIndex = 0;

let images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1025/600/400"
];

function openImage(index) {
    currentIndex = index;
    document.getElementById("lightboxImage").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightboxImage").src = images[currentIndex];
}

function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.getElementById("lightboxImage").src = images[currentIndex];
}