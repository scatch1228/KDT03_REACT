import { useRef } from "react";

//export default function TailSelect({id, title, optionKeys, optionValues, onHandle}) {
export default function TailSelect({id, title, data, onHandle, refv}) {
    const options = Object.entries(data).map((d,idx)=><option key={idx} value={d[0]}>{d[1]}</option>);

    return (
        <form className="max-w-sm mx-auto">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <select id={id} 
            onChange={onHandle}
            ref={refv}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="selected">{title} 선택</option>
                {options}
            </select>
        </form>
    )
}
