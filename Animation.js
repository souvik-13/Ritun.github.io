function Toogle() {
    // const animation = document.getAnimations('container');
    const elem1 = document.getElementById("container");
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    // elem1.style.animationPlayState
    // box1.style.animationPlayState 
    // box2.style.animationPlayState 
    // elem1.style.animationPlayState = 
    //     elem1.style.animationPlayState == "running" ? "paused" : "running";
    // box1.style.animationPlayState = 
    //     box1.style.animationPlayState == "running" ? "paused" : "running";
    // box2.style.animationPlayState = 
    //     box2.style.animationPlayState == "running" ? "paused" : "running";

    if (
        elem1.style.animationPlayState == "running"

    ) {
        elem1.style.animationPlayState = "paused"

    }
    else {
        elem1.style.animationPlayState = "running"

    }



    if (
        box1.style.animationPlayState == "running"
    ) {
        box1.style.animationPlayState = "paused"

    }
    else {
        box1.style.animationPlayState = "running"
    }



    if (box2.style.animationPlayState == "running") {
        box2.style.animationPlayState = "paused"
    }
    else {
        box2.style.animationPlayState = "running"

    }
}