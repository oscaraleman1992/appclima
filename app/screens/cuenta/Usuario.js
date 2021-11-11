import React , {useState, useEffect} from "react"
import * as firebase from 'firebase/compat/app'
import  {auth}  from "../../utils/firebase"
import Loading from "../../componentes/loading"
import Registrado from "./Registrado"
import Registrarse from "./Registrarse"


export default function Usuario(){
    const [registro, setRegistro] = useState(null);

    useEffect(() => {
       auth.onAuthStateChanged((user) =>{
            !user ? setRegistro(false) : setRegistro(true)
        })
        
    }, [])

    if (registro===null) {
        return (<Loading isVisible={true} text="cargando..."/>);}

      if(registro){
          return <Registrado/>
      }else{
          return <Registrarse/>
      }
    
}