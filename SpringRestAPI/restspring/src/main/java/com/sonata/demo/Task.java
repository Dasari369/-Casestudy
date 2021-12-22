package com.sonata.demo;
import java.sql.Timestamp;



import org.springframework.stereotype.Component;

@Component
public class Task {
	private int taskID;
	private int OwnerID;
	private int CreatorID;
	private String Tname;
	private String desc;
	private String status;
	private String priority;
	private String notes;
	private boolean isBookMarked;
	private Timestamp Createdon;
	private Timestamp statusChangedOn;
	public int getTaskID() {
		return taskID;
	}
	public void setTaskID(int taskID) {
		this.taskID = taskID;
	}
	public int getOwnerID() {
		return OwnerID;
	}
	public void setOwnerID(int ownerID) {
		this.OwnerID = ownerID;
	}
	public int getCreatorID() {
		return CreatorID;
	}
	public void setCreatorID(int creatorID) {
		this.CreatorID = creatorID;
	}
	public String getTname() {
		return Tname;
	}
	public void setTname(String tname) {
		this.Tname = tname;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public boolean isBookMarked() {
		return isBookMarked;
	}
	public void setBookMarked(boolean isBookMarked) {
		this.isBookMarked = isBookMarked;
	}
	public Timestamp getCreatedon() {
		return Createdon;
	}
	public void setCreatedon(Timestamp createdon) {
		this.Createdon = createdon;
	}
	public Timestamp getStatusChangedOn() {
		return statusChangedOn;
	}
	public void setStatusChangedOn(Timestamp statusChangedOn) {
		this.statusChangedOn = statusChangedOn;
	}
	
	
	
	
		
}
