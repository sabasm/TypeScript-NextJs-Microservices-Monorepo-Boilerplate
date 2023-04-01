import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function ContactPage() {
  return (
    <UserLayout header={<h1>My App</h1>} footer={<p>&copy; My App</p>}>
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
    </UserLayout>
  )
}
