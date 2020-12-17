import React, { useEffect, useState } from 'react';  
import axios from 'axios';
import {Card, CardImg} from 'reactstrap';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';
import Comments from './Comments';
import Likes from './Likes';



const UserImages =({userId}) =>{
    const [userImages,setUserImages]=useState([]);
    const [isloading, setIsLoading] = useState(true);
    const location = useLocation()
    
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
            
            if (location.pathname === "/"){
                return(
                    <Card>
                      <CardImg src={eachImg.url} alt="Card image cap" style={{width:"200px",height:"170px", margin:"3px"}} />
                    </Card>
                ) 
            } else {
                return(
                    <div className="card col-12 col-sm-6 p-3" key={`${userId}-images${index}`}>
                        <img src={eachImg.url} height="250" />
                        <Likes imageId={eachImg.id}/>
                        <Comments imageId={eachImg.id}/>
                    </div>
                 
            )
            }
                
                
            })}
        </div>
    )

}
export default UserImages;