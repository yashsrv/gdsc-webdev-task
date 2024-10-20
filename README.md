
# NSUT-GDSC Web Dev Recruitment task

The first ever GitHub repo is here, made in 1st year for the GDSC recruitment.




## Screenshots

![App Screenshot](https://i.ibb.co/ZmgrD9H/dashboard.png)

![App Screenshot](https://i.ibb.co/8xKmzY0/Screenshot-2024-10-20-at-11-24-41-PM.png)




## Tech Stack

**Client:** HTML, CSS, JS (socket.io, Chart.js)

**Server:** Linux, Nginx (static-file server)
## Details

- username = admin & password = admin123

- using cookies to store your login credentials. unathourized access leads to page redirection to '/login'
- using socket.io to connect to the websocket provided, and Chart.js to create charts. Random numbers (from websocket) are multiplied by 100 to create meaningful stats.
- Nginx is only used to server static content, SSL handling, page redirection and rewrite functionality.
## Deployment

Project is deployed on a virtual private server (VPS) that points to my personal domain.
- using cloudflare to prevent MITM and DDoS, also for DNS proxy and content caching.





## Author

- [@yashsrv](https://www.github.com/yashsrv)

