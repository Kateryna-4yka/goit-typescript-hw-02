import axios from "axios";

export interface ImgArr {
id : string,
urls: {
    regular?: string, 
    small?: string, 
}
alt_description?: string, 
user?:{
    name?: string,
    portfolio_url?: string,
    location?: string | null, 
    total_likes?: number,
}}

export default async function requestOnUnsplsh (searchWord:string ,page: number) :Promise <ImgArr[]> {

    const request = await axios.get (`https://api.unsplash.com/search/photos`, {params: {
            client_id: 'fsa77XoDKPaykQAv_wi--9WyXd62ZKKk8D6ar1O_kF4',
            page: page,
            query: searchWord,
            per_page: 4,}});

    return request.data.results;
}