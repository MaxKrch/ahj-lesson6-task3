export default (container, files) => {
	const page = document.querySelector(container);
	const pageBody = renderPage(files);
	page.append(pageBody);

	return page;
};

const renderPage = (files) => {
	const body = document.createElement("div");
	body.classList.add("container");

	const header = renderHeader();
	body.append(header);

	const fileList = renderFileList(files);
	body.append(fileList);

	const total = renderTotalDownload();
	body.append(total);

	return body;
};

const renderHeader = () => {
	const header = document.createElement("h2");
	header.classList.add("main-title");
	header.textContent = `
		Available Files 
	`;
	return header;
};

const renderFileList = (files) => {
	const fileList = document.createElement("ul");
	fileList.classList.add("file-list");

	for (let file of files) {
		const newFile = renderFile(file.id, file.name);
		fileList.append(newFile);
	}

	return fileList;
};

const renderFile = (id, name) => {
	const file = document.createElement("li");
	file.classList.add("file__item");
	file.dataset.id = id;
	file.innerHTML = `
		<span class="file__item file__name">
			${name}
		</span>
		
		<div class="file__item file__size">
			<span class="file__size-count">
				00.0
			</span>
			<span class="file__size-abb">
				Mb
			</span>
		</div>
		
		<span class="file__item file__link">
			<a class="file__link-a" href='' data-id="${id}">
				Download
			</a>
		</span>
	`;
	return file;
};

const renderTotalDownload = () => {
	const total = document.createElement("div");
	total.classList.add("total");

	total.innerHTML = `
		<div class="total__div total__descr">
			All downloaded
		</div>

		<div class="total__div total__size">
			<span	class="total__span span__number">
				00.0
			</span>
			<span class="total__span span__text">
				Mb
			</span
		</div 
	`;
	return total;
};
