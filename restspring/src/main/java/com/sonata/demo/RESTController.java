package com.sonata.demo;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.demo.Dao.TaskInterface;
import com.sonata.demo.Dao.UserInterface;

@RestController
public class RESTController {
	@Autowired
	TaskInterface task;
	
	@Autowired
	UserInterface DefaultUser;
	
	
	
	
	@GetMapping(value = "/task")

 @RequestMapping(value = "/task", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public Task getTask() {
		return task.getTask();	
	}
	
	//get all tasks
	@RequestMapping(value="/tasks",method = RequestMethod.GET,produces= {"application/json","application/xml"})
	public List<Task> getTasks() {
		
		
		return task.getTasks();
		
      }
	
	//set priority
	 @RequestMapping(value="/priority/{taskID}/{priority}",method=RequestMethod.GET,produces= {"application/json","application/xml"})
	
	public List<Task> setPriority( @PathVariable int taskID, @PathVariable String priority) throws SQLException
	{
		int row = task.setPriority(taskID, priority);
		return task.getTasks();
	} 
	
	/*  @RequestMapping(value="/taskid/{taskID}/notes/{notes}/bookmark/{isBookMarked}",method=RequestMethod.GET,produces= {"application/json","application/xml"})
	 public List<Task> setBookMark(@PathVariable int taskID,@PathVariable String notes,@PathVariable boolean isBookMarked) throws SQLException
	 {
	//	int row = task.setBookMark(taskID, notes, isBookMarked);
		 return task.getTasks();
	 }  */
	 
	 //set Bookmark
	 
	 @RequestMapping(value="/taskid/{taskID}/bookmark/{isBookMarked}",method=RequestMethod.GET,produces= {"application/json","application/xml"})
	 public List<Task> setBookMark(@PathVariable int taskID,@PathVariable boolean isBookMarked) throws SQLException
	 {
		int row = task.setBookMark(taskID,isBookMarked);
		 return task.getTasks();
	 }
	 
	 
	 @RequestMapping(value="/taskid/{taskID}/notes/{notes}",method=RequestMethod.GET,produces= {"application/json","application/xml"})
	 public List<Task> setBookMark(@PathVariable int taskID,@PathVariable String notes) throws SQLException
	 {
		int row = task.setNotes(taskID, notes);
		 return task.getTasks();
	 }
	 
	 @RequestMapping(value="/taskid/{taskID}/user/{OwnerID}",method=RequestMethod.GET,produces= {"application/json","application/xml"})
	 public List<Task> setTask(@PathVariable int taskID,@PathVariable int OwnerID) throws SQLException
	 {
		 int row = task.assignTask(taskID,OwnerID);
		 return task.getTasks();
	 }
	 
	 
	 
	
	 
	 
	 @RequestMapping(value="/task/{taskID}",method=RequestMethod.GET,produces= {"application/json","application/xml"})
	 public List<Task> searchById(@PathVariable int taskID) throws SQLException
	 {
		 return task.getById(taskID);
	 }
	 
	 @RequestMapping(value="/status/{status}",method=RequestMethod.GET,produces= {"application/json","application/xml"})
	 public List<Task> searchByStatus(@PathVariable String status ) throws SQLException
	 {
		 return task.getByStatus(status);
	 }

 
	 @PostMapping(value= "/newtask", consumes = "application/json", produces = "application/json")
	public List<Task> insert(@RequestBody Task Task) throws SQLException
	{
		 task.addTask(Task);
        return task.getTasks();
        
	 } 
	 
 @PostMapping(value= "/newuser", consumes = "application/json", produces = "application/json")
	 public List<User> insert(@RequestBody User user) throws SQLException
		{
	        
	      DefaultUser.addUser(user);
	       return DefaultUser.getUsers();
		 } 
	 
	 
	 
}
