import React from 'react'
import './home.css';
import Banner from './banner';
import Card from './card';
function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
                 <Card
                    src="https://images.pexels.com/photos/276720/pexels-photo-276720.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    title="Online Experience"
                    description="Unique activities we can do together,
                    led by a world of hosts."
                />
                <Card
                    src="https://images.pexels.com/photos/3316923/pexels-photo-3316923.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    title="Online Experience"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="https://images.pexels.com/photos/706137/pexels-photo-706137.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    title="Online Experience"
                    description="Unique activities we can do together,
                    led by a world of hosts."
                />
              
            </div>
            <div className='home__section'>
                <Card
                    src="https://images.pexels.com/photos/5824519/pexels-photo-5824519.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    title="Online Experience"
                    description="Unique activities we can do together,
                    led by a world of hosts."
                    price="$400/night"
                />
                <Card
                    src="https://images.pexels.com/photos/6758788/pexels-photo-6758788.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    title="Online Experience"
                    description="Spaces that are more than just a place to sleep."
                    price="$350/night"
                />
                <Card
                    src="https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    title="Online Experience"
                    description="Unique activities we can do together,
                    led by a world of hosts."
                    price="$450/night"
                />
            </div>
        </div>
    )
}

export default Home;
