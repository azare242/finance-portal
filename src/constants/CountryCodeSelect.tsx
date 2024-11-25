'use client'
// import { Button } from '@/components/ui/button'
import {
    AlertDialog,
    // AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    // AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import country_codes from '@/constants/phone_numbers.json'
const constractData = () => country_codes.countries.map((item) => ({
    code: parseInt(item.code),
    name: item.name,
    flag: item.countryShortName
}))


import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { isNumericOnly } from '@/lib/utils'
import { SquareChevronDown } from 'lucide-react'
import CountryItem from "./CountryItem"
import ReactCountryFlag from "react-country-flag"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CountryCodeSelect: React.FC<{ currentState?: { code: number, name: string, flag: string }, onChange: any }> = ({ currentState, onChange }) => {

    const countries = constractData()
    const [searchResults, setSearchResults] = useState(countries)
    const onSelect = (index: number) => {
        onChange(searchResults.find((_, idx: number) => index === idx))
    }
    const [search, setSearch] = useState<string>("")
    useEffect(() => {
        if (search === "") setSearchResults(countries)
        else if (isNumericOnly(search)) setSearchResults(countries.filter((item) => `${item.code}`.includes(`${search}`)))
        else setSearchResults(countries.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())))
    }, [search])
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger>
                    {/* <Button variant="ghost" > */}
                    <section className='py-1 pr-2 rounded-lg text-xs flex flex-row items-center justify-center gap-1 transition-all border'>

                        <p className='text-xl pl-2'>
                            {/* {currentState ? currentState.name : "Iran"} */}
                            <ReactCountryFlag  style={{height: "30px", width: "30px"}} svg countryCode={currentState ? currentState?.flag : "US"} />
                        </p>
                        <p  className=''>
                            {currentState ? currentState.code : "+98"}
                        </p>
                        <SquareChevronDown size={26} strokeWidth={0.5} />
                    </section>
                    {/* </Button> */}
                </AlertDialogTrigger>
                <AlertDialogContent>

                    <AlertDialogHeader>
                        <div className='flex flex-row items-center justify-between'>
                            <AlertDialogTitle>Select country/territory code </AlertDialogTitle>
                            <AlertDialogCancel className=''>X</AlertDialogCancel>

                        </div>
                        <AlertDialogDescription>
                            <Input placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    {/* <AlertDialogFooter className=''> */}
                    {searchResults.length === 0 && <p className='ml-auto mr-auto text-center'>Nothing Found!</p>}
                    {searchResults.length !== 0 && (
                        <div style={{ height: "300px", overflowY: "scroll", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start" }} className=''>
                            {searchResults.map((item, idx) =>
                            (
                                <CountryItem flag={item.flag} onClick={() => onSelect(idx)} selected={currentState ? currentState?.code : 98} key={idx} name={item.name} code={item.code} />
                            )
                            )}
                        </div>
                    )}
                    {/* </AlertDialogFooter> */}
                </AlertDialogContent>
            </AlertDialog>

        </>
    )
}

export default CountryCodeSelect