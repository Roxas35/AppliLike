import React from "react"

export const Inscription = ({submit}) => {

    const initialValues = {firstname: '', lastname:'', password:'', email:'', gender:'', age: ''}
    const[formValues, setFormValues] = React.useState(initialValues)
    
    const handleSubmit = e => {
        e.preventDefault()
        submit(formValues)
    }

    const handleChange = e => {
        setFormValues(prev => ({...prev, [e.target.id] : e.target.value}))
    }

    return(
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>


            <label htmlFor="gender">Gender</label>
            <select id="gender" onChange={handleChange}required>
                <option hidden>Select gender</option>
                <option value={'man'}>Man</option>
                <option value={'woman'}>Woman</option>
                <option value={'trans'}>Trans</option>
            </select>

            <label htmlFor="firstname">Firstname</label>
            <input required id="firstname" value={formValues.firstname} onChange={handleChange}/>

            <label htmlFor="lastname">Lastname</label>
            <input required id="lastname" value={formValues.lastname} onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input required id="password" value={formValues.password} type={'password'} minLength='6' onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input required id="email" value={formValues.email} type={'email'} onChange={handleChange}/>

            <label htmlFor="age">Age</label>
            <input  required id="age" value={formValues.age} type={'number'} min={'18'} onChange={handleChange}/>

            <input type={'submit'} value={'envoyer'} />
        </form>
        </>
    )
}