import TailSelect from "../components/TailSelect"
import SubwayBox from "./SubwayBox"
import sarea from "./sarea.json"
import { useEffect, useRef, useState } from "react"

const serviceKey = `c36b872e11a4ce7a8e05133a997bcafac2109f0202652081cdf8e17fa766483d`;
let date = new Date().toLocaleDateString();
let ctrNo = parseInt( date.replaceAll(". ","").replaceAll(".","")+"06" );
console.log('date = ',ctrNo);
const baseUrl = `http://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?pageNo=1&numOfRows=5&resultType=JSON&serviceKey=${serviceKey}`;

export default function Subway() {
    const selAreaRef = useRef();
    const sareaValues = Object.fromEntries( sarea.map(item=>Object.values(item)));
    const [stat, setStat] = useState();
    const [tags, setTags] = useState([]);
    let taglist = [];

    //console.log('data = ',sareaValues);
    const onSelect = async () => {
        taglist=[];
        console.log(selAreaRef.current.value);
        let url1 = baseUrl + `&areaIndex=${selAreaRef.current.value}`;

        for(let i=0; i<5; i++) {
            let url = url1;
            url+=`&controlnumber=${ctrNo+i}`;
            console.log('ctrNo=',ctrNo+i, 'url',url);
            let resp = await fetch(url);
            let data = await resp.json();
            //setStat(data.response.body.items.item[0]);
            taglist.push(<SubwayBox key={i} time={`${6+i}시`} data={data.response.body.items.item[0]}/>);
        }
        setTags(taglist);
    }

    useEffect(()=>{
        if (!stat) return;
        console.log('stat = ',stat);
        console.log('taglist = ',taglist);
    },[stat])
    
    useEffect(()=>{
        if (!tags) return;
        console.log('tags = ',tags);
    },[tags])

    return (
    <div>
        {date}
        <TailSelect id='selArea' refv={selAreaRef} title='측정소' data={sareaValues} onHandle={onSelect}/>
      {tags}
    </div>
  )
}
