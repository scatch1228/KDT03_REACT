import TrafficNav from "./TrafficNav"
import { useState, useEffect, use } from "react"
import trafficData from "./교통사고통계.json"

//state변수들이 바뀌는 시점에 주의. 체인이 걸려있는 스테이트변수끼리는 반드시 그 전 체인에 있는 변수값이 변한 뒤에 후변수 값이 전변수 값을 잘 받아올 수 있도록 useEffect를 통해 체인시점을 지정.

export default function Traffic() {
    const[data, setData]= useState([]);
    const[c1, setC1] = useState([]);
    const[selectC1, setSelectC1] = useState();
    const[c2, setC2] = useState([]);
    const[selectC2, setSelectC2] = useState();
    const[stat, setStat] = useState([]);
    const[statEntry, setStatEntry] = useState([]);

    let serviceKey = "c36b872e11a4ce7a8e05133a997bcafac2109f0202652081cdf8e17fa766483d";
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=117&returnType=json&serviceKey=${serviceKey}`;

    const getFetchData= async ()=> {
        //setData(trafficData);
        const resp = await fetch(url);
        const dataResp = await resp.json();
        setData(dataResp.data);
    };

    //page load
    useEffect(()=>{
        getFetchData();
    }, []);
    //page load
    useEffect(()=>{
        let c1Set = new Set([]);
        //trafficData.map(item => c1Set.add( item["사고유형대분류"]));
        data.map(item => c1Set.add( item["사고유형대분류"]));
        setC1( Array.from(c1Set) );
        console.log('after data change C1: ',c1);
    }, [data]);
    //after selecting 대분류
    useEffect(()=>{
        console.log('선택된 c1: ',selectC1);
        let c2Set = new Set([]);
        //let filterBySelectC1 = trafficData.filter(item => item["사고유형대분류"] == selectC1 );
        let filterBySelectC1 = data.filter(item => item["사고유형대분류"] == selectC1 );
        filterBySelectC1.map(item => c2Set.add( item["사고유형중분류"]) );

        setC2( Array.from(c2Set));
        setSelectC2();
        setStatEntry([]);
        
    },[selectC1])

    useEffect(()=>{
        console.log('c1 선택후 c2: ',c2);
    },[c2])

    //after selecting 중분류    
    useEffect(()=>{
        if(!selectC1 || !selectC2) return;

        //setStat( trafficData.filter(item => item["사고유형대분류"] == selectC1 && item["사고유형중분류"] == selectC2) );
        setStat( data.filter(item => item["사고유형대분류"] == selectC1 && item["사고유형중분류"] == selectC2) );
    },[selectC2])

    useEffect(()=>{
        //console.log('key값들 ',Object.keys(stat[1]));
        //console.log('value값들 ',Object.values(stat[1]));

        let caseN = 0;
        let deathN = 0; 
        let heavyinjuryN = 0;
        let lightinjuryN = 0;
        let injuryReportN = 0;
        stat.map((item)=>{
            caseN += item["사고건수"];
            deathN += item["사망자수"]; 
            heavyinjuryN += item["중상자수"];
            lightinjuryN += item["경상자수"];
            injuryReportN += item["부상신고자수"];
        });
        setStatEntry([caseN, lightinjuryN, heavyinjuryN, deathN, injuryReportN]);
    },[stat])
/*
    useEffect(()=>{
        console.log('stat: ',stat, statEntry);
    },[statEntry])*/
  return (
    <div>
      교통사고
      {c1 && <TrafficNav key={1} catSize="대" catName={c1} selectC={selectC1} setSelectC={setSelectC1}/>}
      {c2 && <TrafficNav key={2} catSize="중" catName={c2} selectC={selectC2} setSelectC={setSelectC2}/> //c2가 null이 아니면
      } 
      <div>사고건수: {statEntry[0]}</div>
      <div>경상자수: {statEntry[1]}</div>
      <div>중상자수: {statEntry[2]}</div>
      <div>사망자수: {statEntry[3]}</div>
      <div>부상신고자수: {statEntry[4]}</div>
    </div>
  )
}
