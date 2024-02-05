"use client"

import React from "react";
import { useState } from "react";
import { FormEvent } from "react";
import {motion} from "framer-motion"
import { useTheme } from "@/components/themeProvider";
import { sendEmail } from "@/components/sendEmail";


export default function Contact() {

  

  const {theme} = useTheme();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendEmail(email, message);
    console.log("sending email to " + email + " with message " + message);  
  }
    // Here you would handle the form submission, such as sending the email and message to a server
    console.log({ email, message });
    return (
      <main> 
        <motion.div 
          className="flex flex-col items-center justify-center p-4"
          initial={{x: -200, opacity: 0}}
          animate ={{x:0, opacity: 1}}
          transition={{duration: 0.5}}
        >
          <div className={`${theme == 'light' ? 'bg-slate-200 ' : 'bg-slate-600 ' }  shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4`}>
            <h2 className="text-2xl mb-4 text-center">Contact Me</h2>
            <p>
              Please contact me directly at <a href="mailto:mickey022302@gmail.com" className="underline">mickey022302@gmail.com</a> or through this form.
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="mb-4">
                <label htmlFor="email" className="block  text-sm font-bold mb-2">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-slate-900"
                  aria-label="Text area, enter your email address"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`text-slate-900 shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  rows={4}
                  aria-label="Text area, enter your email message"
                />
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" aria-aria-label="Submit email button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </main>
    );
  }