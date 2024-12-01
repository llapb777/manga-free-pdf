import { render } from "./render.js"
import renderCurrentItem from "./renderCurrentItem.js"
import renderFilter from "./renderFilter.js"

const limit = 21
let currentPage = 1
let mangaList = []
let mangaResult = mangaList
let filterManga = null
let mangaCount = null
let offset = currentPage * limit - limit

const search = document.querySelector(".header__search")

let currentItem = null
let filter = { type: "", status: "" }
renderFilter()
let filterType = document.querySelector("#filter-type")
let filterStatus = document.querySelector("#filter-status")

window.addEventListener("popstate", e => {
	const page = window.location.search.replace(/\?/, "").split("=")
	if (e.target.location.search === "" || page[0] === "page") {
		if (page[0] === "page") {
			currentPage = Number(page[1])
			offset = currentPage * limit - limit
			mangaResult = mangaList.slice(offset, offset + limit)
		}
		renderFilter()
		render(mangaList, mangaResult, currentItem)
		filterType = document.querySelector("#filter-type")
		filterStatus = document.querySelector("#filter-status")
		addListenerFilter()
		mangaCount = mangaList.length
		renderCount()
		pagination(mangaCount, mangaList)
		document.querySelector(".pagination").classList.remove("pagination__hide")
		filter = { type: "", status: "" }
	} else {
		const id = window.location.search.replace(/\?/, "").split("=")
		if (id[0] === "id") {
			renderCurrentItem(mangaList, Number(id[1]))
		}
	}
})
;(async () => {
	await fetch("./data.json")
		.then(response => response.json())
		.then(data => {
			mangaList = data
			mangaResult = mangaList.slice(offset, offset + limit)
		})
	const locationSearch = window.location.search
	if (!locationSearch.length) {
		window.history.pushState({ page: 1 }, "page", "?page=1")
	}
	mangaCount = mangaList.length
	const page = window.location.search.replace(/\?/, "").split("=")
	if (page[0] === "page") {
		currentPage = Number(page[1])
		offset = currentPage * limit - limit
		mangaResult = mangaList.slice(offset, offset + limit)
	}
	await pagination(mangaCount, mangaList)
	renderCount()
	const id = window.location.search.replace(/\?/, "").split("=")
	if (id[0] === "id") {
		renderCurrentItem(mangaList, Number(id[1]))
	} else {
		render(mangaList, mangaResult, currentItem)
		addListenerFilter()
	}
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
function renderCount() {
	const countItem = document.querySelector(".manga-count__item")
	countItem.innerHTML = `Количество: ${mangaCount}`
}

function pagination(count, list) {
	const paginationOut = document.querySelector(".pagination")

	let pageRender = ``
	const pages = Math.ceil(count / limit)

	const renderPagination = () => {
		pageRender = ""
		for (let i = 0; i < pages; i++) {
			pageRender += `<button id='${i + 1}' class='btn-page ${
				currentPage === i + 1 ? "page-active" : ""
			} '>${i + 1}</button>`
		}
		paginationOut.innerHTML = pageRender
		listenBtn()
	}
	renderPagination()

	function listenBtn() {
		const btns = document.getElementsByClassName("btn-page")
		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", e => {
				if (currentPage !== Number(e.target.id)) {
					window.history.pushState({ page: i + 1 }, "page", "?page=" + (i + 1))
					currentPage = Number(e.target.id)
					renderPagination()
					const offset = currentPage * limit - limit
					mangaResult = list.slice(offset, offset + limit)
					render(mangaList, mangaResult, currentItem)
				}
			})
		}
	}
}

search.addEventListener("keyup", e => {
	mangaResult = mangaList.filter(f =>
		f.name.toLowerCase().includes(search.value.toLowerCase())
	)
	filterManga = mangaResult
	pagination(mangaResult.length, filterManga)
	currentPage = 1
	mangaCount = filterManga.length
	renderCount()
	render(mangaList, mangaResult.slice(offset, offset + limit), currentItem)
})

function addListenerFilter() {
	filterType.addEventListener("change", e => {
		window.history.pushState({ page: 1 }, "page", "?page=" + 1)
		currentPage = 1
		filter.type = e.target.value
		filterMangaList()
		filterManga = mangaResult
		pagination(mangaResult.length, filterManga)
		mangaCount = filterManga.length
		renderCount()
		render(mangaList, mangaResult.slice(offset, offset + limit), currentItem)
	})

	filterStatus.addEventListener("change", e => {
		window.history.pushState({ page: 1 }, "page", "?page=" + 1)
		currentPage = 1
		filter.status = e.target.value
		filterMangaList()
		filterManga = mangaResult
		pagination(mangaResult.length, filterManga)
		mangaCount = filterManga.length
		renderCount()
		render(mangaList, mangaResult.slice(offset, offset + limit), currentItem)
	})
}
