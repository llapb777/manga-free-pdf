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
		banner.innerHTML += `<img class="banner__image" src="./img/banner.jpg" alt="" />`
		banner.innerHTML += `<h3 class="banner__text">${bannerData.text}</h3>`
		const bannerItems = document.querySelector(".banner__items")

		bannerData.projects.forEach(item => {
			bannerItems.innerHTML += `<div class="banner__item">${item}</div>`
		})
	}
}
