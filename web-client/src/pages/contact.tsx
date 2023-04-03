import React from 'react'
import MainContent from '@/layouts/components/MainContent';

export default function ContactPage() {
  return (
    <MainContent>
      <h2>Contact Us</h2>
      <form action='/contact' method='post'>
        <label htmlFor='name'>Name:</label>
        <br />
        <input type='text' id='name' name='name' />
        <br />
        <label htmlFor='email'>Email:</label>
        <br />
        <input type='email' id='email' name='email' />
        <br />
        <label htmlFor='message'>Message:</label>
        <br />
        <textarea id='message' name='message'></textarea>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </MainContent>
  )
}
