export default function renderCurrentItem(mangaList, currentItem) {
	const main = document.querySelector(".main")

	if (currentItem !== null) {
		const item = mangaList.find(f => f.id === currentItem)
		main.innerHTML = ""
		main.innerHTML = `<div class="container">
		<div class="current-item">
			<div class="current-item__left">
				<img class="current-item__img" src="${item.imgLink}" alt="Image" />
				<div class="social">
					${
						item.link && item.link.length
							? `<a class="social__link" target="_blank" href="${item.link}">
						<img class="social__img" src="./img/vk.ico" alt="vk">
						Скачать эту мангу в вк
					</a>`
							: ""
					}
					${
						item.tgLink && item.tgLink.length
							? `<a class="social__link" target="_blank" href="${item.tgLink}">
						<img class="social__img" src="./img/tg.png" alt="telegram">
						Скачать эту мангу в телеграмм
					</a>`
							: ""
					}
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
