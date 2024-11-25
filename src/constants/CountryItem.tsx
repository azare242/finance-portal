import React from 'react'
import ReactCountryFlag from "react-country-flag"

// import style from './ccs.module.css'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CountryItem: React.FC<{flag: string, name: string, code: number, selected: number, onClick: any}> = ({flag, name, code, selected, onClick}) => {
  return (
    <div 
    onClick={onClick}
    style={{display: "flex", flexDirection: "row", alignItems:"center",
     justifyContent: "space-between",
    width:"100%"}}
    className={`py-5 cursor-pointer px-4  pl-1 transition-all hover:bg-slate-100 rounded-lg ${selected === code ? "text-yellow-300" : ""}`}>
    <p className='flex flex-row gap-2 items-center justify-start'>
    <ReactCountryFlag svg countryCode={flag} />
        {name}
    </p>
    <p >
        +{code}
    </p>
</div>
  )
}

export default CountryItem