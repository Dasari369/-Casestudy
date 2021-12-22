package com.sonata.demo.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sonata.demo.Task;
import com.sonata.demo.User;
import com.sonata.demo.Dao.UserInterface;
import com.sonata.demo.db.DBconnection;

@Component
public class DefaultUser implements UserInterface {
	
	@Autowired
	DBconnection db;
	
     int row=0;
     
     
     @Autowired
     User user = null;
     
     boolean c;
     
    
     
    
     
     @Override
 	public List<User> getUsers() {
    	 List<User> ulist = new ArrayList<>();
 		try {
 			PreparedStatement ps1 = db.getConnection().prepareStatement("select * from user");
 			ResultSet rs = ps1.executeQuery();
 			while(rs.next())
 			{
 			User u = new User();
 			u.setUserID(rs.getInt(1));
 			u.setUserName(rs.getString(2));
 			u.setEmail(rs.getString(3));
 			u.setFirstName(rs.getString(4));
 			u.setLastName(rs.getString(5));
 			u.setContactNumber(rs.getLong(6));
 			u.setRole(rs.getString(7));
 			u.setActive(rs.getBoolean(8));
 			u.setdOB(rs.getDate(9));
 			u.setCreatedOn(rs.getTimestamp(10));
 			u.setPassword(rs.getString(11));
 			ulist.add(u);
 			}
 		}catch(SQLException se) {se.printStackTrace();}
            return ulist;
      }
     
	@Override
	public  void addUser(User user) throws SQLException {
		List<User> ulist = new ArrayList<>();
		   PreparedStatement ps = db.getConnection().prepareStatement("insert into user values(?,?,?,?,?,?,?,?,?,?,?)");
			ps.setInt(1,user.getUserID());
			ps.setString(2, user.getUserName());
			ps.setString(3,user.getEmail());
			ps.setString(4,user.getFirstName());
			ps.setString(5,user.getLastName());
			ps.setLong(6,user.getContactNumber());
			ps.setString(7, user.getRole());
			ps.setBoolean(8,user.isActive());
			ps.setDate(9, user.getdOB());
			ps.setTimestamp(10,user.getCreatedOn());
			ps.setString(11, user.getPassword());
		    row = ps.executeUpdate();
			db.closeConnection();
			ulist.add(user);
		
	}
	
	@Override
	public boolean validateUser (String username,String password) throws SQLException
	{
		
		PreparedStatement ps1 = db.getConnection().prepareStatement("select username,password from user where username=? and password=?");
		ps1.setString(1,username);
		ps1.setString(2,password);
		ResultSet rs = ps1.executeQuery();
		
		if(rs.next())
		{
	    return true;
		}
		else
		{
			return false;
		}
}
	 
	@Override
	public User getUser(int id) throws SQLException
	{
		User u1 = new User();
		 try {
				PreparedStatement ps1 = db.getConnection().prepareStatement("select * from user where  User_id=?");
				 ps1.setInt(1,id);
				ResultSet rs = ps1.executeQuery();
				while(rs.next()) {
			    u1.setUserID(rs.getInt(1));
			    u1.setUserName(rs.getString(2));
			    u1.setEmail(rs.getString(3));
			    u1.setFirstName(rs.getString(4));
			    u1.setLastName(rs.getString(5));
			    u1.setContactNumber(rs.getLong(6));
			    u1.setRole(rs.getString(7));
			    u1.setActive(rs.getBoolean(8));
			    u1.setdOB(rs.getDate(9));
			    u1.setCreatedOn(rs.getTimestamp(10));
			    u1.setPassword(rs.getString(11));
			   // list.add(t1);
			   }
			}catch(SQLException se) {se.printStackTrace();}
	         return u1;
		
	}
	
	@Override
	public void updateUser(int id,User user) throws SQLException{
		 PreparedStatement psu = db.getConnection().prepareStatement("update user set email=?,Role =?, isactive =?,contact_number=?,password=? where User_id =?");
	  		psu.setString(1,user.getEmail());
	  		psu.setString(2,user.getRole());
	  		psu.setBoolean(3, user.isActive());
	  		psu.setLong(4,user.getContactNumber());
	  		psu.setString(5,user.getPassword());
	  		psu.setInt(6, id);
	  		
	  		 row = psu.executeUpdate();
	    	  
	     }
	     
		
	
	
	@Override
	public void deleteUser(int id)  throws SQLException{
		PreparedStatement psu = db.getConnection().prepareStatement("delete from user where User_id=?");
   		psu.setInt(1,id);
   		 row = psu.executeUpdate();
		
	}
	
	
	
		
	}


