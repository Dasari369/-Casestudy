package com.sonata.demo.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sonata.demo.User;
import com.sonata.demo.Dao.UserInterface;
import com.sonata.demo.db.DBconnection;

@Component
public class DefaultUser implements UserInterface {
	
	@Autowired
	DBconnection db;
	
     int row=0;
     List<User> ulist = new ArrayList<>();
     
     @Autowired
     User user = null;
     
     @Override
 	public List<User> getUsers() {
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

}
