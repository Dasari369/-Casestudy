import React from 'react';
import{Route,Link,BrowserRouter as Router,Routes} from 'react-router-dom';
import GetTaskData from './GetTaskData';


//import RegisterForm from './RegisterForm';

import CreateTaskComponent from './Components/CreateTaskComponent';
import UpdateTaskComponent from './Components/UpdateTaskComponent';
import UpdatePriority from './Components/UpdatePriority';
import AssignTask from './Components/AssignTask';
import SearchById from './Components/SearchById';
import TrackStatus from './Components/TrackStatus';
//import LoginComponent from './Components/LoginComponent';
import UpdateStatus from './Components/UpdateStatus';
import UpdateNotes from './Components/UpdateNotes';
import Userlist from './Components/Userlist';
import UserRegistration from './Components/UserRegistration';
import DeleteTask from './Components/DeleteTask';
import Redirect from './Components/login';
import Home from './Components/HomeComponent';


const routing =(
    <Router>
       <Routes>
            
             <Route path="/" element={<Redirect/>}/>
             <Route path="/home" element={<Home/>}/>
            <Route path="/tasks"  element={<GetTaskData/>}/>
            <Route path="/create" element={<CreateTaskComponent/>}/>
            <Route path = "/update" element={<UpdateTaskComponent/>}></Route>
            <Route path = "/priority" element={<UpdatePriority/>}></Route>
            <Route path="/assign" element={<AssignTask/>}></Route>
            <Route path="/search" element={<SearchById/>}></Route>
            <Route path="/track" element={<TrackStatus/>}></Route>
            <Route path="/status" element={<UpdateStatus/>}></Route>
            <Route path="/notes" element={<UpdateNotes/>}></Route>
            <Route path="/users" element={<Userlist/>}></Route>
            <Route path="/register" element={<UserRegistration/>}></Route>
            <Route path="/delete" element={<DeleteTask/>}></Route>
            <Route path="/login" element={<Redirect/>}></Route>
           
           

</Routes>
    </Router>
    
   
)
export default routing

