const header = document.querySelector("header ul");
if (header) {
	//create element inside header
	const newElement = document.createElement("div");
	newElement.classList.add("hover");
	header.appendChild(newElement);
}

const navItems = document.querySelectorAll("header a");
if (navItems) {
	const hover = document.querySelector(".hover");
	const activeNavItem = document.querySelector("header a.active");
    reset();

	navItems.forEach((item) => {
		item.addEventListener("mouseover", (e) => {
			hover.style.width = `${e.target.offsetWidth}px`;
			hover.style.left = `${e.target.offsetLeft}px`;
			hover.style.opacity = 1;
            hover.style.height = "8px";
		});
	});
	// hide hover when not hovering navItem
	header.addEventListener("mouseleave", () => {
		reset();
	});

    function reset() {
        hover.style.width = `${activeNavItem.offsetWidth}px`;
        hover.style.left = `${activeNavItem.offsetLeft}px`;
        hover.style.opacity = 0.5;
        hover.style.height = "2px";
    }
}
