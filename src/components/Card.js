import React,{useState,useEffect} from 'react'
const Card = ({match}) => {

    const[userName,setUserName] = useState("")

    useEffect(() => {
        setUserName(match.params.user)
    }, [])
    
    return (
            <div 
        className="ui rasied very padded text container segment"
        style={{marginTop:"80px"}}
        >
            <h3 className="ui header">Card</h3>
            <h2>username : {userName}</h2>
        </div>
    )
}

export default Card
