package com.sonata.demo;

import java.sql.SQLException;

public interface ValidateUserInterface {

	public boolean validateUser (String Username,String password) throws SQLException;
}
