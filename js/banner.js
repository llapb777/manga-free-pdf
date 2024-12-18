const banner = document.querySelector(".banner")

let bannerData = null

;(async () => {
	try {
		bannerData = await fetch("./banner.json")
			.then(response => response.json())
			.then(data => {
				bannerData = data
				renderBanner()
			})
	} catch (err) {}
})()

async function renderBanner() {
	if (bannerData && bannerData.visible === true) {
		banner.setAttribute("href", bannerData.link)
		banner.innerHTML += `<img class="banner__image" src="./img/banner.webp" alt="" />`
		banner.innerHTML += `<h3 style="color: ${bannerData.titleTextColor};${bannerData.sideTitleText}: 0.5rem;max-width: ${bannerData.titleWith}" class="banner__text">${bannerData.text}</h3>`
		const bannerItems = document.querySelector(".banner__items")
		bannerItems.style.cssText += `${bannerData.sideText}: 0.5rem;`
		bannerItems.style.cssText += `${
			bannerData.sideText === "right"
				? "text-align: end;"
				: "text-align: start;"
		}`
		// bannerItems.style.cssText += `max-width: ${bannerData.textWith};`
		document.querySelector(".banner__image").style.cssText += `opacity: ${bannerData.opacityImage}`

		bannerData.projects.forEach(item => {
			bannerItems.innerHTML += `<div style="color: ${bannerData.textColor};" class="banner__item">${item}</div>`
		})
	}
}
