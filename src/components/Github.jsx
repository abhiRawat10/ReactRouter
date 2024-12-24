import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData]=useState({});

    useEffect(()=>{
        fetch('https://api.github.com/users/abhiRawat10')
        .then((res)=>{return res.json()})
        .then(res=>setData(res));
    },[])
  return (
    <>
    <div className='text-3xl bg-black-700 align-middle text-center p-5'>Followers=10{data.followers}</div>
    <div className='text-3xl bg-gray-700 align-middle text-center p-5'>
        <img width={300} height={300} src={data.avatar_url} alt="profile"></img>
    </div>
    </>
    
  )
}

export default Github