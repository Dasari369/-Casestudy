package com.sonata.demo.Dao;

import java.sql.SQLException;
import java.util.List;

import com.sonata.demo.User;

public interface UserInterface {
	
	 public void addUser(User user) throws SQLException;

	List<User> getUsers();

}
