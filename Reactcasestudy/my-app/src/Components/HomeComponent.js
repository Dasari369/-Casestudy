import React from "react";
import{Route,Link,BrowserRouter as Router,Routes} from 'react-router-dom';

export default function Home()
{
    return(
       
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
           
            <li class="nav-link-active">
                <Link to="/tasks" class="nav-link" style={{color:"white"}}>All Tasks</Link>
            </li>

            <li class="nav-item">
                <Link to="/create" class="nav-link" style={{color:"white"}}>Create Task</Link>
            </li>

            <li class="nav-item">
                <Link to="/update"  class="nav-link" style={{color:"white"}}>Update BookMark</Link>
            </li>

            <li class="nav-item">
                <Link to="/priority" class="nav-link" style={{color:"white"}}>Set Priority</Link>
            </li >

            <li class="nav-item">
                <Link to="/assign" class="nav-link" style={{color:"white"}}>Assign Task</Link>
            </li>

            <li class="nav-item">
                <Link to="/search" class="nav-link" style={{color:"white"}}>SearchByID</Link>
            </li>

            <li class="nav-item">
                <Link to="/track" class="nav-link" style={{color:"white"}}>TrackStatus</Link>
            </li>

           

            <li class="nav-item">
                <Link to="/status" class="nav-link" style={{color:"white"}}>Update Status</Link>
            </li>

            <li class="nav-item">
                <Link to="/notes" class="nav-link" style={{color:"white"}}>Update Notes</Link>
            </li>
            <li class="nav-item">
                <Link to="/users" class="nav-link" style={{color:"white"}}>Get All users</Link>
            </li>
            <li class="nav-item">
                <Link to="/register" class="nav-link" style={{color:"white"}}>Register User</Link>
            </li>
            <li class="nav-item">
                <Link to="/delete" class="nav-link" style={{color:"white"}}>Delete Task</Link>
            </li>
            <form class="d-flex">
        <button class="btn btn-secondary"><Link to="/" class="nav-link" style={{color:"white"}}>Logout</Link></button>
      </form>
           
            
            </ul>
            </div>
            </nav>
           
        </div>
        
        
       
   
    
    )
}