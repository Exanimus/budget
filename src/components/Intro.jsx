import React from 'react'
import illustration from '../assets/illustration.jpg'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { fetchData, postData } from '../helpers'

const Intro = () => {
  const navigate = useNavigate()

  const createAccount = (event) => {
    event.preventDefault()
    postData('userName', event.target.elements.name.value)
    toast.success(`Welcome, ${fetchData('userName')}`)
    navigate('/')
  }

  return (
    <div className="intro">
      <div>
        <h1>Take Control of <span className="accent">Your Money</span></h1>
        <p>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
        <form onSubmit={createAccount}>
          <input name="name" type="text" placeholder="What is your name?" required />
          <button className="btn btn--dark">
            <span>Create Account</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em"><path fillRule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM6 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zm4.5 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clipRule="evenodd" /><path fillRule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" /></svg>
          </button>
        </form>
      </div>
      <img src={illustration} alt="" />
    </div>
  )
}

export default Intro