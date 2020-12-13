import React, { useEffect, useState } from 'react';  
import axios from 'axios';
import {Card, CardImg} from 'reactstrap';
import Loader from '../components/Loader';



const UserImages =({userId}) =>{
    const [userImages,setUserImages]=useState([]);
    const [isloading, setIsLoading] = useState(true);
    
    useEffect(()=>{
         axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${userId}`)
        .then(result=>{
        setUserImages(result.data)
        setIsLoading(false)

        })
        .catch(error =>{
            console.log('ERROR:',error)
        
        })
    },[userId])

    if(isloading){
        return <Loader /> 
      }

    return(
        <div style={{display:"flex", flexWrap:"wrap", alignItems:"center"}}>
        {userImages.map((eachImg,index) => {          
                return(
                    <Card>
                      <CardImg src={eachImg.url} alt="Card image cap" style={{width:"200px",height:"170px", margin:"3px"}} />
                    </Card>
                )
            })}
        </div>
    )

}
export default UserImages;