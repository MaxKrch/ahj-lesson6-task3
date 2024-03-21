export default (page, blobs) => {
	const arrayLinks = searchLinks(page);
	addEventListeners(arrayLinks, "click", () => {
		downloadFile(event, blobs, page);
	});
};

const searchLinks = (page) => {
	const arrayLinks = Array.from(page.querySelectorAll(".file__link-a"));

	return arrayLinks;
};

const addEventListeners = (elements, event, callback) => {
	elements.forEach((item) => {
		item.addEventListener(event, callback);
	});
};

const downloadFile = (event, blobs, page) => {
	const size = countSize(event, blobs, page);
	size.then((res) => addDownloaded(res, page));
};

const addDownloaded = (size, page) => {
	const fixedSize = Number(size.toFixed(1));
	const wrapSize = page.querySelector(".span__number");

	const newSize = +wrapSize.textContent + +fixedSize;
	wrapSize.textContent = +newSize;
};

const countSize = (event, blobs) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = (event) => {
			resolve(event.loaded / 1000000);
		};
		reader.onerror = () => {
			reject(0);
		};

		const blob = requestBlob(Number(event.target.dataset.id), blobs);
		reader.readAsArrayBuffer(blob);
	});
};

const requestBlob = (id, blobs) => {
	const objectWithBlob = blobs.find((item) => item.id === id);

	return objectWithBlob.blob;
};
