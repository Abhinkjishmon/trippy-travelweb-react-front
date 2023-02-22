import React from 'react'
import TripData from './TripData'

const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique
                destinations using Google Maps.
            </p>
            <div className="tripcard">
                <TripData
                    image="https://images.pexels.com/photos/758742/pexels-photo-758742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    heading="Trip in Indonesia"
                    text="Indonesia officially the Republic of Indonesia 
                    is a country in Southeast Asia and Oceania between the Indian and pacific oceans.
                    It consists of over 17,000 islands including Sumatr, Java, Sulawesi and parts of Borneo and New Guinea"
                />
                <TripData
                    image="https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    heading="Trip in Malaysia"
                    text="Malaysia is a Southeast Asia country occupying parts of the Malay peninsula and the island of Borneo.It's known 
                    for its beaches,rainforests and mix of Malay,Chinese,Indian and European cultural influences."
                />
                <TripData
                    image="https://images.pexels.com/photos/6535658/pexels-photo-6535658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    heading="Trip in France"
                    text="France, in western Europe,encompasses medieval cities, alpine villages and Mediterranean 
                    beaches. Paris,it's capital,is famed for its fashion houses, classical art museums including 
                    the Louvre and monuments like the Eiffel Tower."
                />
            </div>
        </div>
    )
}

export default Trip