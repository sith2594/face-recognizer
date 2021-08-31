import React from 'react'

const ImageLinkForm = ({onInputChange , onButtonSubmit}) => {
    return (
        <div>
            <p className = 'f3'>{'This magic will detect faces in your pictures.'}</p>
            <div className='center'>
                <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit} >
                    Detect
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm
