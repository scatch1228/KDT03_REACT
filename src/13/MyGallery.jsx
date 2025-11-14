import { useEffect, useRef, useState } from "react";
import TailCard from "../components/TailCard"
import TailInput from "../components/TailInput";
import TailButton from "../components/TailButton";
import dataJson from "./서울빛초롱.json" 

const serviceKey = "c36b872e11a4ce7a8e05133a997bcafac2109f0202652081cdf8e17fa766483d";
let keyword = "%EC%84%9C%EC%9A%B8%20%EC%95%BC%EA%B2%BD%20%EC%B6%95%EC%A0%9C";
let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json` 

export default function MyGallery() {
    

    const kwRef = useRef();
    const itemsRef = useRef([]);
    const [itemsState, setState] = useState([]); 
    const [tags, setTags] = useState(dataJson.response.body.items.item.map(d => <TailCard key={d.galContentId} item={d}/>));
    let item = [];
    

    useEffect(()=>{
        kwRef.current.focus();
        setTags(
        dataJson.response.body.items.item.map(d => <TailCard key={d.galContentId} item={d}/>)
        );
        console.log('tags: ', tags);
    },[])

    /*useEffect(()=>{
        setTags(
        itemsRef.current.map(d => <TailCard key={d.galContentId} item={d}/>)
        )
    },[itemsRef.current])*/

    useEffect(()=>{console.log('tags: ',tags);},[tags])
  

    const handleSearch = () => {
        let keywordRaw = kwRef.current?.value ?? "";
        keyword = encodeURI(keywordRaw);
        url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${serviceKey}&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json` ;
        console.log(keyword)
        console.log(url);
        getFetchData();
    }

    const handleCancel = () => {
      setTags([]);
    }

    const getFetchData = async ()=>{
        const resp = await fetch(url);
        const data = await resp.json();
        item = await data.response.body.items.item;
        itemsRef.current = await item;
        console.log('itemsRef: ',itemsRef.current);
        await setTags(
        itemsRef.current.map(d => <TailCard key={d.galContentId} item={d}/>)
        )
    };



  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl p-5">한국관광공사 사진 정보 서비스</h1>
      <div className="w-7/10 p-5 flex flex-row justify-center items-center">
        <TailInput type="text" name="name" ref={kwRef} />
        <TailButton text="검색" color="blue" onHandle={handleSearch}/>
        <TailButton text="취소" color="blue" onHandle={handleCancel}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {tags}
      </div>
    </div>
  )
}
