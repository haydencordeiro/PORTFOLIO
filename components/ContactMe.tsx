import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    fullname: string,
    email: string,
    subject: string,
    message: string
}
type Props = {}

function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:doshikaran005@gmail.com?subject=${formData.subject}&body=Hi, I am ${formData.fullname}. ${formData.message}`
    }
    return (
        <div className=' h-screen flex flex-col relative justify-center items-center text-center'>
            <h3 className='absolute uppercase top-24 tracking-[20px] text-slate-800'>
                Contact Me
            </h3>

            <div className=' flex flex-col space-y-10 mt-24'>
                <h4 className=' text-2xl font-semibold text-center'>
                    Let's Connect?
                </h4>

                <div className=' space-y-8'>
                    <div className=' flex items-center space-x-5'>
                        <PhoneIcon className=' text-black h-5 w-5 animate-pulse' />
                        <p>+1 2068225630</p>
                    </div>

                    <div className=' flex items-center space-x-5'>
                        <EnvelopeIcon className=' text-black h-5 w-5 animate-pulse' />
                        <p>kdoshi1@seattleu.edu || doshikaran005@gmail.com</p>
                    </div>

                    <div className=' flex items-center space-x-5'>
                        <MapPinIcon className=' text-black h-5 w-5 animate-pulse' />
                        <p> 1223, The Douglas Apartment 416D, E Cherry St, Seattle, WA 98122, USA.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto'>
                    <div className=' flex space-x-2'>
                        <input {...register('fullname')}
                            placeholder='FULL NAME'
                            className=' bg-slate-200 rounded-sm outline-none border px-6 py-6 transition-all text-sm focus:text-[#000000]/60 hover:border-[#000000]/60' type="text" />

                        <input {...register('email')}
                            placeholder='EMAIL ADDRESS'
                            className=' bg-slate-200 rounded-sm outline-none border px-6 py-6 transition-all text-sm focus:text-[#000000]/60 hover:border-[#000000]/60' type="text" />
                    </div>

                    <input {...register('subject')}
                        placeholder='SUBJECT'
                        className=' bg-slate-200 rounded-sm outline-none border px-6 py-6 transition-all focus:text-[#000000]/60 hover:border-[#000000]/60' type="text"></input>

                    <textarea {...register("message")}
                        placeholder='MESSAGE'
                        className=' bg-slate-200 rounded-sm outline-none border px-6 py-6 transition-all focus:text-[#000000]/60 hover:border-[#000000]/60' />

                    <button
                        type='submit'
                        className=' text-black font-bold uppercase'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe