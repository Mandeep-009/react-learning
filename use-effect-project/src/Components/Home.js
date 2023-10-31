import React from 'react'
import {useState,useEffect} from 'react'

const Home = () => {
  const [data,setData] = useState([]);
  const [state,setState] = useState(2);
  useEffect(()=>{
    async function getData () {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      const res = await get.json()
      setData(res)
      console.log(res)
    }
    getData();

    
  },[state])
  function clickHandler (){
    setState(state+2);
  }
  return (
    <div>
      <button onClick={clickHandler}>{`My button ${state}`}</button>
      { 
          
          data.map((product,index)=>{
            return (
              <div key={index} className='card'>
                <h4>{product.firstName}</h4>
                <h4>{product.lastName}</h4>
                <h4>{product.address}</h4>
              </div>
            )
          
        })
      
      }
    </div>
  )
}

export default Home
