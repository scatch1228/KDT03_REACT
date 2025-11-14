import MyDiv3 from "./MyDiv3"

export default function MyDiv2(props) {
    return (
    <div className=" text-white bg-green-600 w-8/10 h-8/10
    flex flex-col justify-start items-start m-10 p-10
    ">
        <h2>{props.dv1} &gt; {props.dv2}</h2>
        <MyDiv3 dv1={props.dv1} dv2={props.dv2} dv3={props.dv3}/>
    </div>
    )
}