const http = require('http');//เรียกใช้งาน module http

//สร้าง server และรับ request และ response
const server = http.createServer(function(request, response) {

    //response กลับไปโดยกำหนด content-type เป็น text/html และส่ง status code 200
    response.writeHead(200, { "Content-Type": "text/html" });
    //ส่ง response เป็น html กลับไป
    response.end("<html><body><h1>Hello World!</h1></body></html>");
});

const port = process.env.PORT || 1337;//กำหนด port ที่จะใช้งาน
server.listen(port);//เริ่มรับ request ที่ port ที่กำหนด

console.log(`Server running at http://localhost:${port}`);//แสดงข้อความบน console