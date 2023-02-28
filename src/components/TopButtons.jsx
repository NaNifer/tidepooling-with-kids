import React from 'react'

function TopButtons() {

    const cities = [
        {
            id: 1,
            title:"Point Reyes"
        },
        {
            id: 2,
            title:"Halfmoon Bay"
        }, {
            id: 3,
            title:"Santa Cruz"
        }, {
            id: 4,
            title:"Pacifica"
        },
    ]


  return (
    <div  className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button className='text-white text-large f'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons