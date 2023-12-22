import '../assesst/css/form.css';
import React from 'react'

const Form = () => {
  return (
    <div>
        <div className='form'>
            <form>
                <lable>Your Name</lable>
                <input type='text'></input>
                <lable>Your Email</lable>
                <input type='email'></input>
                <lable>Subject</lable>
                <input type='text'></input>
                <lable>Message</lable>
                <textarea rows="6" placeholder='Type yor message here'></textarea>
                <button className='btn btn-dark submit-btn'> Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form
