import { render } from "./render.js"

const limit = 20
let currentPage = 1
let mangaList = []
let mangaResult = mangaList
let filterManga = null
let mangaCount = null
const offset = currentPage * limit - limit

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
			mangaResult = mangaList.slice(offset, offset + limit)
		})
	mangaCount = mangaList.length
	await pagination(mangaCount, mangaList)
	renderCount()
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

filterType.addEventListener("change", e => {
	filter.type = e.target.value
	filterMangaList()
	filterManga = mangaResult
	pagination(mangaResult.length, filterManga)
	currentPage = 1
	mangaCount = filterManga.length
	renderCount()
	render(mangaList, mangaResult.slice(offset, offset + limit), currentItem)
})

filterStatus.addEventListener("change", e => {
	filter.status = e.target.value
	filterMangaList()
	filterManga = mangaResult
	pagination(mangaResult.length, filterManga)
	currentPage = 1
	mangaCount = filterManga.length
	renderCount()
	render(mangaList, mangaResult.slice(offset, offset + limit), currentItem)
})

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
