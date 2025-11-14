import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { guAtom,festivalFetchData } from "./AtomFestival";
import TailCard from "../components/TailCard"
import TailInput from "../components/TailInput";
import TailButton from "../components/TailButton";

const serviceKey = "c36b872e11a4ce7a8e05133a997bcafac2109f0202652081cdf8e17fa766483d";
let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${serviceKey}&pageNo=1&numOfRows=40&resultType=json` 

export default function JotaiFestival() {
  return(
  <Suspense fallback="<div>로딩중...</div>">
    <JotaiFestivalContent/>
  </Suspense>
  )
}

function JotaiFestivalContent() {
    const [tags, setTags] = useState([]);
    const [festivalData, setFestivalData] = useState([]);
    const [gu, setGu] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const selectRef = useRef();
    
    const location = useLocation();
    const returnedGu = null;//location.state.contents==null ? "" : location.state.contents;

    const getFetchData = async ()=>{
        //const items = useAtom(festivalFetchData);
        console.log('items= ',items)
        setFestivalData(items);
        setGu( [...new Set( items.map(d => d["GUGUN_NM"]) ) ].sort().map(g => 
              <option key={g} >{g}</option>) );
    };

    const handleChange = ()=>{
      //console.log("구: ", selectRef.current.value);
      
      (selectRef.current.value == "구/군")? setFilteredData([])
      :
      (returnedGu != null)? setFilteredData(
        festivalData.filter(d => d["GUGUN_NM"]==returnedGu)
      )
      :
      setFilteredData(
        festivalData.filter(d => d["GUGUN_NM"]==selectRef.current.value)
        );
    };

    useEffect(()=>{
        getFetchData();
        console.log('returnedGu: ',returnedGu);
    },[])

    /*useEffect(()=>{
      if(festivalData.length == 0) return;

      //console.log('festival data : ',festivalData)
      setFilteredData(festivalData);
    },[festivalData])*/

    useEffect(()=>{
      if(filteredData.length == 0) return;

      //console.log('filtered data : ',filteredData)
      setTags(
        filteredData.map((d, idx) => 
                              <Link key={d["UC_SEQ"] + idx} to="/Festival/Content" state={{contents:d}}>
                                <TailCard key={d["UC_SEQ"]} imgURL={d["MAIN_IMG_THUMB"]} title={d["TITLE"]} 
                                date={d["USAGE_DAY_WEEK_AND_TIME"]} p={d["MAIN_PLACE"]}/>
                              </Link>
                              )
        )
    },[filteredData])

    useEffect(()=>{
      //console.log('tags: ',tags);
    },[tags])

    useEffect(()=>{
      //console.log('부산시의 구들: ',gu);
    },[gu])


  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl p-5">부산축제정보</h1>
      <div className="w-7/10 p-5 flex flex-row justify-center items-center">
        <select className="border-1 p-1" ref={selectRef} onChange={handleChange}>
            <option key="1">구/군</option>
            {gu}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
        {tags}
      </div>
    </div>
  )
}
