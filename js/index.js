const mangaList = [
	{
		name: "Чего изволите, принц?",
		link: "https://vk.ru/wall-226635104_105",
		type: "Манхва",
		imgLink:
			"https://sun1-93.vkuserphoto.ru/impg/xf9CEI25ByIIL3oH4JaGc0K61nSc62yIhwoRtA/zwKyFXG1oso.jpg?size=766x1200&quality=95&sign=1b73db4f2ea843777dd730462a94d6dc&type=album",
	},
	{
		name: "Всенародный дух: мой духовный питомец - женщина-зомби",
		link: "https://vk.ru/wall-226635104_103",
		type: "Маньхуа",
		imgLink:
			"https://sun9-2.vkuserphoto.ru/impg/328-HpYl7wzwySNOGJaAL3tlu-sZ0Rtn-ez3rw/4l7R46_fl3E.jpg?size=700x999&quality=95&sign=5f1a2addaaacce68a693bbf04b18d0e4&type=album",
	},
	{
		name: "Моя девушка - зомби",
		link: "https://vk.ru/wall-226635104_91",
		type: "Маньхуа",
		imgLink:
			"https://sun9-15.vkuserphoto.ru/impg/RUTvfHKXcMcBeurd-m2cOXSRrzvuDXwdvZjTdg/trCWCUTEpHc.jpg?size=375x500&quality=95&sign=210ffce2af342d8944f58ec2dcf1f974&type=album",
	},
	{
		name: "Я переродился ради величия",
		link: "https://vk.ru/wall-226635104_90",
		type: "Маньхуа",
		imgLink:
			"https://sun9-22.vkuserphoto.ru/impg/Vc-4cK03TFOCmMD1QWNmigoYTAuUVybKdhnttw/x67-KU-Ke4I.jpg?size=700x1000&quality=95&sign=39f30a6ca0b2a4c8843c901f4c8d74fb&type=album",
	},
	{
		name: "Магическая битва",
		link: "https://vk.ru/wall-226635104_89",
		type: "Манга",
		imgLink:
			"https://sun9-74.vkuserphoto.ru/impg/-T5qpzoWherPpiym36PBE0W1Q0kQFWQjJPTQbA/WuajIN1Sr3g.jpg?size=375x591&quality=95&sign=a25c8baa8776da76b8ac0c4d716a7426&type=album",
	},
	{
		name: "Король-нежить ~Авантюрист низкого класса эволюционирует силой монстров и становится несокрушимым",
		type: "Манга",
		link: "https://vk.ru/wall-226635104_85",
		imgLink:
			"https://sun1-26.vkuserphoto.ru/impg/hE4IDrk1qwvXzJ4xSkbVuTWPWD8f9yiWTNU2SQ/kekVMykXlF4.jpg?size=375x521&quality=95&sign=6eb9cfd5e3329c0af0ccaf5b2336115b&type=album",
	},
	{
		name: "Блич",
		type: "Манга",
		link: "https://vk.ru/wall-226635104_82",
		imgLink:
			"https://sun1-26.vkuserphoto.ru/impg/akWgJ71BM7-DfQqhhjbOXqnYGgfPIPbjXhkXPw/fQI9T8YmDnA.jpg?size=375x588&quality=95&sign=57bb9e6b58cd71a319a6b30978d72a75&type=album",
	},
	{
		name: "Мужчина бог любит по-настоящему",
		type: "Маньхуа",
		link: "https://vk.ru/wall-226635104_78",
		imgLink:
			"https://sun9-53.vkuserphoto.ru/impg/dn4m404kUX_GDEYE3b-ev75VPFYjU1i2weCbIg/oYJz9I27naA.jpg?size=375x500&quality=95&sign=babe75f2831263bc6af4b211fde3cece&type=album",
	},
	{
		name: "Я родилась дочерью короля демонов",
		link: "https://vk.ru/wall-226635104_74",
		type: "Манхва",
		imgLink:
			"https://sun9-57.vkuserphoto.ru/impg/luDTx_VM-QdD512zVF9_MoGc3tCZHekgkA8wZA/Ju7AMLeBreI.jpg?size=700x1000&quality=95&sign=67edb1608d63073b4a565cb60e1eb7a7&type=album",
	},
	{
		name: "Король меча",
		link: "https://vk.ru/wall-226635104_70",
		type: "Манхва",
		imgLink:
			"https://sun9-18.vkuserphoto.ru/impg/DT1OKeIyKN-W15Cyxy4NraQx2UOPvga39nJxOA/cd7zZVRg9fU.jpg?size=375x536&quality=95&sign=6cdc378708ad3e0037cc6895cda160c3&type=album",
	},
	{
		name: "Моя еда выглядит очень миленькой",
		link: "https://vk.ru/wall-226635104_67",
		type: "Маньхуа",
		imgLink:
			"https://sun9-57.vkuserphoto.ru/impg/FFalBLAH-UOy1XEsatjK5PnAEvE6zkodYMsn5w/17Q40n4u1Bs.jpg?size=375x534&quality=95&sign=d5c37547db50ffe073382b013afacbd1&type=album",
	},
	{
		name: "Я переродился в систему",
		link: "https://vk.ru/wall-226635104_59",
		type: "Маньхуа",
		imgLink:
			"https://sun9-7.vkuserphoto.ru/impg/tMGmPrBCzLxrK4kxPuFVB2sc_MumPbs0C2_HBw/V2EcXWMAfao.jpg?size=375x500&quality=95&sign=9f76e0e9e1072dc70d12dfb07ae3d8cb&type=album",
	},
	{
		name: "Девочка, которая видит это",
		link: "https://vk.ru/wall-226635104_54",
		type: "Манга",
		imgLink:
			"https://sun9-46.vkuserphoto.ru/impg/jXGGxVRaEBSloIQTZh78nSdjXlSoiuun9d-Caw/_5rEVrt2Zaw.jpg?size=375x533&quality=95&sign=217986d17868c4f25b08f0ff2bdd862c&type=album",
	},
	{
		name: "Я стал другом детства босса среднего уровня",
		link: "https://vk.ru/wall-226635104_51",
		type: "Маньхуа",
		imgLink:
			"https://sun9-79.vkuserphoto.ru/impg/s0gi1ocnXz3sRxocGIGRpAKoNqYlJxIsto0S1w/zGWvRBUamQU.jpg?size=700x1000&quality=95&sign=607a7922e3bcb2e58c4afb6350180d1d&type=album",
	},
	{
		name: "Ванпанчмен",
		link: "https://vk.ru/wall-226635104_44",
		type: "Манга",
		imgLink:
			"https://sun9-62.vkuserphoto.ru/impg/aJB1X9vSQ-ZCqsfohQoPXCATKy4n_gU0_gVj6g/kawAztH7NBo.jpg?size=700x999&quality=95&sign=57257463470f52064474e1094de329c7&type=album",
	},
	{
		name: "Я получил слабейший класс, Укротитель драконов!?",
		link: "https://vk.ru/wall-226635104_43",
		type: "Маньхуа",
		imgLink:
			"https://sun9-63.vkuserphoto.ru/impg/Bd6gBZr8uKI4TAhKitfsB9CdBon9VEewOaIweQ/2NjY5Jqq91Y.jpg?size=375x563&quality=95&sign=94baa6823e0c16266d5c39df591198de&type=album",
	},
	{
		name: "История о том, как обращаться с женщиной-рыцарем, к которой никогда не относились как к женщине",
		link: "https://vk.ru/wall-226635104_41",
		type: "Манга",
		imgLink:
			"https://sun9-46.vkuserphoto.ru/impg/f48H2vMOMYVrmgBK54E-yFL2quN6WVpdYkoTBw/26flCffrODY.jpg?size=375x534&quality=95&sign=333bd81c09897f6e94c7111c3015c2ac&type=album",
	},
	{
		name: "Игра Друзей",
		link: "https://vk.ru/wall-226635104_40",
		type: "Манга",
		imgLink:
			"https://sun9-61.vkuserphoto.ru/impg/jb2TWpBH555JWdyBufrBfxmBZGDvy-hnZIPp3A/GUW7U611fDM.jpg?size=375x556&quality=95&sign=197f94feab8ff2b320ba1ca628271a65&type=album",
	},
	{
		name: "Все Спин-офф-ы манги 'О моём перерождении в слизь'",
		link: "https://vk.ru/wall-226635104_39",
		type: "Манга",
		imgLink:
			"https://sun9-36.vkuserphoto.ru/impg/WVOkMJJ32RC97RDbfQdkcPv7itZwWiGRymP7KA/UYT3rKbfcJQ.jpg?size=375x533&quality=95&sign=a1762f040dad16c404f3c60c55c9ef11&type=album",
	},
	{
		name: "Бессмертный мечник в обратном мире",
		link: "https://vk.ru/wall-226635104_34",
		type: "Маньхуа",
		imgLink:
			"https://sun9-64.vkuserphoto.ru/impg/HC3414JzE43p7huaHuduYA-BWctByShjXKLY2Q/41uMeiRE84Y.jpg?size=375x564&quality=95&sign=3f57483faef690fb522c3e912827b2ab&type=album",
	},
	{
		name: "Вермейл в золотом: Сильнейший маг проходит через магический мир с сильнейшей катастрофой",
		link: "https://vk.ru/wall-226635104_24",
		type: "Манга",
		imgLink:
			"https://sun9-76.vkuserphoto.ru/impg/8xPdv9GwIreNCa5jCgoDx7DhAA3vX3oQWQavsg/EmoHcRda-NE.jpg?size=375x563&quality=95&sign=4b52f9f5931b0f33bf86c1aa5dd22b28&type=album",
	},
	{
		name: "Неправильный способ использования Исцеляющей Магии",
		link: "https://vk.ru/wall-226635104_15",
		type: "Манга",
		imgLink:
			"https://sun9-3.vkuserphoto.ru/impg/669C_wSUeP7BqX9NE-hDzAFr5y839SM_DbUuMA/RJNlLdEpZEQ.jpg?size=375x534&quality=95&sign=50bd2e2a066f771b6ca4e79492ebb051&type=album",
	},
	{
		name: "Катастрофический некромант",
		link: "https://vk.ru/wall-226635104_14",
		type: "Маньхуа",
		imgLink:
			"https://sun9-34.vkuserphoto.ru/impg/sRsOZJXa-AWMZm6DZS571yxaGY2cpqhuz5SrVw/kDweYIMZvwA.jpg?size=375x525&quality=95&sign=671e79b5f4c191c13e82b668417eab95&type=album",
	},
	{
		name: "Не издевайся, Нагаторо-сан",
		link: "https://vk.ru/wall-226635104_11",
		type: "Манга",
		imgLink:
			"https://sun9-7.vkuserphoto.ru/impg/G_-evPaHrhyaTB2E7h-hRumiOrgk_kS_L7ZGdA/kJRx1DjhNz8.jpg?size=375x561&quality=95&sign=7d631e11e5a726be8d1875de9cba5678&type=album",
	},
	{
		name: "О моём перерождении в слизь",
		link: "https://vk.ru/wall-226635104_7",
		type: "Манга",
		imgLink:
			"https://sun9-59.vkuserphoto.ru/impg/boBHamIXBNXkE3b0mtFLUXiPcPUFOnehWDSOPg/b8JXB0MJKgg.jpg?size=375x534&quality=95&sign=b4838bc15bb79d17aec281a501f40f2c&type=album",
	},
	{
		name: "Клинок, рассекающий демонов",
		link: "https://vk.ru/wall-226635104_5",
		type: "Манга",
		imgLink:
			"https://sun9-1.vkuserphoto.ru/impg/kDh21JzAsFpJvtm0NqUzeW3_mPw-lzbOpBa4AQ/8qloSR1JrLs.jpg?size=375x589&quality=95&sign=237a54017e4030b62df4c07a38dff374&type=album",
	},
	{
		name: "Эта фарфоровая кукла влюбилась",
		link: "https://vk.ru/wall-226635104_4",
		type: "Манга",
		imgLink:
			"https://sun9-25.vkuserphoto.ru/impg/-92vOxU48vL4iaYfjyj4zxgF54_wz-AEPGOLKg/-Yz3ysfLk30.jpg?size=375x538&quality=95&sign=7213c6a30e56d30b0f217657626310d5&type=album",
	},
	{
		name: "Поднятие уровня в одиночку",
		link: "https://vk.ru/wall-226635104_3",
		type: "Манга",
		imgLink:
			"https://sun9-79.vkuserphoto.ru/impg/wIG3Y9AL6zAstLa07FgBkGZoLe6ZA5o2vbRtwg/HZYk97Gu1Co.jpg?size=375x506&quality=95&sign=037cc3d848a8538f1d556eb158b3cd68&type=album",
	},
	{
		name: "Хоромия",
		link: "https://vk.ru/wall-226635104_2",
		type: "Манга",
		imgLink:
			"https://sun9-29.vkuserphoto.ru/impg/HoOdxBtvbprlJUOtcUt2omUok3xd8Gko7PEdpg/1ZFq7sEBxvg.jpg?size=375x535&quality=95&sign=4c5898490dc44d45c325073442f10808&type=album",
	},
]

let mangaResult = mangaList

const root = document.querySelector(".manga-list")
const search = document.querySelector(".header__search")
const filter = document.querySelector("#filter")

const render = () => {
	root.classList.remove("manga-list__empty")
	root.innerHTML = ""
	if (mangaResult.length) {
		mangaResult.forEach((item, i) => {
			root.innerHTML += `<div class="item">
          <img class="item__image" title='${item.name}' src="${
				item.imgLink
			}" alt="${item.name}">
          <a class="item__link" target="_blank" title='${item.name}' href="${
				item.link
			}">${item.name.slice(0, 30)} ${item.name.length > 30 ? "..." : ""}</a>
        </div>`
		})
	} else {
		root.classList.add("manga-list__empty")
		root.innerHTML =
			"<div class='empty'><img class='empty__img' src='../img/empty.png' alt='empty'/><div>Ничего не найдено</div></div>"
	}
}
render()

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
