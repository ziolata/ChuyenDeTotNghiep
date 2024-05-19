import axios from "axios";
import qs from "qs";
export const getNovel = async (set) => {
	try {
		const response = await axios.get(
			"http://api.noveltop.online/api/novel/list/",
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

export const getNewChapterNovel = async (set) => {
	try {
		const response = await axios.get(
			"http://api.noveltop.online/api/novel/list/newupdate/",
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

export const getTopNovel = async (set) => {
	try {
		const response = await axios.get(
			"http://api.noveltop.online/api/novel/list/topnovel/",
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

export const getHotNovel = async (set) => {
	try {
		const response = await axios.get(
			"http://api.noveltop.online/api/novel/list/hot/",
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

export const getNovelDetail = async (set, id) => {
	try {
		const response = await axios.get(
			`http://api.noveltop.online/api/novel/list/${id}/`,
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

export const getChapter = async (set, id, page) => {
	try {
		const response = await axios.get(
			`http://api.noveltop.online/api/chapter/by/${id}/?page=${page}`,
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

export const getChapterDetail = async (set, id) => {
	try {
		const response = await axios.get(
			`http://api.noveltop.online/api/chapter/${id}/`,
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

export const getSearch = async (set, key) => {
	try {
		const response = await axios.get(
			`http://api.noveltop.online/api/novel/list/?search=${key}`,
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

export const getGenres = async (set) => {
	try {
		const response = await axios.get(
			"http://api.noveltop.online/api/genres/list/",
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

export const getSearchGenre = async (set, key) => {
	try {
		const response = await axios.get(
			`http://api.noveltop.online/api/genres/search/?keyword=${key}`,
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};

// export const getSound = async (set, content) => {
// 	try {
// 		const response = await axios.post(
// 			"https://api.fpt.ai/hmi/tts/v5",
// 			content,
// 			{
// 				headers: {
// 					"api-key": "9zi0U3gxdMH5KA7JolQrKFNsG5Kjmvj3",
// 					voice: "giahuy",
// 					speed: 0,
// 				},
// 			},
// 		);
// 		set(response.data.async);
// 	} catch (error) {
// 		console.error("Error fetching:", error);
// 	}
// };
export const getSound = async (set, input) => {
	try {
		const params = new URLSearchParams();
		params.append("input", input);

		const response = await axios.post(
			"https://api.zalo.ai/v1/tts/synthesize/",
			params, // Pass input as the request body
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					apikey: "9a8w8WMhHtS9D51BPkn3uEXAMTWSku63",
				},
			},
		);
		set(response);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};
export const getNovelPage = async (set, page) => {
	try {
		const response = await axios.get(
			`http://api.noveltop.online/api/novel/list-page/?page=${page}`,
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};
export const getRandomNovel = async (set) => {
	try {
		const response = await axios.get(
			"http://api.noveltop.online/api/novel/list/random/",
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};
export const getHistoryNovel = async (set, authTokens) => {
	try {
		const response = await axios.get(
			"http://api.noveltop.online/api/novel/history/",
			{
				headers: {
					Authorization: `Bearer ${authTokens.access}`,
				},
			},
		);
		set(response.data);
	} catch (error) {
		console.error("Error fetching:", error);
	}
};
