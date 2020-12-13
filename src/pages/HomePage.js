import React from 'react';  
import UserImages from '../containers/UserImages';
import {
  Card, CardImg, CardBody,
  CardTitle, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const HomePage = ({users}) =>{
    return(
        <div className="d-flex flex-wrap" style={{margin:"10px"}}>
            {users.map(user =>{
                return(
                <div key={user.id} className="row d-flex flex-wrap" style={{
                    backgroundColor:"#ffffff", marginBottom:"10px"
                        }}>
                    <Card className="col-3 d-flex align-items-center" style={{width:"25vw",textAlign:"center",borderStyle:"none", backgroundColor:"lightblue"}}>
                        <CardImg className="rounded-circle"top width="100%" src={user.profileImage} alt="Card image cap" style={{width:"80%", border:"4px solid white", marginTop:"15px"}} />
                        <CardBody>
                        <CardTitle>{user.username}</CardTitle> 
                         <Link to={`/users/${user.id}`}>
                            <Button style={{backgroundColor:"#0094f6", borderStyle:"none"}}>View Profile</Button>
                         </Link>       
                        </CardBody>
                    </Card>
                    <div className="col-9 d-flex flex-wrap" style={{paddingLeft:"10px"}}>
                        <UserImages userId ={user.id}/>
                    </div>
                </div >
                  
                  
                  )
                
            })}
        </div>

    )
}

export default HomePage;  