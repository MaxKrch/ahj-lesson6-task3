export default (page, files) => {
	for (let file of files) {
		const link = page.querySelector(`a[data-id="${file.id}"]`);
		const src = `data:application/pdf;base64,${file.data}`;

		const wrapLink = link.closest("li.file__item");
		const linkSize = wrapLink.querySelector(".file__size-count");
		linkSize.textContent = file.size;

		link.href = src;
	}
};
