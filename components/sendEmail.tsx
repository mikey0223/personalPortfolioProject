"use server"
import {Resend} from 'resend'


const resend = new Resend('re_Yt3EmPD5_7SSf2SWaN8fTgmBHsEz33dsh');

export const sendEmail = async (email: string, message: string) => {
    console.log("sending email from server")

    resend.emails.send({
        from: "onboarding@resend.dev", 
        to: 'michaelresend@gmail.com',
        subject: 'Personal Portfolio Email From ' + email,
        html: '<p>' + message + '</p>'
      })
}