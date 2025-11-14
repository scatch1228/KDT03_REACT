import chgertype from "./chgertype.json"
import stat from "./stat.json"
import { useLocation } from "react-router-dom"

export default function ChargerDetail() {
    const loc = useLocation();
    const d = loc.state.contents;
  return (
    <>
    <h1 className="text-2xl font-bold my-10">{d.statNm} 충전소 정보</h1>
    <table className="border-1 py-2 my-10 mr-10">
        <tbody>
          <tr className="border-1 py-5 bg-gray-100">
            <th className="border-1 py-5">충전기타입</th>
            <th className="border-1 py-5">상태</th>
            <th className="border-1 py-5">주소</th>
            <th className="border-1 py-5">운영시간</th>
            <th className="border-1 py-5">담당사업자명</th>
            <th className="border-1 py-5">담당사업자전화</th>
          </tr>
          <tr>
          <td className="border-1 py-2 pl-3">{chgertype[d.chgerType]}</td>
          <td className="border-1 py-2 pl-3">{stat[d.stat]}</td>
          <td className="border-1 py-2 pl-3">{d.addr}</td>
          <td className="border-1 py-2 pl-3">{d.useTime}</td>
          <td className="border-1 py-2 pl-3">{d.busiNm}</td>
          <td className="border-1 py-2 pl-3">{d.busiCall}</td>
        </tr>
        </tbody>
      </table>
      </>
  )
}
