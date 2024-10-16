import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopNavigation from './TopNavigation';

function Dashboard() {

    let dispatch = useDispatch();

    const storeObj = useSelector((store) => {
        console.log(store);
        return store.loginReducer; 
    });

    const { loginDetails } = storeObj; 

    let deleteProfile = async ()=>{
        let reqOptions ={
            method:"DELETE",
        }
        let jsonData = await fetch(`http://localhost:4567/deleteProfile?email=${storeObj.loginDetails.email}`,reqOptions);
        let jsoData = await jsonData.json();
        alert(jsoData.msg);
    };
    
    return (
        <div>
            <TopNavigation />
            <h1>Dashboard</h1>
            <button onClick={()=>{
                deleteProfile(); 
            }}>Delete Profile</button>
            <button onClick={()=>{
                dispatch({type:"assignTask", data:1});
            }}>Assign Task</button>
            <button onClick={()=>{
                dispatch({type:"submitTask", data:2});
            }}>Submit Task</button>
            <button onClick={()=>{
                dispatch({type:"approveTask", data:3})
            }}>Approve Task</button>
            <button onClick={()=>{
                dispatch({type:"rejectTask", data:4})
            }}>Reject Task</button>
            <br></br>
            <button onClick={()=>{
                dispatch({type:"applyLeave", data:1});
            }}>Apply Leave</button>
            <button onClick={()=>{
                dispatch({type:"rejectLeave", data:2});
            }}>Reject Leave</button>
            <button onClick={()=>{
                dispatch({type:"postponeLeave", data:3})
            }}>Postpone Leave</button>
            <button onClick={()=>{
                dispatch({type:"cancelLeave", data:4})
            }}>Cancel Leave</button>
            {loginDetails ? (
                <>
                    <h1>{loginDetails.firstName} {loginDetails.lastName}</h1>
                    <img 
                        src={`http://localhost:4567/${loginDetails.profilePic}`} 
                        alt={`${loginDetails.firstName} ${loginDetails.lastName}`} 
                    />
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}

export default Dashboard;
