import './style.css'
import React, {useState} from 'react'
const Login = ({ onSave, userInfo }) => {
    const [name, setName] = useState(userInfo.name);
    const [surname, setSurname] = useState(userInfo.surname);
    const [email, setEmail] = useState(userInfo.email);
    const [errors, setErrors] = useState({});

    console.log(errors)
    const changeValue = (event) =>  {
        
        if (event.target.name === 'name') {
            setName(event.target.value)
            
            if(!event.target.value) {
                setErrors({...errors, name: true})
            } else {
                setErrors({...errors, name: false})
            }
        }

        if (event.target.name === 'surname') {
            setSurname(event.target.value)

            if(!event.target.value) {
                setErrors({...errors, surname: true})
            } else {
                setErrors({...errors, surname: false})
            }
        }
        if (event.target.name === 'email') {
            setEmail(event.target.value)

            if(!event.target.value) {
                setErrors({...errors, email: true})
            } else {
                setErrors({...errors, email: false})
            }
        }
    }

    const onNext = () => {
        if (name && surname && email) {
            onSave({name, surname, email})
        }
    }
    return (
        <div className="container">
            <p className="step">Крок 1</p>
            <form action="#">
               <label>
                Name 
                    <input className={errors.name ? 'error' : ''} type="text" name='name' value={name} onChange={changeValue}/>
                    {errors.name && <span>Name is required</span>}
                </label>
                <label>
                Surname
                    <input className={errors.surname ? 'error' : ''} type="text" name='surname' value={surname} onChange={changeValue}/>
                    {errors.surname && <span>Surame is required</span>}
                </label>
                <label>
                Email
                    <input className={errors.email ? 'error' : ''} type="email" name='email' value={email} onChange={changeValue}/>
                    {errors.email && <span>Email is required</span>}
                </label>
            </form>
            <button onClick={onNext} disabled={!name || !surname || !email}>Next</button>
        </div>
    )
}

export default Login;