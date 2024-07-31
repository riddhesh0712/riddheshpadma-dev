import React from 'react'
import { useForm } from "react-hook-form"


const ContactForm = () => {
    const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    
    const response = await fetch("http://localhost:5000/", {method: "POST", headers: {"Content-Type" : "application/json"}, body: JSON.stringify(data)})
    console.log(data)
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-16">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <input {...register("name")} type="text" placeholder="Your Name" className="input-field" required />
                <input {...register("email")} type="email" placeholder="Your Email" className="input-field" required />
                <input {...register("number")} type="tel" maxLength={10} placeholder="Your Number" className="input-field" required />
                <input {...register("company")} type="text" placeholder="Your Company" className="input-field" required />
            </div>
            <textarea {...register("message")} placeholder="Your Message" rows="4" className="input-field" required></textarea>
            <div className='flex justify-center items-center py-10'>
                <button type='submit' className=" px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-white to-slate-200 relative hover:bg-gradient-to-r hover:from-white hover:to-slate-200 text-black transition-all ease-out duration-300">
                    <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-black opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                    <span className="relative text-xl font-semibold">Send Message</span>
                </button>
            </div>
        </form>
  </div>
  )
}

export default ContactForm