import './style.css'
import React, {useState} from 'react'
const Adress = ({ onSave, onPrevious, adressInfo }) => {
    const [city, setCity] = useState(adressInfo.city);
    const [street, setStreet] = useState(adressInfo.street);
    const [house, setHouse] = useState(adressInfo.house);
    const [errors, setErrors] = useState({});

    const changeValue = (event) =>  {
        
        if (event.target.name === 'city') {
            setCity(event.target.value)

            if(!event.target.value) {
                setErrors({...errors, city: true})
            } else {
                setErrors({...errors, city: false})
            }
        }

        if (event.target.name === 'street') {
            setStreet(event.target.value)

            if(!event.target.value) {
                setErrors({...errors, street: true})
            } else {
                setErrors({...errors, street: false})
            }
        }

        if (event.target.name === 'house') {
            setHouse(event.target.value)

            if(!event.target.value) {
                setErrors({...errors, house: true})
            } else {
                setErrors({...errors, house: false})
            }
        }
    }

    const onBack = () => {
        onPrevious({city, street, house});
    }

    const onNext = () => {
        if (city && street && house) {
            onSave({city, street, house})
        }
    }
    return (
        <div className="container">
            <p className="step">Step 2</p>
            <form action="#">
               <label>
                City 
                    <input className={errors.city ? 'error' : ''} type="text" name='city' value={city} onChange={changeValue}/>
                    {errors.city && <span>City is required</span>}
                </label>
                <label>
                Street
                    <input  className={errors.street ? 'error' : ''} type="text" name='street' value={street} onChange={changeValue}/>
                    {errors.street && <span>Street is required</span>}
                </label>
                <label>
                House number
                    <input className={errors.house ? 'error' : ''} type="number" name='house' value={house} onChange={changeValue}/>
                    {errors.house && <span>House number is required</span>}
                </label>
            </form>
            <button onClick={onBack}>Previous</button>
            <button onClick={onNext} disabled={!city || !street || !house}>Next</button>
        </div>
    )
}

export default Adress;