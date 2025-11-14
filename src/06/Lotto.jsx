import React from 'react'
import TailBall from './TailBall'
import { useState } from 'react';
import TailButton from '../components/TailButton';

export default function Lotto() {
  let [tags, setTags] = useState([]);
  let [tags1, setTags1] = useState([]);
  let [bonus, setBonus] = useState();

  const rd = () => {
    tags.length >= 6 ? tags.length=0 : console.log("go");
    setTags([]);
    console.log(tags.length);
    
    let nums = new Set([]);
    while (nums.size < 7) {
      let n = Math.floor(Math.random() * 45 + 1);
      nums.add(n);
      console.log(nums);
    }
    nums = Array.from(nums);

    let tags1 = nums.map(num => <TailBall key={num} props={num} number={num}/>);
    setTags1(tags1);


    for(const num of nums) {
      tags.push(<TailBall key={num} props={num} number={num}/>);
      setTags(tags);
      console.log(tags);
    }

    setBonus(tags.pop());
    console.log(bonus);
  }


  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row items-center'>
        {tags1}
        +
        {bonus}
      </div>
      <TailButton onHandle={rd} text='로또생성' color='blue' />
    </div>
  )
}
