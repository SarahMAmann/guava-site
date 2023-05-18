import { useId } from 'react'

import { Button } from '@/components/Button'

export function SignUpForm() {
  let id = useId()

  return (
    // <form className="relative isolate mt-8 flex flex-col items-center pr-1">
    //   <label htmlFor={id} className="sr-only">
    //     Email address
    //   </label>
    //   <input
    //     required
    //     type="email"
    //     autoComplete="email"
    //     name="email"
    //     id={id}
    //     placeholder="Email address"
    //     className="peer w-0 flex-auto  px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
    //   />
    //   <label htmlFor={1} className="sr-only">
    //     message
    //   </label>
    //   <input
    //     required
    //     type="text"
    //     autoComplete=""
    //     name="message"
    //     id={1}
    //     placeholder="Message"
    //     className="peer w-0 flex-auto s px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
    //   />
    //   <Button type="submit" arrow>
    //     Say hello
    //   </Button>
    //   {/* <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
    //   <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" /> */}
    // </form>
    <form className="flex flex-col items-center mt-10 ">
      <div className="pb-5">
        <input
          required
          type="email"
          name="email"
          placeholder="Email address"
          className="bg-transparent outline outline-1 outline-gray-500 px-12 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" 
        />
      </div>
      <div className='pb-5'>
        <textarea
          required
          type="text"
          name="message"
          placeholder="Message"
          className="bg-transparent outline outline-1 outline-gray-500 px-12 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15"  
        >
        </textarea>
      </div>
      <Button type="submit" arrow className="w-1/4">
        Say hello
      </Button>
    </form>
  )
}
