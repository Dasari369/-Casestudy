package com.sonata.demo.Dao;

import java.sql.SQLException;
import java.util.List;

import com.sonata.demo.Task;
import com.sonata.demo.User;

public interface UserInterface {
	
	 public void addUser(User user) throws SQLException;

	List<User> getUsers();
	public boolean validateUser (String username,String password) throws SQLException;
	public User getUser(int id) throws SQLException;
	public void updateUser(int id,User user) throws SQLException;
	public void deleteUser(int id)  throws SQLException;
	

}
