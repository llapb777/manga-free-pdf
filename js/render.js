import renderCurrentItem from "./renderCurrentItem.js"

export const render = (mangaList, mangaResult, currentItem) => {
	const root = document.querySelector(".manga-list")

	root.classList.remove("manga-list__empty")
	root.innerHTML = ""
	if (mangaResult.length) {
		mangaResult.forEach(item => {
			root.innerHTML += `<div class="item">
          <button id=${item.id} class="item__tg-link" title="${
				item.name
			}" target="_blank" ><img class="item__image" title='${item.name}' src="${
				item.imgLink
			}" alt="${item.name}"></button>
          <button id=${item.id} class="item__link" title='${
				item.name
			}'>${item.name.slice(0, 30)} ${
				item.name.length > 30 ? "..." : ""
			}</button>
        </div>`
		})
		const btnItems = document.querySelectorAll(".item__tg-link")
		btnItems.forEach(item => {
			item.addEventListener("click", e => {
				currentItem = Number(e.target.id)
				renderCurrentItem(mangaList, currentItem)
			})
		})
		const btnsLink = document.querySelectorAll(".item__link")
		btnsLink.forEach(item => {
			item.addEventListener("click", e => {
				currentItem = Number(e.target.id)
				renderCurrentItem(mangaList, currentItem)
			})
		})
	} else {
		root.classList.add("manga-list__empty")
		root.innerHTML =
			"<div class='empty'><img class='empty__img' src='./img/empty.png' alt='empty'/><div>Ничего не найдено</div></div>"
	}
}
