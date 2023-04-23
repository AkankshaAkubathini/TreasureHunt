
import {useState,useEffect} from 'react'
function Users(){
    let[users,setUsers]=useState([])
    useEffect(()=>{
       fetch('https://reqres.in/api/users?page=1')
       .then(res=>res.json())
       .then(apidata=>setUsers(apidata.data))
       .catch(err=>console.log(err))
    },[])
    return(
        <div className="text-center container">
            <h1 className="dispay-4 text-info">List of Our Top Scorers</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map(userObj=><tr key={userObj.id}>
                        <td>{userObj.id}</td>
                        <td>{userObj.email}</td>
                        <td>{userObj.first_name}</td>
                        <td>{userObj.last_name}</td>
                        <td>
                            <img src={userObj.avatar} alt="no img"/>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}
export default Users