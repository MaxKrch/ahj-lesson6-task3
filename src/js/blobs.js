export default (files) => {
	const blobList = [];

	for (let file of files) {
		const decodingData = atob(file.data);
		const array = [];

		for (let i = 0; i < decodingData.length; i++) {
			array.push(decodingData.charCodeAt(i));
		}

		const blob = new Blob([new Uint8Array(array)], { type: "application/pdf" });
		blobList.push({
			id: file.id,
			blob,
		});
	}
	return blobList;
};
