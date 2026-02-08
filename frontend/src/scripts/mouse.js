document.addEventListener("mousemove", mouse => {
    Object.assign(
    document.documentElement, {
        style: `
        --move-x: ${(mouse.clientX - window.innerWidth / 2)* -.005}deg;
        --move-y: ${(mouse.clientY - window.innerHeight / 2)* -.01 +30}deg;
        --second-move-x: ${(mouse.clientX - window.innerWidth / 2)* -.2}px;
        `
    }
    )
})