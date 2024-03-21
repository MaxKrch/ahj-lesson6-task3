export default (page, blobs) => {
	for (let file of blobs) {
		const link = page.querySelector(`a[data-id="${file.id}"]`);
		const src = URL.createObjectURL(file.blob);

		const wrapLink = link.closest("li.file__item");
		const linkSize = wrapLink.querySelector(".file__size-count");
		console.log(wrapLink, linkSize);
		linkSize.textContent = (file.blob.size / 1000000).toFixed(1);

		link.href = src;
	}
};
