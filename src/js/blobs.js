export default (file) => {
	const decodingData = atob(file);
	const array = [];

	for (let i = 0; i < decodingData.length; i++) {
		array.push(decodingData.charCodeAt(i));
	}

	const blob = new Blob([new Uint8Array(array)], { type: "application/pdf" });

	return blob;
};
