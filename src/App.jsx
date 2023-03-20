
import './App.css';
import React, {useReducer} from 'react';
import Login from './components/Login/Login';
import Adress from './components/Adress/Adress';
import Photo from './components/Photo/Photo';
import Password from './components/Password/Password';
import Result from './components/Result/Result';
import reducer from './Reducer';
import initialState from './store';

const App = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleSaveUserInfo = (user) =>
    dispatch({type: 'SET_USER_INFO', payload: user});

    const handleSaveUserAdress = (adress) =>
    dispatch({type: 'SET_USER_ADRESS', payload: adress});

    const handleSavePhoto = (file) => {
    dispatch({type: 'SET_PHOTO', payload: file});
    }

    const handleSavePassword = (password) => {
        dispatch({type: 'SET_PASSWORD', payload: password});
    }

    const onNextStep = () => dispatch({type: 'ADD_STEP'});

    const onPreviousStep = () => dispatch({type: 'PREVIOUS_STEP'});

    const onSaveLogin = (value) => {
        handleSaveUserInfo(value);
        onNextStep();
    }

    const onSaveAdress = (value) => {
        handleSaveUserAdress(value);
        onNextStep();
    }

    const onPreviousToLogin = (value) => {
        handleSaveUserAdress(value);
        onPreviousStep();
    }

    const onSavePhoto = (value) => {
        handleSavePhoto(value);
        onNextStep();
    } 
    const onPreviousToAdress = (value) => {
        handleSavePhoto(value);
        onPreviousStep();
    }

    const onSavePassword = (value) => {
        handleSavePassword(value);
        onNextStep();
    } 

    const onPreviousToPhoto = (value) => {
        handleSavePassword(value);
        onPreviousStep();
    }
  
    return (
        <div className="app">
            {state.step === 0 && <Login onSave={onSaveLogin} userInfo={state.user}/>};
            {state.step === 1 && <Adress onSave={onSaveAdress} onPrevious={onPreviousToLogin} adressInfo={state.adress}/>};
            {state.step === 2 && <Photo onSave={onSavePhoto} onPrevious={onPreviousToAdress} photoInfo={state.photo}/>};
            {state.step === 3 && <Password onSave={onSavePassword} onPrevious={onPreviousToPhoto} passwordInfo={state.password}/>};
            {state.step === 4 && <Result userData={state}/>};
        </div>
    )
} 

export default App;
