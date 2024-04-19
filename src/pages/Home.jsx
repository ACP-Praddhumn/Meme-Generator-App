import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import {getAllMemes} from '../api/meme';
import MemeCard from '../components/Card';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        getAllMemes().then((meme) =>setData(meme.data.memes));
    },[]);


  return (
    <div className='row'>
        {
            data.map( el => <MemeCard img={el.url} title={el.name} />)
        }
    </div>
  )
}

export default Home