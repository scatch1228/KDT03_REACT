import TailSelect from "../components/TailSelect"
import TailButton from "../components/TailButton"
import district from "./zcode.json"
import gugun from "./zscode.json"
import kind from "./kind.json"
import kindDetail from "./kinddetail.json"
import chgertype from "./chgertype.json"
import stat from "./stat.json"
import { useRef, useEffect, useState } from "react"
import ChargerCard from "./data/ChargerCard"
import ChargerDetail from "./ChargerDetail"
import { Route,Link } from "react-router-dom"

export default function ChargeInfo2() {
  const [isLoading, setIsLoading] = useState(false);
  const distRef = useRef();
  const [zcode, setZcode] = useState();

  const [gugunSt, setGugunSt] = useState([]);
  const gugunRef = useRef();
  const [zscode, setZscode] = useState();

  const kindRef = useRef();

  const [kindDetailSt, setKindDetailSt] = useState([]);
  const kindDetailRef = useRef();
  const [kdcode, setKdcode] = useState();

  const [result, setResult] = useState([]);
  const [statistic, setStatistic] = useState([]);

  const[routes, setRoutes] = useState([]);

  const serviceKey = "c36b872e11a4ce7a8e05133a997bcafac2109f0202652081cdf8e17fa766483d";

  const handleDist = () => {
    //setZcode(Object.keys(distRef.current.value));
    //console.log('distRef.current.value = ', distRef.current.value);
    setZcode(distRef.current.value);
    setGugunSt(Object.keys(gugun[distRef.current.value]));
  }

  const handleKind = () => {
    setKindDetailSt(Object.keys(kindDetail[kindRef.current.value]));
  }

  const handleZscode = () => {
    //console.log(Object.values(gugun[distRef.current.value])[gugunRef.current.value]);
    setZscode(Object.values(gugun[distRef.current.value])[gugunRef.current.value]);
  }

  const handleKindDetail = () => {
    //console.log(Object.values(kindDetail[kindRef.current.value])[kindDetailRef.current.value]);
    setKdcode(Object.values(kindDetail[kindRef.current.value])[kindDetailRef.current.value]);
  }

  const handleSearch = async () => {
    setResult([]);
    console.log('zcode=', zcode);
    console.log('zscode=', zscode);
    console.log('kind=', kindRef.current.value);
    console.log('kindDetail=', kdcode);

    if (zcode == null) {
      alert("시/도는 필수 항목입니다.");
    }
    else {
      setIsLoading(true);

      let url = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=${serviceKey}&dataType=JSON&pageNo=1&numOfRows=20&zcode=${zcode}`

      if (zscode != null) {
        url += `&zscode=${zscode}`;
      }
      if (kindRef.current.value != "selected") {
        url += `&kind=${kindRef.current.value}`;
      }
      if (kdcode != null && kdcode != undefined && kdcode != "selected") {
        url += `&kindDetail=${kdcode}`;
      }

      console.log(url);

      //start fetch
      let resp = await fetch(url);
      let data = await resp.json();
      //await console.log(data);
      //await console.log(data.items.item);

      if (data.totalCount == 0) {
        setResult([]);
        alert("해당하는 충전소가 존재하지 않습니다.");
      }
      
      //<Link>생성
      let items = await data.items.item.map((d, idx) => {
        //console.log(chgertype[d.chgerType]);
        return <Link to={`/ChargerInfo2/Detail`} key={d.statId+idx} state={{contents:d}}>
            <ChargerCard key={d.statId+idx} color="orange" title={d.statNm} />
        </Link>
      });
      await setResult(items);

      //route생성
      /*
      let route = await data.items.item.map((d, idx) => {
        //console.log(chgertype[d.chgerType]);
        return <Route path={`/ChargerInfo2/${d.statId}`} element={<ChargerDetail data={d}/>}>
        </Route>
      });
      await setRoutes(items);*/

      //통계 생성
      let stats = await Object.keys(stat).map(scode=> <ChargerCard key={stat[scode]+scode}
                                            color="blue"
                                            title={stat[scode]}
                                            num={data.items.item.filter(item=>item.stat==scode).length+`개`} />
                                            )
      await setStatistic(stats);

      //console.log(items);
      setIsLoading(false);
    }
  }//핸들서치

  const handleCancel = () => {
    setResult([]);
  }

  /*
  useEffect(() => {
    console.log(gugunSt);
  }, [gugunSt])
  */

  useEffect(()=>{
    setStatistic( Object.keys(stat).map(scode=> <ChargerCard key={stat[scode]+scode}
                                            color="blue"
                                            title={stat[scode]}
                                            num="?" />
                                            ))
  },[])

  return (
    <>
        {routes}
      <h1 className="text-3xl font-bold text-center m-10">전기차 충전소 정보2</h1>
      <div className='flex flex-row'>
        {/*<TailSelect id="sel1" title="시/도" optionKeys={values} optionValues={keys} onHandle={()=>{}}/>*/}
        <TailSelect id="sel1" title="시/도" data={district} onHandle={handleDist} refv={distRef} />
        <TailSelect id="sel2" title="지역구/군" data={gugunSt} onHandle={handleZscode} refv={gugunRef} />
        <TailSelect id="sel3" title="충전소구분" data={kind} onHandle={handleKind} refv={kindRef} />
        <TailSelect id="sel4" title="충전소상세" data={kindDetailSt} onHandle={handleKindDetail} refv={kindDetailRef} />
        <TailButton color="blue" text="검색" onHandle={handleSearch} />
        <TailButton color="orange" text="취소" onHandle={handleCancel} />
      </div>
      <div className='pl-15 w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7'>
            {statistic}
      </div>
      <div className='pl-15 w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7'>
        {result}
      </div>
          
      {isLoading &&
      <p>로딩중입니다..?!</p>}
    </>
  )
}
