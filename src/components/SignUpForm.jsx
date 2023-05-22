import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from '@/components/Button';

export function SignUpForm() {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [messageInputValue, setMessageInputValue] = useState("");
  
  function onSubmit(data) {
    axios
      .post("https://eor6oxgitmbxn1m.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Thanks for reaching out! Check your inbox for updates 😊`
        );
        setEmailInputValue("");
        setMessageInputValue("");
      })
      .catch((e) => console.error(e));
  }

  return (
    <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="pb-5">
        <input
          {...register("email")}
          value={emailInputValue}
          onChange={(e) => setEmailInputValue(e.target.value)}
          required
          type="email"
          name="email"
          placeholder="Email address"
          className="bg-transparent outline outline-1 outline-gray-500 px-12 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" 
        />
      </div>
      <div className='pb-5'>
        <textarea
          {...register("message")}
          value={messageInputValue}
          onChange={(e) => setMessageInputValue(e.target.value)}
          required
          type="text"
          name="message"
          placeholder="Message"
          className="bg-transparent outline outline-1 outline-gray-500 px-12 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15"  
        >
        </textarea>
      </div>
      <Button type="submit" role="submit" arrow className="w-1/4">
        Say hello
      </Button>
      {successMessage && <p className="mt-5">{successMessage}</p>}
    </form>
  )
}
