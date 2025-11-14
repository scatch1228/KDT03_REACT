import { useLocation, Link } from "react-router-dom"
import TailButton from "../../components/TailButton";

export default function FestivalContents() {
    const location = useLocation();
    const contents = location.state.contents;
    //console.log(contents);
    return (
    <>
        <div className='flex flex-row w-300 m-5 border-1 p-5'>
            <img src={contents["MAIN_IMG_THUMB"]} />
            {/*
            <div className="flex flex-col m-2 border-1 p-2">
                <h2 className='font-bold text-xl'>{contents["SUBTITLE"]}</h2>
                <h3 className='font-semibold text-lg text-gray-600'>
                    기간: {contents["USAGE_DAY_WEEK_AND_TIME"]} 
                </h3>
                {contents["ADDR1"] != "" ?
                    <h3 className='font-semibold text-lg text-gray-600'>
                    장소: {contents["ADDR1"]} 
                </h3>
                :""}
                <p className='text-lg text-gray-600'>
                    <span className="font-semibold">대중교통: </span>  
                    {contents["TRFC_INFO"]} 
                </p>
                {contents["HOMEPAGE_URL"] == "" ? "" :  
                <p className='text-base text-gray-600'>
                        <span className="font-semibold">홈페이지: </span> 
                        <a href={contents["HOMEPAGE_URL"]}>
                            {contents["HOMEPAGE_URL"]}
                        </a>
                </p>} 
                
                <p className='text-gray-700 text-sm'>{contents["ITEMCNTNTS"]}</p>
            </div>
            
            <table className="flex flex-col m-2 border-1 p-2">
                <tbody className="text-sm">
                <tr>
                    <th>제목: </th>
                    <td>{contents["SUBTITLE"]}</td>
                </tr>
                <tr>
                    <th>기간: </th>
                    <td>{contents["USAGE_DAY_WEEK_AND_TIME"]}</td>
                </tr>
                <tr>
                    <th>장소: </th>
                    <td>{contents["ADDR1"]}</td>
                </tr>
                <tr>
                    <th>대중교통: </th>
                    <td>{contents["TRFC_INFO"]}</td>
                </tr>
                <tr>
                    <th>홈페이지: </th>
                    <td>{contents["HOMPAGE_URL"]}</td>
                </tr>
                <tr>
                    <th>내용: </th>
                    <td>{contents["ITEMCNTNTS"]}</td>
                </tr>
                </tbody>
            </table>
            */}
            <div className="flex flex-col m-2 p-2">
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r-1 text-right">제목</div>
                    <div className="m-1 w-160">{contents["TITLE"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r-1 text-right">기간</div>
                    <div className="m-1 w-160">{contents["USAGE_DAY_WEEK_AND_TIME"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r-1 text-right">장소</div>
                    <div className="m-1 w-160">{contents["ADDR1"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r-1 text-right">대중교통</div>
                    <div className="m-1 w-160">{contents["TRFC_INFO"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r-1 text-right">홈페이지</div>
                    <div className="m-1 w-160">{contents["HOMPAGE_URL"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r-1 text-right">내용</div>
                    <div className="m-1 w-160 text-sm">{contents["ITEMCNTNTS"]}</div>
                </div>
            </div>
        </div>
        <Link to="/Festival" state={{contents:contents["GUGUN_NM"]}}>
            <TailButton color="blue" text="돌아가기" 
            onHandle={//()=>handleChange()
            1}
            />
        </Link>
    </>
  )
}
