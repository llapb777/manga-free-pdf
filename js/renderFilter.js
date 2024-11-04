export default function renderFilter() {
	const main = document.querySelector(".main")
	main.innerHTML = ""
	main.innerHTML = `<div class="filter">
<select name="filter-type" id="filter-type">
<option value="">Тип</option>
<option value="Манга">Манга</option>
<option value="Манхва">Манхва</option>
<option value="Маньхуа">Маньхуа</option>
</select>
          <select name="filter-status" id="filter-status">
            <option value="">Статус</option>
            <option value="Онгоинг">Онгоинг</option>
            <option value="Завершён">Завершён</option>
            <option value="Приостановлен">Приостановлен</option>
						</select>
						<div class="manga-count"><p class="manga-count__item"></p></div>
						</div>
						<div class="manga-list"></div>`
}
