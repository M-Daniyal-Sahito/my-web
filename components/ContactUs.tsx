import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');


  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_giz3r8g', 
          'template_pvg4fbs', 
          form.current,
          'w3KXz9n4InxcZ3eju' 
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatusMessage('Message successfully sent!');
            
            
            setName('');
            setEmail('');
            setMessage('');
            setFeedback('');

            
          
            setTimeout(() => setStatusMessage(''), 5000);
          },
          (error) => {
            console.log(error.text);
            setStatusMessage('Failed to send the message, please try again.');

            
            setTimeout(() => setStatusMessage(''), 5000);
          }
        );
    }
  };

  return (
    <div className='sm:overflow-x-hidden w-[1120px] my-[10px] mx-auto border-[9px] border-[#00FFF6] p-[20px] flex flex-col justify-center items-center flex-wrap text-center  '>
      <form ref={form} onSubmit={sendEmail}>
        <input className='w-4/5 border-2 border-[#00FFF6] rounded-[7px] text-[25px] text-white bg-black my-[10px] mx-0 outline-none py-[5px] px-[10px] sm:text-3xl'
          type="text" 
          name="user_name" 
          placeholder='Type your name!' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input className='w-4/5 sm:text-3xl text-[25px] border-2 border-[#00FFF6] rounded-[7px] text-white bg-black my-[10px] mx-0 outline-none py-[5px] px-[10px]'
          type="email" 
          name="user_email" 
          placeholder='Type your email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input className='w-4/5 text-[25px] sm:text-3xl border-2 border-[#00FFF6] rounded-[7px] text-white bg-black my-[10px] mx-0 outline-none py-[5px] px-[10px]'
          type="text" 
          name="user_message" 
          placeholder='Type your message' 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <input className='w-4/5 sm:text-3xl text-[25px] border-2 border-[#00FFF6] rounded-[7px] text-white bg-black my-[10px] mx-0 outline-none py-[5px] px-[10px]'
          type="text" 
          name="user_feedback" 
          placeholder='Type your feedback about my portfolio website' 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
        />
        <br />
        <button className='bg-[#00FFF6] text-3xl text-black py-[10px] px-5 rounded-[10px] font-bold relative  ' 
        type="submit">Submit</button>

      
        {statusMessage && <div className="statusMessage">{statusMessage}</div>}
      </form>
    </div>
  );
};

export default ContactUs;


