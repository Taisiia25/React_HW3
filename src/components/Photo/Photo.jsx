import './style.css';
import React, {useState} from 'react';

const Photo = ({ onSave, onPrevious, photoInfo }) => {
    const [file, setFile] = useState(photoInfo);

    const onNext = () => {
        if (file) {
            onSave(file)
        }
    }

    const onBack = () => {
        if (file) {
            onPrevious(file)
        }
    }

    const onChange = (event) => {
        setFile(event.target.files[0]);
    }

    console.log(file)

    return (
        <div className="container">
        <p className="step">Step 3</p>
                <label className='upload' for="fileInput">
                    Upload Photo
                    <input className='inputPhoto' id="fileInput" type="file" name='photo' onChange={onChange}/>
                </label>
                {file && <img src={window.URL.createObjectURL(file)} alt="" />}
        <button onClick={onBack}>Previous</button>
        <button onClick={onNext} disabled={!file}>Next</button>
    </div>
    )
}

export default Photo;