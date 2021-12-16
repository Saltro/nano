import { request } from '@/request/instance';

// interface IAnimeDetail{
//     title: string,
//     titleCN: string,
//     cover: string,
//     images: string,
//     description: string,
//     director: string,
//     screenwriter: string,
//     actors: string[],
//     categories: string[],
//     website: string,
//     country: string,
//     date: string,
//     imdb: string,
//     alias: string[]
// }

const getAnimeDetail = async (id: string | undefined) => {
    const res = await request.get(`/anime/${id}`).then((res) => {
        return res.data;
    });
    return res;
}

const getPlaces = async (id: number) => {
    const res = await request.get(`/place/?anime_id=${id}`).then(res => {
        return res.data
    });
    return res
}

export default { getAnimeDetail, getPlaces }