import { atom } from "jotai";
export const guAtom = atom(null);
export const festivalFetchData = atom(async()=>{
    const serviceKey = "c36b872e11a4ce7a8e05133a997bcafac2109f0202652081cdf8e17fa766483d";
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${serviceKey}&pageNo=1&numOfRows=40&resultType=json` 
    
    const resp = await fetch(url);
    const data = await resp.json();
    let items = await data.getFestivalKr.item;

    return items;
});