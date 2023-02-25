package com.menu.bean;

import lombok.Data;

@Data
public class MenuDTO {
	private int seqMenu;
	private String menuName;
	private String menuContent;
	private String menuPrice;
	private int categoryNum;
	private String menuImagePath;
	private int takeoutOpt;
	private int shotOpt;
	private int sizeOpt; 
}
