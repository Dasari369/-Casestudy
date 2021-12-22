package com.sonata.demo;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.demo.Dao.TaskInterface;
import com.sonata.demo.Dao.UserInterface;

//@CrossOrigin(origins="http://localhost:4200/")
@CrossOrigin(origins="http://localhost:3000/")

@RestController
@RequestMapping("/api")
public class RESTController {
	@Autowired
	TaskInterface taskservice;
	
	@Autowired
	UserInterface DefaultUser;
	
	
	// Returns all tasks 
	@RequestMapping(value="/tasks",method=RequestMethod.GET,produces= {"application/json"})
	public List<Task> getTasks() {
		
		
		return taskservice.getTasks();
		
      }
	
	//Update task details
	@PutMapping("/tasks/{taskID}")
	public void Update(@PathVariable int taskID,@RequestBody Task task) throws SQLException
	{
		  taskservice.updateTaskStatus(taskID,task);
	}
	
	
	//delete task 
	@DeleteMapping("/tasks/{taskID}")
	public List<Task>Delete(@PathVariable int taskID) throws SQLException
	{
		 taskservice.deleteTask(taskID);
		 return taskservice.getTasks();
	}
	
	
	// Login validation returns true or false 
	@GetMapping("/user/{userName}/{password}")
	public boolean Authentication(@PathVariable String userName,@PathVariable String password) throws SQLException
	{
		return DefaultUser.validateUser(userName, password);
	}
	
	
	
	
	//Gets task by id 

	@GetMapping("/tasks/{taskID}")
	public Task getTask(@PathVariable int taskID) {
		return taskservice.getTask(taskID);	
	}
	
	  //add new task
		 @PostMapping(value= "/tasks", consumes = "application/json", produces = "application/json")
		public List<Task> insert(@RequestBody Task Task) throws SQLException
		{
			 taskservice.addTask(Task);
	        return taskservice.getTasks();
	        
		 } 
		 
		 
		 // returns all users
		 @RequestMapping(value="/users",method=RequestMethod.GET,produces= {"application/json"})
			public List<User> getUsers() {
				
				
				return DefaultUser.getUsers();
				
		      }
		 //returns users by id
		 @GetMapping("/users/{userID}")
			public User getUser(@PathVariable int userID) throws SQLException {
				return DefaultUser.getUser(userID);	
			}
		 
		//Update user details
			@PutMapping("/users/{userID}")
			public void Update(@PathVariable int userID,@RequestBody User user) throws SQLException
			{
				  DefaultUser.updateUser(userID, user);
			}
			
			//delete user
			@DeleteMapping("/users/{userID}")
			public void DeleteUser(@PathVariable int userID) throws SQLException
			{
				DefaultUser.deleteUser(userID);
			}
			
		 
	
	
	//set priority
	 @RequestMapping(value="/tasks/{taskID}/{priority}",method=RequestMethod.GET,produces= "application/json")
	
	public Task setPriority( @PathVariable int taskID, @PathVariable String priority) throws SQLException
	{
		int row = taskservice.setPriority(taskID, priority);
		return taskservice.getTask(taskID);
	} 
	
	/*  @RequestMapping(value="/taskid/{taskID}/notes/{notes}/bookmark/{isBookMarked}",method=RequestMethod.GET,produces= {"application/json","application/xml"})
	 public List<Task> setBookMark(@PathVariable int taskID,@PathVariable String notes,@PathVariable boolean isBookMarked) throws SQLException
	 {
	//	int row = task.setBookMark(taskID, notes, isBookMarked);
		 return task.getTasks();
	 }  */
	 
	 
	 
	 //set Bookmark
	 
	 @RequestMapping(value="/tasks/{taskID}/bookmark/{isBookMarked}",method=RequestMethod.GET,produces= "application/json")
	 public Task setBookMark(@PathVariable int taskID,@PathVariable boolean isBookMarked) throws SQLException
	 {
		int row = taskservice.setBookMark(taskID,isBookMarked);
		 return taskservice.getTask(taskID);
	 }
	 
	 //set notes
	 @RequestMapping(value="/tasks/{taskID}/notes/{notes}",method=RequestMethod.GET,produces= "application/json")
	 public Task setBookMark(@PathVariable int taskID,@PathVariable String notes) throws SQLException
	 {
		int row = taskservice.setNotes(taskID, notes);
		 return taskservice.getTask(taskID);
	 }
	 
	//set status 
	 @RequestMapping(value="/tasks/{taskID}/status/{status}",method=RequestMethod.GET,produces= "application/json")
	 public Task setStatus(@PathVariable int taskID,@PathVariable String status) throws SQLException
	 {
		int row = taskservice.setStatus(taskID, status);
		 return taskservice.getTask(taskID);
	 }
	 
	 //assign task to user
	 
	 @RequestMapping(value="/tasks/{taskID}/user/{userID}",method=RequestMethod.GET,produces= "application/json")
	 public Task setTask(@PathVariable int taskID,@PathVariable int userID) throws SQLException
	 {
		 int row = taskservice.assignTask(taskID,userID);
		 return taskservice.getTask(taskID);
	 }
	 //search task by id
	  @RequestMapping(value="/tasks/{taskID}",method=RequestMethod.GET,produces= "application/json")
	 public Task searchById(@PathVariable int taskID) throws SQLException
	 {
		 return taskservice.getById(taskID);
	 }
	 
	  //search task by status
	 @RequestMapping(value="/tasks/status/{status}",method=RequestMethod.GET,produces= "application/json")
	 public List<Task> searchByStatus(@PathVariable String status ) throws SQLException
	 {
		 return taskservice.getByStatus(status);
	 }

  
	 
	 //add new user
 @PostMapping(value= "/user", consumes = "application/json", produces = "application/json")
	 public List<User> insert(@RequestBody User user) throws SQLException
		{
	        
	      DefaultUser.addUser(user);
	       return DefaultUser.getUsers();
		 } 
	 
	 
	 
}
