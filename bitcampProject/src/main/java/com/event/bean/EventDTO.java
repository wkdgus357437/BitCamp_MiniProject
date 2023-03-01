package com.event.bean;

import java.util.Date;

import lombok.Data;

@Data
public class EventDTO {
	
// seq	
private int seqEvent;

// 이벤트 제목
private String subject;

// 이벤트 내용
private String content;

// 이벤트 등록 시간
private Date logtime;

// 이벤트 이미지
private String eventImagePath;
}
