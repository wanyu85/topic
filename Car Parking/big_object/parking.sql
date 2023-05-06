-- 新增資料庫
create database CarParking default character set utf8;

-- 新增資料表
create table carparking.carstay 
(sl_id int primary key NOT NULL, 
cs_name varchar(50), 
cs_type varchar(10) , 
cs_water varchar(5), 
cs_toilet varchar(5),
cs_lng varchar(12) ,
cs_lat varchar(12));

create table carparking.member
(member_id int primary key NOT NULL AUTO_INCREMENT, 
member_name  varchar(20),
member_ac  varchar(50), 
member_pass varchar(50) , 
member_phone varchar(50), 
member_email varchar(50),
member_money int DEFAULT 0);

create table carparking.license 
(license varchar(10) primary key NOT NULL , 
member_id int, 
FOREIGN KEY (member_id) REFERENCES member(member_id));

create table carparking.traderecord 
(tr_id int primary key NOT NULL AUTO_INCREMENT, 
member_id int, 
tr_amount varchar(10) , 
tr_date date, 
tr_time time,
tr_location varchar(12) ,
tr_counterparty varchar(12),
tr_type int,
tr_ps varchar(50),
tr_pe varchar(50),
FOREIGN KEY (member_id) REFERENCES member(member_id));

create table carparking.traffic
(parkingLot_id int,
parkingLot_name varchar(50),
monday JSON,
tuesday JSON,
wednesday JSON,
thursday JSON,
friday JSON,
saturday JSON,
sunday JSON);




-- 新增測試用資料
INSERT INTO traderecord VALUES (1,1,'100000','2023/4/17','00:06:53',"taiwan","counterparty",1)
INSERT INTO traffic(parkingLot_id,parkingLot_name) VALUES (1,'台中停車場')
INSERT INTO traffic(parkingLot_id,parkingLot_name,monday,tuesday,wednesday,thursday,friday,saturday,sunday) VALUES (1,'台中停車場','{"h1":50,"h2":10,"h3":60,"h4":40}','{"h1":10,"h2":50,"h3":30,"h4":40}','{"h1":90,"h2":35,"h3":40,"h4":20}','{"h0":50,"h1":20,"h2":20,"h3":30,"h4":30,"h5":30,"h6":50,"h7":40,"h8":75,"h9":25,"h10":10,"h11":35,"h12":25,"h13":40,"h14":65,"h15":70,"h16":85,"h17":25,"h18":45,"h19":30,"h20":68,"h21":78,"h22":35,"h23":75}','{"h1":60,"h2":45,"h3":70,"h4":10}','{"h1":30,"h2":20,"h3":60,"h4":80}','{"h1":70,"h2":15,"h3":30,"h4":25}')

,"h5":30,"h6":30,,"h7":30,"h8":30,"h9":30,"h10":30,"h11":30,"h12":30,"h13":30,"h14":30,"h15":30,"h16":30,"h17":30,"h18":30,"h19":30,"h20":30,"h21":30,"h22":30,"h23":30