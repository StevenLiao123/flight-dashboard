import axios from 'axios';

const URL_BASE =  "https://api.spacexdata.com/v3";

export const fetchAllCapsulesAjax = () => axios.get(`${URL_BASE}/capsules?sort=original_launch`);

export const fetchRoadsterAjax = () => axios.get(`${URL_BASE}/roadster`);

export const fetchLandingPadAjax = (id) => axios.get(`${URL_BASE}/landpads/${id}`);
