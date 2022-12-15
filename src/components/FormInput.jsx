import React, { useState } from 'react'

const FormInput = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <form action="">
            <p>{values.name}</p>
            <p>{values.email}</p>
            <p>{values.password}</p>
              <input type="text" name="name" onChange={(e) => handleChange(e)} />
              <input type="email" name="email" onChange={(e) => handleChange(e)} />
              <input type="password" name="password" onChange={(e) => handleChange(e)} />
        </form>
    </div>
  )
}

export default FormInput;