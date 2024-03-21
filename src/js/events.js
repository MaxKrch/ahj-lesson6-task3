export default (page) => {
	const arrayLinks = searchLinks(page);
	for (let link of arrayLinks) {
		addEventListeners(link, "click", () => {
			downloadFile(event, page);
		});
	}
};

import createBlob from "./blobs";

const searchLinks = (page) => {
	const arrayLinks = Array.from(page.querySelectorAll(".file__link-a"));

	return arrayLinks;
};

const addEventListeners = (element, ev, callback) => {
	element.addEventListener(ev, (event) => {
		event.preventDefault();
		callback(event);
	});
};

const downloadFile = (event, page) => {
	const size = countSize(event, page) / 1000000;
	addDownloaded(size, page);
};

const addDownloaded = (size, page) => {
	const fixedSize = Number(size.toFixed(1));
	const wrapSize = page.querySelector(".span__number");

	const newSize = +wrapSize.textContent + +fixedSize;
	wrapSize.textContent = newSize.toFixed(1);
};

const countSize = (event) => {
	const data = event.target.href.split(',')[1]
	const blob = createBlob(data);
	const src = URL.createObjectURL(blob);

	const a = document.createElement("a");
	const file = event.target.closest('li');
	const name = file.querySelection('.file__name').textContent;
	
	a.download = name;
	a.href = src;
	setTimeout(() => {
		URL.revokeObjectURL(a.href);
	}, 1000);

	a.dispatchEvent(new MouseEvent("click"));
	return blob.size;
};
