import React, { useState } from 'react'

function MyComponents() {

    const reyesGodos=[
        {
          nombre: "Ataúlfo",
          aficion: "comer toros sin pelar",
        },{
          nombre: "Recesvinto",
          aficion: "leer a Hegel en arameo",
        },{
          nombre: "Teodorico",
          aficion: "la cría del escarabajo en almíbar"
        }
      ]
    
      const [contador,setContador]=useState(0);
      const [mensaje,setMensaje]=useState(0)

      const Cambio=()=>{
        let nuevoContador = (contador + 1) % reyesGodos.length;
        if(contador+1  > reyesGodos.length){
            setContador(nuevoContador)

        }

       setContador(contador+1)
       setMensaje(<h2 className='text-2xl'>La aficion principal de <span className='colorRojo'> {reyesGodos[contador].nombre} </span>  es : <spa className="colorVerde"> {reyesGodos[contador].aficion} </spa> </h2>)    

      }

  return (
    <>
    <div className='flex   justify-center'>

        <button  onClick={Cambio}  className='border-black border-[1px] bg-[#4cd942] p-1 rounded'>Siguiente Actividad</button>
    </div>
    
        <span>{mensaje}</span>
    </>
  )
}

export default MyComponents