//ProviderComponent:

import { createContext  } from 'react'; 
// destructured "React" into "{useState, useEffect}"

import MyConsumerComponent1 from './MyConsumerComponent1.jsx'; 

export const MyContext = createContext();

function MyProviderComponent(){
  
  const providerValue = "Hello World";


	return(
    <>
      <h1>MyProviderComponent</h1>
      <MyContext.Provider value={providerValue}>
      <MyConsumerComponent1  consumerValue={providerValue}/>
      </MyContext.Provider>
    </>
  )

}
export default MyProviderComponent

/////////////////////////////////////////////////////////////////////////////////////////////////////

//ConsumerComponent_1:

import { useContext } from 'react';
// destructured "React" into "{useState, useEffect}"
import { MyContext } from './MyProviderComponent.jsx'; 


import MyConsumerComponent2 from './MyConsumerComponent2.jsx'; 

function MyConsumerComponent1(){

  const consumerValue = useContext(MyContext);

	return(
    <>
      <h1>MyConsumerComponent1</h1>
      <h2>{consumerValue}</h2>

      <MyConsumerComponent2 />
    </>
  )

}
export default MyConsumerComponent1

/////////////////////////////////////////////////////////////////////////////////////////////////////

//ConsumerComponent_2:

import { useContext } from 'react';
// destructured "React" into "{useState, useEffect}"
import { MyContext } from './MyProviderComponent.jsx'; 


function MyConsumerComponent2(){

  const consumerValue = useContext(MyContext);

	return(
    <>
      <h1>MyConsumerComponent2</h1>
      <h2>{consumerValue}</h2>
    </>
  )

}
export default MyConsumerComponent2