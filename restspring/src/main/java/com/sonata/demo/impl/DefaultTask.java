package com.sonata.demo.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sonata.demo.Task;
import com.sonata.demo.User;
import com.sonata.demo.Dao.TaskInterface;
import com.sonata.demo.db.DBconnection;

@Component
public class DefaultTask implements TaskInterface {

	
	@Autowired
	DBconnection db;
	@Autowired
	Task task;
	
	int row;
	
	
	List<Task> tlist = new ArrayList<>();
	
	 @Override
	public Task getTask() {
		Task t  = new Task();
		t.setTaskID(210);
		t.setTname("write controller");
		t.setDesc("description");

		return t;
	 }

	@Override
	public List<Task> getTasks() {
		
			try {
				PreparedStatement ps1 = db.getConnection().prepareStatement("select * from task");
				ResultSet rs = ps1.executeQuery();
				while(rs.next()) {
					Task t1 = new Task();
			    t1.setTaskID(rs.getInt(1));
			    t1.setOwnerID(rs.getInt(2));
			    t1.setCreatorID(rs.getInt(3));
			    t1.setTname(rs.getString(4));
			    t1.setDesc(rs.getString(5));
			    t1.setStatus(rs.getString(6));
			    t1.setPriority(rs.getString(7));
			    t1.setNotes(rs.getString(8));
			    t1.setBookMarked(rs.getBoolean(9));
			    t1.setCreatedon(rs.getTimestamp(10));
			    t1.setStatusChangedOn(rs.getTimestamp(11));
			    tlist.add(t1);
			   }
			}catch(SQLException se) {se.printStackTrace();}
	        return tlist;
	        }

	@Override
	public int setPriority(int id,String priority) throws SQLException {
		
			PreparedStatement psu = db.getConnection().prepareStatement("update task  set IsBookmarked = ? where task_id=?");
			psu.setString(1,priority);
			psu.setInt(2,id);
			 row = psu.executeUpdate();
			 return row;		
			
	}

	@Override
	public void addTask(Task task) throws SQLException {
		PreparedStatement ps = db.getConnection().prepareStatement("insert into task values(?,?,?,?,?,?,?,?,?,?,?)");
		ps.setInt(1,task.getTaskID());
		ps.setInt(2,task.getOwnerID());
		ps.setInt(3,task.getCreatorID());
		ps.setString(4,task.getTname());
		ps.setString(5, task.getDesc());
		ps.setString(6, task.getStatus());
		ps.setString(7,task.getPriority());
		ps.setString(8, task.getNotes());
		ps.setBoolean(9, task.isBookMarked());
		ps.setTimestamp(10,task.getCreatedon());
		ps.setTimestamp(11,task.getStatusChangedOn());
		row = ps.executeUpdate();
		db.closeConnection();
		tlist.add(task);
		
	}
	
	/* public int setBookMark(int id,String notes,boolean bookmark) throws SQLException
	{
		PreparedStatement psu = db.getConnection().prepareStatement("update task  set notes=?, IsBookmarked = ? where task_id=?");
		psu.setString(1, notes);
		psu.setBoolean(2,bookmark);
		psu.setInt(3,id);
		 row = psu.executeUpdate();
		  return row;		
		
	}  */

 public int setBookMark(int id,boolean bookmark) throws SQLException
{
	PreparedStatement psu = db.getConnection().prepareStatement("update task  set IsBookmarked = ? where task_id=?");
	psu.setBoolean(1,bookmark);
	psu.setInt(2,id);
	 row = psu.executeUpdate();
	  return row;		
}

 public int setNotes(int id,String notes) throws SQLException
{
	PreparedStatement psu = db.getConnection().prepareStatement("update task  set notes=? where task_id=?");
	psu.setString(1,notes);
	psu.setInt(2,id);
	 row = psu.executeUpdate();
	  return row;		
}
 
 public int assignTask(int taskid, int ownerid) throws SQLException
 {
	 PreparedStatement psu = db.getConnection().prepareStatement("update task set owner_id=?  where task_id=?");
	 psu.setInt(1, ownerid);
	 psu.setInt(2, taskid);
	 row = psu.executeUpdate();
	 return row;
 }
 
 public List<Task> getById(int taskid) 
 {
	 List<Task> list = new ArrayList<>();
	 try {
			PreparedStatement ps1 = db.getConnection().prepareStatement("select * from task where task_id=?");
			 ps1.setInt(1, taskid);
			ResultSet rs = ps1.executeQuery();
			while(rs.next()) {
				Task t1 = new Task();
		    t1.setTaskID(rs.getInt(1));
		    t1.setOwnerID(rs.getInt(2));
		    t1.setCreatorID(rs.getInt(3));
		    t1.setTname(rs.getString(4));
		    t1.setDesc(rs.getString(5));
		    t1.setStatus(rs.getString(6));
		    t1.setPriority(rs.getString(7));
		    t1.setNotes(rs.getString(8));
		    t1.setBookMarked(rs.getBoolean(9));
		    t1.setCreatedon(rs.getTimestamp(10));
		    t1.setStatusChangedOn(rs.getTimestamp(11));
		    list.add(t1);
		   }
		}catch(SQLException se) {se.printStackTrace();}
     return list;
     }

@Override
public List<Task> getByStatus(String status) {
	List<Task> list = new ArrayList<>();
	 try {
			PreparedStatement ps1 = db.getConnection().prepareStatement("select * from task where status=?");
			 ps1.setString(1, status);
			ResultSet rs = ps1.executeQuery();
			while(rs.next()) {
				Task t1 = new Task();
		    t1.setTaskID(rs.getInt(1));
		    t1.setOwnerID(rs.getInt(2));
		    t1.setCreatorID(rs.getInt(3));
		    t1.setTname(rs.getString(4));
		    t1.setDesc(rs.getString(5));
		    t1.setStatus(rs.getString(6));
		    t1.setPriority(rs.getString(7));
		    t1.setNotes(rs.getString(8));
		    t1.setBookMarked(rs.getBoolean(9));
		    t1.setCreatedon(rs.getTimestamp(10));
		    t1.setStatusChangedOn(rs.getTimestamp(11));
		    list.add(t1);
		   }
		}catch(SQLException se) {se.printStackTrace();}
    return list;
	}

  
	   
   }
 

	 
 
	
	
			
			
	
			
		


