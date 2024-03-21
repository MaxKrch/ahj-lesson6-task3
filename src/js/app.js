import storageStandard from "../files/storageStandard";
import XMLHttpRequestStandard from "../files/XMLHttpRequestStandard";
import streamsStandard from "../files/streamsStandard";

import rendingPage from "./rending";

import addBlobsToLinks from "./links";
import addEventListeners from "./events";

const arrayFiles = [
	{
		id: 0,
		name: "Storage Standard",
		data: storageStandard,
		size: 0.3,
	},
	{
		id: 1,
		name: "XMLHttpR. Standard",
		data: XMLHttpRequestStandard,
		size: 0.8,
	},
	{
		id: 2,
		name: "Streams Standard",
		data: streamsStandard,
		size: 1.7,
	},
];

const page = rendingPage("#app", arrayFiles);

addBlobsToLinks(page, arrayFiles);
addEventListeners(page, arrayFiles);
