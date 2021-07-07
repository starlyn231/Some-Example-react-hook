import React, {useState} from 'react'

function UserComponents() {
    const [name, setName] = useState('Jack')
  //  const [age, setAge] = useState(10)
   // const [isLegal, setLegal] = useState(false)
    //const [friends, setFriends] = useState(["John", "Luke"])

    return <h1> Hello World! My name is {name} </h1>
}

export default UserComponents
