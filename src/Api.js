import axios from "axios"

export const getSurat = async () => {
    const response = await axios.get("https://equran.id/api/v2/surat")
    return response.data.data;
}

export const getOneSurat = async(id) => {
    const response = await axios.get(`https://equran.id/api/v2/surat/${id}`)
    return response.data.data;
}

export const getDoa = async () => {
    const response = await axios.get("https://equran.id/_next/data/kxkUjfH9JP-fYvtf4Vn41/doa.json")
    return response.data.pageProps.doas;
}

export const getTafsir = async (id) => {
    const response = await axios.get(`https://equran.id/api/v2/tafsir/${id}`)
    return response.data.data;
}