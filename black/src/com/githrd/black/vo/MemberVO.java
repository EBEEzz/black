package com.githrd.black.vo;

public class MemberVO {

private String name, id, mail;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	@Override
	public String toString() {
		return "MemberVO [name=" + name
					+ ", id=" + id + ", mail=" + mail + "]";
	}

}
