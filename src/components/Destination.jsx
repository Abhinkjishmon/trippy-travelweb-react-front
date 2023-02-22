import React from 'react';
import './Destination.css'
import { DestinationData } from './DestinationData';

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the oppertunity to see a lot within a time frame.</p>

            <DestinationData
                className="first-des"
                heading="Taal Volcano,Batangas"
                text="One of the most iconic views in Luzon, Mt. Taal boasts a
            volcano inside a lake inside an island. if you fancy a closer
            look, the hike up to the crater is a mere 45 minutes, and is
            easy enough for beginners. Guides will assist you most of
            the way, and you'll see the peculiar environment found on
            an active volcano, incuding volcanic rocks and steam
            vents. The hike can be dusty and hot, so plan for an early
            morning trip, and then unwind with some bulalo before
            heading back home!"
                img1="https://images.pexels.com/photos/2408244/pexels-photo-2408244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                img2="https://images.pexels.com/photos/1058633/pexels-photo-1058633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <DestinationData
                className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="If you're looking for a hike that's a little more challenging
            but still good for a beginner mountaineer, check out Mt. 
            Daguldul in San Juan, Batangas. You'll start your hike from
            the beach and pass through tropical forest, different rock 
            formations, and small streams. There's a small store 
            halfway up the trail where you can take a break and drink 
            buko juice, and though the summit itself may not have the 
            best view, the breeze is fantastic. Once you've made it 
            back down, head straight to the beach for a refreshing, 
            well-deserved swim."
                img2="https://images.pexels.com/photos/705075/pexels-photo-705075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                img1="https://images.pexels.com/photos/12220325/pexels-photo-12220325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
        </div>
    )
}

export default Destination