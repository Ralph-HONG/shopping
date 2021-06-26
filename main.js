// 뭘 넣을것인가?
const input = document.querySelector(".footer__input")
//어디에 넣을건가?
const itemList = document.querySelector(".items");
// 어떻게 넣을건가?
const addBtn = document.querySelector(".footer__button")


function onAdd() {

		const inputVal = input.value;
		if (inputVal !== "") {
			const item = newItem(inputVal);
			itemList.appendChild(item);
			item.scrollIntoView({block: "center" });
			input.value = "";
			input.focus();
		} else {
			input.focus();
			return false;
		}
}


function newItem(inputVal) {
	const itemRow = document.createElement("li");
	itemRow.setAttribute("class", "item__row")

	const item = document.createElement("div");
	item.setAttribute("class", "item")

	const span = document.createElement("span");
	span.setAttribute("class", "item__name")
	span.innerText = inputVal;


	const delBtn = document.createElement("button");
	delBtn.setAttribute("class", "item__Delete");
	delBtn.innerHTML = "<i class=\"far fa-trash-alt\"></i>"
	delBtn.addEventListener("click", () => {
		itemList.removeChild(itemRow);
	});

	const itemDivider = document.createElement("div");
	itemDivider.setAttribute("class", "item__divider")


	item.appendChild(span);
	item.appendChild(delBtn);

	itemRow.appendChild(item);
	itemRow.appendChild(itemDivider);

	return itemRow;

}


addBtn.addEventListener("click", () => {
	onAdd();
});

input.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		onAdd();
	}
});
// 넣은 후엔 어떻게 되야 하는가?
// 예외처리는?

