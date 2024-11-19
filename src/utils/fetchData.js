export const exerciseOptions = {
  method: 'GET',
  headers: {
		'X-RapidAPI-Key': 'e4e022e89amsh49c59691e308b98p134547jsnfa2860827cc6',// MY api
		// 'X-RapidAPI-Key': 'ccc76f7075msh1d8385af9f680c3t1bf1abjsn01182e3d0d23', // Shabahat
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
}

export const fetchData = async (url, options) => {
const response = await fetch(url, options);
const data = await response.json();

return data;
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};