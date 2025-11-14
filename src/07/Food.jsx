import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import { useState } from "react"
import TailButton from "../components/TailButton"

const categories =[ 
    ...new Set( fooddata.map(item => item["운영주체 분류"].replaceAll(' ','')) )
]

export default function Food() {
    const [foodData, setfoodData] = useState(fooddata)

    const onClickAll = () => {
        setfoodData(fooddata);
    }
    const onClickCat = (cat) => {
        let tm = fooddata.filter(item => item["운영주체 분류"].replaceAll(' ', '') === cat );
        setfoodData(tm);
    }

    return (
        <>
            <div className="flex flex-row justify-center">
                <TailButton color="blue" text="전체" onHandle={onClickAll} />
                {categories.map( cat => <TailButton color="blue" text={cat} onHandle={() => onClickCat(cat)} /> )} 
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {foodData.map((item, idx) => <FoodCard key={item["연락처(대표번호)"] + idx} data={item}/>)}
            </div>
        </>
    )
}
