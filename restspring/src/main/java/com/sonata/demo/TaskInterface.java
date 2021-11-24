package com.sonata.demo;

import java.sql.SQLException;
import java.util.List;

public interface TaskInterface {
	public Task getTask();
	public List<Task> getTasks();
	public int setPriority(int id,String priority) throws SQLException;
	public Task addTask (Task task) throws SQLException;
	//public int setBookMark(int id,String notes,boolean bookmark) throws SQLException;
	public int setBookMark(int id,boolean bookmark) throws SQLException;
	public int setNotes(int id,String notes) throws SQLException;
	
}
