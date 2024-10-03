import { render } from "./render.js"

let mangaList = []
let mangaResult = mangaList

const search = document.querySelector(".header__search")
const filterType = document.querySelector("#filter-type")
const filterStatus = document.querySelector("#filter-status")

let currentItem = null
const filter = { type: "", status: "" }

;(async () => {
	await fetch("./data.json")
		.then(response => response.json())
		.then(data => {
			mangaList = data
			mangaResult = mangaList
		})
	render(mangaList, mangaResult, currentItem)
})()

const filterMangaList = () => {
	mangaResult = mangaList.filter(f => {
		if (
			(f.type === filter.type || filter.type === "") &&
			(f.status === filter.status || filter.status === "")
		) {
			return f
		}
	})
}

filterType.addEventListener("change", e => {
	filter.type = e.target.value
	filterMangaList()
	render(mangaList, mangaResult, currentItem)
})

filterStatus.addEventListener("change", e => {
	filter.status = e.target.value
	filterMangaList()
	render(mangaList, mangaResult, currentItem)
})

search.addEventListener("keyup", e => {
	mangaResult = mangaList.filter(f =>
		f.name.toLowerCase().includes(search.value.toLowerCase())
	)
	render(mangaList, mangaResult, currentItem)
})
