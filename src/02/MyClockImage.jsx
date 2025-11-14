import './MyClockImage.css'

export default function MyClockImage() {
    return (
        <div className="
        flex justify-center w-3/4 
        border-5 border-dotted border-black-500 rounded-t-3xl
        opacity-50
        ">
            <img className="animation" src="../src/02/clock.png" alt="clock.png"/>
        </div>
    )
}