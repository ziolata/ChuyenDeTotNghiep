import axios from "axios";

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

export const getSound = async (set, content) => {
	try {
		const response = await axios.post(
			"https://api.fpt.ai/hmi/tts/v5",
			content,
			{
				headers: {
					"api-key": "9zi0U3gxdMH5KA7JolQrKFNsG5Kjmvj3",
					voice: "giahuy",
					speed: 0,
				},
			},
		);
		set(response.data.async);
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
