import React from 'react'

const Cartas = ({ cards = [] }) => {
  return (
    <div className='row'>
        {
            cards.map((item, index) => (
                <div key={index} className='col'>
                    <div className='card'>
                        <p></p>
                        <img src={item.imageUrl} alt=""></img>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default Cartas