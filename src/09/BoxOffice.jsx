import { useState, useEffect } from "react";
import BoxOfficeCard from "./BoxOfficeCard";

//set yesterday
const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  let year = yesterday.getFullYear();
  let mon = yesterday.getMonth() + 1; //default = 0~11월
  let day = yesterday.getDate();

  return (year + '-' + String(mon).padStart(2, '0') + '-' + String(day).padStart(2, '0'));
}

export default function BoxOffice() {
  //useState field
  const [tags, setTags] = useState([]);
  const [info, setInfo] = useState();
  const [date, setDate] = useState(getYesterday());

  const handleShowInfo = (movie) => {
    let tm = `[${movie.movieNm} | ${movie.rankOldAndNew} : ${movie.openDt} | `
      + ` 상영한 스크린 수 : ${parseInt(movie.scrnCnt).toLocaleString()}]`;
    setInfo(tm);
  }

  const handleSelectDt = (e) => { //e= 이벤트를 인수로 가져올 수 있다.
    let dt = e.target.value;
    setDate(dt);
  }

  //fetch data here
  const getFetchData = (gdt) => {
    const apiKey = import.meta.env.VITE_MV_API;
    const baseUrl = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    let url = `${baseUrl}key=${apiKey}&targetDt=${gdt}`

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

        let createTags = dailyBoxOfficeList.map(data1 =>
          <BoxOfficeCard key={data1.rnum} item={data1} onHandle={() => handleShowInfo(data1)} />
        )

        setTags(createTags);
      })
      .catch((err) => console.log(err));
  }

  //when component created
  useEffect(() => {
    getFetchData(date.replaceAll('-', ''));
  }, [date])

  return (

    <div className="flex flex-col justify-center items-center">
      <h1 className="w-9/10 text-2xl font-bold text-center p-5">
        일일박스 오피스
      </h1>
      <form className="m-10 p-3 border-1">
        <input type="date" id="dt" max={getYesterday()} value={date} onChange={handleSelectDt} />
      </form>
      <table className="table-auto">
        <thead>
          <tr className='m-2'>
            <th className='p-1 m-2 border-1'>순위</th>
            <th className='p-1 m-2 border-1'>영화명</th>
            <th className='p-1 m-2 border-1'>매출액</th>
            <th className='p-1 m-2 border-1'>관객수</th>
            <th className='p-1 m-2 border-1'>누적 매출액</th>
            <th className='p-1 m-2 border-1'>누적 관객수</th>
            <th className='p-1 m-2 border-1'>증감율</th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
      <div className="w-9/10 h-14 m-5 p-5 flex justify-center items-center
                      border-1 bg-gray-200">
        {info}
      </div>
    </div>
  )
}
