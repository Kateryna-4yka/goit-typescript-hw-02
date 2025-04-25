import axios from "axios";

export default async function requestOnUnsplsh (searchWord,page) {
    const request = await axios.get (`https://api.unsplash.com/search/photos`, {params: {
            client_id: 'fsa77XoDKPaykQAv_wi--9WyXd62ZKKk8D6ar1O_kF4',
            page: page,
            query: searchWord,
            per_page: 4,}});

    return request.data.results;
}