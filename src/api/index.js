import axios from "axios";

export const deleteBlog = id => {
	return axios.delete(`${BASE_URL}api/deleteblog/${id}`).then(e => e);
}