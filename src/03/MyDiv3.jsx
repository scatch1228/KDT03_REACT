//export default function MyDiv3(props) {
export default function MyDiv3({dv1,dv2,dv3}) {
    return(
    <div className=" text-white bg-green-400 w-8/10 h-8/10
    flex flex-col justify-start items-start m-10 p-10
    ">
        <h2>{dv1} &gt; {dv2} &gt; {dv3}</h2>
    </div>
    )
}