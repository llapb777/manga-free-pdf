export default function renderCurrentItem(mangaList, currentItem) {
	const main = document.querySelector(".main")

	if (currentItem !== null) {
		const item = mangaList.find(f => f.id === currentItem)

		const description = `${
			item.description
				? `<p class="info__description"><span>Описание:</span> ${item.description}</p>`
				: ""
		}`
		const type = `${
			item.type
				? `<p class="info__type"><span>Тип:</span> ${item.type}</p>`
				: ""
		}`
		const year = `${
			item.yearOfRelease
				? `<p class="info__year" ><span>Год релиза</span>: ${item.yearOfRelease}</p>`
				: ""
		}`
		const status = `${
			item.status
				? `<p class="info__status"><span>Статус:</span> ${item.status}</p>`
				: ""
		}`
		const genres = `${
			item.genres
				? `<p class="info__genre">Жанры:</p>
				<p class="info__genres">${item.genres}</p>`
				: ""
		}`
		const image = `${
			item.imgLink
				? `<img class="current-item__img" src="${item.imgLink}" alt="Image" />`
				: `<svg class='current-item__no-photo' fill='#fff' id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m384.533 0h-257.066c-70.285 0-127.467 57.182-127.467 127.467v257.066c0 70.285 57.182 127.467 127.467 127.467h257.066c70.285 0 127.467-57.182 127.467-127.467v-257.066c0-70.285-57.182-127.467-127.467-127.467zm0 482h-257.066c-53.743 0-97.467-43.724-97.467-97.467v-257.066c0-21.471 6.984-41.338 18.792-57.462l74.595 74.595h-3.954c-30.514 0-55.167 24.688-55.167 55.167v160.667c0 30.51 24.685 55.167 55.167 55.167h273.134c.596 0 1.185-.026 1.776-.045l47.652 47.652c-16.123 11.808-35.991 18.792-57.462 18.792zm33.2-121.567c0 9.821-5.588 18.241-13.691 22.396l-73.462-73.462c8.067-13.222 12.719-28.745 12.719-45.334 0-48.137-39.163-87.3-87.3-87.3-16.589 0-32.112 4.652-45.334 12.719l-29.012-29.012c5.625-6.774 9.013-15.469 9.013-24.941 0-5.018 4.082-9.1 9.1-9.1h112.467c5.018 0 9.1 4.082 9.1 9.1 0 21.56 17.54 39.1 39.1 39.1h32.134c13.93 0 25.167 11.333 25.167 25.167v160.667zm-208.275-129.762 79.904 79.904c-9.404 6.761-20.922 10.758-33.362 10.758-31.595 0-57.3-25.705-57.3-57.3 0-12.44 3.998-23.958 10.758-33.362zm23.391-19.035c7.085-3.143 14.914-4.903 23.151-4.903 31.595 0 57.3 25.705 57.3 57.3 0 8.237-1.76 16.066-4.903 23.151zm-44.786-2.36c-12.103 14.987-19.363 34.039-19.363 54.757 0 48.138 39.163 87.3 87.3 87.3 20.719 0 39.771-7.26 54.758-19.363l53.63 53.63h-244.955c-13.773 0-25.167-11.129-25.167-25.167v-160.666c0-13.93 11.333-25.167 25.167-25.167h32.134c.595 0 1.186-.019 1.775-.045zm293.937 175.257c0 21.471-6.984 41.338-18.792 57.462l-37.467-37.467c13.363-10.065 21.993-26.064 21.993-44.094v-160.667c0-30.514-24.688-55.167-55.167-55.167h-32.134c-5.018 0-9.1-4.082-9.1-9.1 0-21.56-17.54-39.1-39.1-39.1h-112.466c-21.56 0-39.1 17.54-39.1 39.1 0 1.172-.23 2.289-.635 3.318l-90.027-90.026c16.123-11.808 35.991-18.792 57.462-18.792h257.066c53.743 0 97.467 43.724 97.467 97.467z"></path></svg>`
		}`
		const vkLink = `${
			item.link && item.link.length
				? `<a class="social__link" target="_blank" href="${item.link}">
						<img class="social__img" src="./img/vk.ico" alt="vk">
						Скачать эту мангу в вк
					</a>`
				: ""
		}`
		const tgLink = `${
			item.tgLink && item.tgLink.length
				? `<a class="social__link" target="_blank" href="${item.tgLink}">
						<img class="social__img" src="./img/tg.png" alt="telegram">
						Скачать эту мангу в телеграмм
					</a>`
				: ""
		}`
		document.querySelector(".pagination").classList.add("pagination__hide")
		main.innerHTML = ""
		main.innerHTML = `<div class="container">
		<div class="current-item">
			<div class="current-item__left">
				<div class='current-item__wrap-img ${
					item.imgLink ? "" : "no-photo"
				}'>${image}</div>
				<div class="social">
					${vkLink}
					${tgLink}
				</div>
			</div>
			<div class="current-item__info">
				<h2 class="info__name">${item.name}</h2>
				${description}
				${type}
				${year}
				${status}
				${genres}
			</div>
		</div>
		</div>`
	}
}
