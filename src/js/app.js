import storageStandard from "../files/storageStandard";
import XMLHttpRequestStandard from "../files/XMLHttpRequestStandard";
import streamsStandard from "../files/streamsStandard";

import rendingPage from "./rending";
import createBlobs from "./blobs";
import addBlobsToLinks from "./links";
import addEventListeners from "./events";

const arrayFiles = [
	{
		id: 0,
		name: "Storage Standard",
		data: storageStandard,
	},
	{
		id: 1,
		name: "XMLHttpR. Standard",
		data: XMLHttpRequestStandard,
	},
	{
		id: 2,
		name: "Streams Standard",
		data: streamsStandard,
	},
];

const page = rendingPage("#app", arrayFiles);
const blobs = createBlobs(arrayFiles);

addBlobsToLinks(page, blobs);
addEventListeners(page, blobs);
