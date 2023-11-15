var window_x;

// adjusts size whenever the viewport changes
function changeSize() {
    window_x = window.outerWidth;

    if (window_x <= 600) {
        document.getElementById("container_p1").style.flexDirection = "column";
        document.getElementById("container_p1").style.justifyContent = "center";
    } else {
        document.getElementById("container_p1").style.flexDirection = "row";
    }
}

changeSize()
window.addEventListener("resize", changeSize);