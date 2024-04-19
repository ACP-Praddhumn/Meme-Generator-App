import React, { createRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text'
import { exportComponentAsJPEG } from 'react-component-export-image';

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const memRef = createRef();

    const addText = ()=>{
        setCount(count+1);
    }
    
    
  return (
    <div >
        <div ref={memRef} style={{paddingBottom:'10px', width:'600px', border:'1px solid'}}>
            <img src={params.get('url')} width={'250px'}/>

            {Array(count).fill(0).map(e => (<Text/>))}
        </div>
        <Button onClick={addText}>Add Text</Button>
        <Button variant='success' onClick={(e)=> exportComponentAsJPEG(memRef)}>Save</Button>
    </div>
  )
}

export default EditPage