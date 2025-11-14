import CurrentTime from "./CurrentTime";
import MyClock from "../02/MyClock";

function Hello() {
    let name = "💎"
    return (
        <>
        <div className="flex flex-col justify-center items-center text-4xl font-bold text-black-400">
            Hello React? {`${name != ''? name : '꿻?'}님 안녕하세요?`}
            <CurrentTime/>
        </div>
        <MyClock />
        </>
    )
}

export default Hello;