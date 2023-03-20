import { useState } from 'react';
import './style.css'
const Password = ({onSave, onPrevious, passwordInfo}) => {
    const[password, setPassword] = useState(passwordInfo);
    const[confirmPassword, setConfirmPassword] = useState(passwordInfo);
    const [errors, setErrors] = useState({});

    const changeValue = (event) =>  {
        
        if (event.target.name === 'password') {
            setPassword(event.target.value);

            if(!event.target.value) {
                setErrors({...errors, password: true})
            } else {
                setErrors({...errors, password: false})
            }
        }

        if (event.target.name === 'confirmPassword') {
            setConfirmPassword(event.target.value)

            if(!event.target.value) {
                setErrors({...errors, confirmPassword: true})
            } else {
                setErrors({...errors, confirmPassword: false})
            }
        }
    }

        const onBack = () => {
            onPrevious(password);
        }
    
        const onNext = () => {
            if (password === confirmPassword) {
                onSave(password)
            }
        }

    return (
        <div className="container">
            <p className="step">Step 4</p>
            <form action="#">
               <label>
                Password 
                    <input className={errors.password ? 'error' : ''} type="password" name='password' value={password} onChange={changeValue}/>
                    {errors.password && <span>Password is required</span>}
                </label>
                <label>
                Confirm Password 
                    <input className={errors.confirmPassword ? 'error' : ''} type="password" name="confirmPassword" value={confirmPassword} onChange={changeValue}/>
                    {errors.confirmPassword && <span>Password confirmation is required</span>}
                </label>
            </form>
            <button onClick={onBack}>Previous</button>
            <button onClick={onNext}>Submit</button>
        </div>
    )
}

export default Password;