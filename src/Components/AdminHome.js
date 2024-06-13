import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import { Button } from 'react-bootstrap'
import Get from '../Action/Get'
import useUser_delete from '../Action/Delete'
import { useSelector } from 'react-redux'

function AdminHome() {
    const user_data = useSelector((state) => state.admin_data.admin_details);
    const {Get_data} = Get()
    const {user_delete} = useUser_delete()
    const[admin, setAdmin] = useState(true)
    console.log("dataddsf",user_data)
    console.log(user_data)
    const [search_text,setSearch_text]=useState("")
    const [filteruser,setfilteruser]=useState([])
    

  useEffect(()=>{
    Get_data("http://127.0.0.1:8000/admin_dashboard/",admin)
  },[])

  const deleteUser = (e) => {
    console.log(e)
    user_delete(e);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm)
    setSearch_text(searchTerm);
    
    const filter_data = user_data.filter((res) =>
      res.username.toLowerCase().includes(searchTerm)
    );
    
    setfilteruser(filter_data);
    console.log("filter_data", filter_data);
};

  if (!Array.isArray(user_data)) {
    return <div>Data is not in the correct format</div>;
}

if (!Array.isArray(filteruser)) {
    return <div>Data is not in the correct format</div>;
}


  return (
    <div>
      <AdminHeader/>
      <div className="row mb-3 p-2">
        
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search users..."
                        onChange={handleSearch}
                
                    />
                </div>
                <div className="col-auto">
                    <button
                        onClick={handleSearch}
                        className="btn btn-primary"
                    
                    >
                        Search
                    </button>
                </div>
            </div>
      <div className="container mt-5">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    
                    {(search_text?filteruser:
                    user_data).map((item, index) => (
                        <tr key={index}>
                        
                        <th scope="row">#{index}</th>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td><Button className='btn btn-danger'
                            onClick={() => deleteUser(item.id)}
                            >Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AdminHome
