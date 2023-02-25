package com.event.bean;

import java.util.Date;

import lombok.Data;

@Data
public class EventDTO {
private int seqEvent;
private String subject;
private String content;
private Date logtime;
private String eventImagePath;
}
