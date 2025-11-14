import TailButton from '../components/TailButton'
import { useRef, useEffect } from 'react'

export default function MyCal() {
    //input 요소 ref 연결
    const n1Ref = useRef();
    const n2Ref = useRef();
    const n3Ref = useRef();
    const optionRef = useRef();

    //첫번째 input에 포커스가 놓이면
    const handleN1 = () => {
        n1Ref.current.value ="";
        n2Ref.current.value ="";
        n3Ref.current.value ="";
    }

    //button click
    const handleClick = (e) => { //e는 이벤트를 의미
        e.preventDefault(); //버튼을 눌렀을 때 원래 페이지로 돌아오는 것을 방지

        let num1 = n1Ref.current?.value ?? ""; //?. 은 null일 경우를 포함. ?? 연산자는 null일 경우의 지정된 값을 부여. 여기선 ""
        let num2 = n2Ref.current?.value ?? "";
        let option = optionRef.current?.value ?? "+" ;
        let num3;
        switch(option) {
            case "+" : num3 = Number(num1) + Number(num2); break;
            case "-" : num3 = Number(num1) - Number(num2); break;
            case "*" : num3 = Number(num1) * Number(num2); break;
            case "/" :  (num2 == "0" || num2 =="")  ? num3="0으로 나눌 수 없다!"
                                    : num3 = Number(num1) / Number(num2); 
                                    break;
        }

        n3Ref.current.value = num3;
    }

    //page load
    useEffect(()=>{
        n1Ref.current.focus(); //페이지에 입장했을 때 커서가 이곳에 가있다
    },[]);

  return (
    <div className='h-8/10 flex flex-col justify-center items-center'>
      <form className='flex flex-row bg-amber-50'>
        <input ref={n1Ref} type='number' name='n1' className='border-2 m-5 bg-white'/>
        <select ref={optionRef}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input ref={n2Ref} type='number' name='n2' className='border-2 m-5  bg-white' />
        <TailButton color="blue" text="=" onHandle={handleClick}/>
        <input ref={n3Ref} type='text' name='n3' readOnly className='border-2 m-5  bg-gray-100'/>
      </form>
    </div>
  )
}
