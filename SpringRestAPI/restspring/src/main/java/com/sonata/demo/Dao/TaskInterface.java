package com.sonata.demo.Dao;

import java.sql.SQLException;
import java.util.List;

import com.sonata.demo.Task;


public interface TaskInterface {
	public Task getTask(int id);
	public List<Task> getTasks();
	public int setPriority(int id,String priority) throws SQLException;
	public void addTask (Task task) throws SQLException;
	//public int setBookMark(int id,String notes,boolean bookmark) throws SQLException;
	public int setBookMark(int id,boolean bookmark) throws SQLException;
	public int setNotes(int id,String notes) throws SQLException;
	public int setStatus(int id,String status) throws SQLException;
	public int assignTask(int taskid, int ownerid) throws SQLException;
	public Task getById(int taskid);
	public List<Task> getByStatus(String status);
	public void updateTaskStatus(int id,Task task) throws SQLException;
	public void deleteTask(int id)  throws SQLException;
	
	
}
