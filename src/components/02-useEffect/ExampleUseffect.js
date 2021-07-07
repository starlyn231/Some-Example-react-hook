import React,{useState, useEffect} from 'react'

export const ExampleUseffect = () => {
    const [name, setName] = useState('Nathan');
    useEffect(() => {
    console.log(`Hello I'm ${name}`);
    },[name]);

    return (
        <div>
           <p>{`Hello I'm ${name}`}</p>
<button
onClick={() => {
setName('Gary')
}}>
Change me
</button> 
        </div>
    )
}

export default ExampleUseffect