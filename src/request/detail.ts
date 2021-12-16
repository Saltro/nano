import { request } from '@/request/instance';

const getAnimeDetail = async (id: string | undefined) => {
    const res = await request.get(`/anime/${id}`).then((res) => {
        return res.data;
    });
    return res;
}

const getPlaces = async (id: string | undefined) => {
    const res = await request.get(`/place/?anime_id=${id}`).then(res => {
        return res.data
    });
    return res
}

export default { getAnimeDetail, getPlaces }