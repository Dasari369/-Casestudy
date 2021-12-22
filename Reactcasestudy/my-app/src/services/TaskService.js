import axios from 'axios';

const baseurl = "http://localhost:8080/api/tasks";
const url="http://localhost:8080/api/user";
const UserUrl = "'http://localhost:8080/api/users'"

class TaskService {

    getTasks(){
        return axios.get(baseurl);
    }

    createTask(Task){
        return axios.post(baseurl,Task);
    }

    AddBookMark(taskID,bookMarked){
        return axios.get(baseurl + '/' + taskID+'/bookmark/'+bookMarked);
    }

    setPriority(taskID,priority)
    {
        return axios.get(baseurl+'/'+taskID+'/'+priority);
    }

    assignTask(taskID,ownerID)
    {
        return axios.get(baseurl+'/'+taskID+'/user/'+ownerID)
    }
    getTaskByID(taskID)
    {
        return axios.get(baseurl+'/'+taskID)
    }
    SearchByStatus(status)
    {
        return axios.get(baseurl+'/status/'+status)
    }
    deleteTask(taskID)
    {
       return axios.delete(baseurl+'/'+taskID)
    }
    login(userName,password)
    {
        return axios.get(url+'/'+userName+'/'+password)
    }
     setStatus(taskID,status)
     {
         return axios.get(baseurl+'/'+taskID+'/status/'+status)
     }
     setNotes(taskID,notes)
     {
         return axios.get(baseurl+'/'+taskID+'/notes/'+notes)
     }
     createUser(user)
     {
         return axios.post('http://localhost:8080/api/user',user)
     }



    
}

export default new TaskService()