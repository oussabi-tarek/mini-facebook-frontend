import { ErrorProps } from "../../types/Types"


export const Error=(props:ErrorProps)=>{
    return(
      <p className="text-red-500 text-xs italic">
      {props.error?.type==="required" && "Ce champ est requis"}
      {props.error?.type==="minLength" && "Ce champ doit contenir au moins 3 caractères"}
      </p>
      )
  }