# IT3K - Backend


### การติดตั้ง 
  -  Cone this project
  -  cd folader api 
  -  use command : ``` composer install ```
  -  migrate sql : `` php artisan migrate ``

### การใช้งาน
 1. การ login เพื่อขอ token : 
    ```sh 
    POST /api/login HTTP/1.1
    Host: localhost:8000
    Accept: application/json
    Content-Type: application/json
    cache-control: no-cache
    {
	"provider_id" :"ไอดีของเฟซบุ๊ก" ,
	"round" : "รอบ"
    }
    ```
     *provider_id และ  round ได้มากจาก frontend ส่งมาเป็น ```Json ``` 
      ##### กรณีไม่มีปัญหาในการโหวด จะแสดงสถานีส่งค่ากลับเป็น json
      ``` sh
      {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDc2NDUwODMsImlhdCI6MTU0NzYzNzg4Mywic3ViIjp7InByb3ZpZGVyX2lkIjoiMTIzNDU2NzgiLCJyb3VuZCI6IjEiLCJpZENvbXBldGl0b3IiOm51bGwsImNvdW50IjowfX0.SXTOeduU8rOvoRMpecfDsl77LXrDJ54exX6vob1a7AU"
    }
      ```
    
2. URL สำหรับเก็บข้อมูลบันทึก ผลการโหวด
    ```sh
    POST /api/vote HTTP/1.1
    Host: localhost:8000
    Accept: application/json
    Content-Type: application/json
    Authorization: Bearer "token"
    cache-control: no-cache 
    {
     "idCompetitor" : "รหัสของดาวเดือน",
     "count" : "จำนวนการโหวด"
    }
    ```
     *idCompetitor และ  count ได้มากจาก frontend ส่งมาเป็น ```Json ```  และ ต้องแนบ ```token ```มาด้วย
    ##### กรณีไม่มีปัญหาในการโหวด จะแสดงสถานีส่งค่ากลับเป็น json
    ```sh 
    {
    "status": 200,
    "message": "OK vote complete bye bye IT3K EIEI"
    }
    ```