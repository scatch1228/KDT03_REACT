import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {
    const d1 = 'div1';
    const d2 = 'div2';
    const d3 = 'div3';
    return (
    <div className=" text-white bg-green-800 
    w-8/10 h-1/2
    flex flex-col justify-start items-start m-10 p-10
    ">
        <h2>{d1}</h2>
        <MyDiv2 dv1={d1} dv2={d2} dv3={d3}/> 
    </div>
    )
}