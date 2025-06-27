let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > lastScrollY) {
        // 向下滚动，隐藏 header
        header.classList.add("hidden");
    } else {
        // 向上滚动，显示 header
        header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
});
