let mangaList = []
let mangaResult = mangaList

const root = document.querySelector(".manga-list")
const main = document.querySelector(".main")
const search = document.querySelector(".header__search")
const filter = document.querySelector("#filter")
let currentItem = null

const render = () => {
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
          <button id=${item.id} class="item__link" title='${item.name}'>${item.name.slice(0, 30)} ${item.name.length > 30 ? "..." : ""}</button>
        </div>`
		})
		const btnItems = document.querySelectorAll(".item__tg-link")
	btnItems.forEach(item => {
		item.addEventListener("click", e => {
			currentItem = Number(e.target.id)
			renderCurrentItem()
		})
	})
	const btnsLink = document.querySelectorAll(".item__link")
	btnsLink.forEach(item => {
		item.addEventListener("click", e => {
			currentItem = Number(e.target.id)
			renderCurrentItem()
		})
	})
	} else {
		root.classList.add("manga-list__empty")
		root.innerHTML =
			"<div class='empty'><img class='empty__img' src='./img/empty.png' alt='empty'/><div>Ничего не найдено</div></div>"
	}
}

function renderCurrentItem() {
	if (currentItem !== null) {
		const item = mangaList.find(f => f.id === currentItem)
		main.innerHTML = ""
		main.innerHTML = `<div class="container">
		<div class="current-item">
			<div class="current-item__left">
				<img class="current-item__img" src="${item.imgLink}" alt="Image" />
				<div class="social">
					<a class="social__link" target="_blank" href="${item.link}">
					<img class="social__img" src="./img/vk.ico" alt="vk">
					Скачать эту мангу в вк
					</a>
					<a class="social__link" target="_blank" href="${item.tgLink}">
					<img class="social__img" src="./img/tg.png" alt="telegram">
					Скачать эту мангу в телеграмм
					</a>
				</div>
			</div>
			<div class="current-item__info">
				<h2 class="info__name">${item.name}</h2>
				<p class="info__description"><span>Описание:</span> ${item.description}</p>
				<p class="info__type"><span>Тип:</span> ${item.type}</p>
				<p class="info__year" ><span>Год релиза</span>: ${item.yearOfRelease}</p>
				<p class="info__status"><span>Статус:</span> ${item.status}</p>
				<p class="info__genre">Жанры:</p>
				<p class="info__genres">${item.genres}</p>
			</div>
		</div>
		</div>`
	}
}
;(async () => {
	await fetch("./data.json")
		.then(response => response.json())
		.then(data => {
			mangaList = data
			mangaResult = mangaList
		})
	render()
})()

filter.addEventListener("change", e => {
	if (e.target.value === "") {
		mangaResult = mangaList
	} else {
		mangaResult = mangaList.filter(f => f.type === e.target.value)
	}
	render()
})

search.addEventListener("keyup", e => {
	mangaResult = mangaList.filter(f =>
		f.name.toLowerCase().includes(search.value.toLowerCase())
	)
	render()
})
