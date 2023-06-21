import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'


function Contact() {

  const ref = useRef();
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('vashYan', 'template_55y44ce', ref.current, 'GEMXQ6OS3QXHJhDNU')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });
  }

  return (
    <div className="contact">
      <form ref={ref} className="form-contact" onSubmit={handleSubmit}>
        <h1 className="title-contact-us">Contact Us</h1>
        <label>Name:</label>
        <input
          placeholder="..."
          className="input-contact-name"
          required
          type="text"
          name='name'
        />
        <label>Email:</label>
        <input
          placeholder="..."
          className="input-contact-email"
          required
          type="email"
          name='email'
        />
        <label>Your Message:</label>
        <textarea
          placeholder="If you have something to say, please right it down here."
          className="textarea"
          required
          rows={10}
          name='message'
        />
        <button type="submit" className="send-btn">
          Send
        </button>
        {success && "Thanks! We'll contact you later!"}
      </form>
    </div>
  )
}

export default Contact