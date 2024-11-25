'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
import { SiApple, SiBinance, SiGoogle } from 'react-icons/si'
import { 
    // MessageCircleWarningIcon,
     OctagonAlert, QrCode, 
     XCircle} from 'lucide-react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import loginSchema from '@/types/forms/loginForm'
// import { Form } from '../ui/form'
import CountryCodeSelect from '@/constants/CountryCodeSelect'
import { isNumericOnly } from '@/lib/utils'

const LoginForm = () => {
    // const form = useForm<z.infer<typeof loginSchema>>({
    //     resolver: zodResolver(loginSchema),
    //     defaultValues: {
    //         countryCode: 98,
    //         phoneNumber: "",
    //         email: ""
    //     },
    // })
    const [input, setInput] = useState<string>("")

    const [error, setError] = useState<string | null>(null)
    const [countryState, setCountryState] = useState<{ name: string, code: number, flag: string } | undefined>(undefined)
    const onSubmit = async () => {

        if (input === "") {
            setError("Please enter a valid email or phone number. Spaces or special characters are not allowed for phone numbers.")
            return;
        }

        // fomr
    }

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className='flex flex-row items-center justify-start gap-2'>
                    <SiBinance size={30} color="#F3BA2F" />
                    <h1 className='text-[#F3BA2F]'>Binance</h1>
                </CardTitle>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='text-2xl font-bold'>Log in</h1>
                    <Button variant={'ghost'}><QrCode /></Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col items-center justify-center w-full'>
                    {/* <Form {...form}> */}
                    <div className=" w-full">
                        <div className='flex flex-row items-center justify-center gap-4 w-full'>
                            <div className={input.length < 3 || !isNumericOnly(input) ? "hidden" : ""}>
                                <CountryCodeSelect onChange={(d: { name: string, code: number, flag: string }) => setCountryState(d)} currentState={countryState ?? {name: "Iran", code: 98, flag: "IR"}} />

                            </div>
                            <div className={`flex flex-row items-center justify-center w-full`}>
                                <Input className='w-full'
                                 onChange={e => {setInput(e.target.value); setError(null)}}
                                 value={input} 
                                 placeholder='Email/Phone (without country code)' />
                                 {input !== "" && <XCircle className='pl-2 text-gray-500 cursor-pointer' onClick={() => setInput("")} />}
                            </div>
                        </div>
                                {!!error && <p className=' my-6 text-start gap-2 flex flex-row text-xs items-center justify-start text-red-500'><OctagonAlert size={16} strokeWidth={0.5} /> {error}</p>}
                        <div>
                        </div>
                        <Button color="" className='mt-10 w-full transition-all hover:bg-yellow-400 bg-yellow-400 hover:opacity-75 text-black' onClick={onSubmit}>Next</Button>
                    </div>
                    {/* </Form> */}
                    <section className='mt-10' />
                    <div className='w-full flex flex-row items-center justify-between'>
                        <section className='w-2/5 border border-gray-400' />
                        <section className='w-1/5 text-center text-gray-400'>or</section>
                        <section className='w-2/5 border border-gray-400' />

                    </div>
                    <div className='flex flex-col gap-4 items-center justify-start w-full'>
                        <Button variant={"outline"} className='w-full text-center'><SiGoogle />Continue with Google</Button>
                        <Button variant={"outline"} className='w-full text-center'><SiApple />Continue with Apple</Button>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default LoginForm