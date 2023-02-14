//console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Before And After Pseudo Selectors</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Oswald&family=Trispace:wght@600&display=swap" rel="stylesheet">
  
      <style>
          body{
              background-color: black;
              color: white;
              margin: 0;
              padding: 0;
          }
          header::before{
              background: url('https://images.unsplash.com/photo-1656337043211-15eae0dcaf63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80') no-repeat center center/cover;
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              z-index:-1;
              opacity: 0.5;
              top: 0;
              left: 0;
          }
          header{
              display: flex;
          }
          .navigation{
              font-family: 'Baloo Bhai 2', cursive;font-family: 'Oswald', sans-serif;font-family: 'Trispace', sans-serif;
              display: flex;
              font-size: 24px;
          }
          li{
              list-style: none;
              padding: 24px 35px;
          }
          section{
              height: 350px;
              
              margin: 9px 150px;
              display: flex;
              flex-direction: column;
              text-align: center;
              justify-content: center;
          }
          /*section::before{
              content: "This is a content";
          }*/
  
          /*section::after{
              content: "This is a content";
          }*/
          h1{
              font-size: 4rem;
          }
          p{
              text-align: center;
          }
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul class="navigation">
                  <li class="item">Home</li>
                  <li class="item">About</li>
                  <li class="item">Services</li>
                  <li class="item">Contact Us</li>
              </ul>
          </nav>
      </header>
      <section>
          <h1>Welcome To The Coding World</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum autem, eius ea maxime necessitatibus omnis libero nam cumque quae adipisci consequatur ipsam in! Voluptates facilis, nisi dignissimos natus, doloremque tenetur consequatur cupiditate vero explicabo voluptas voluptate consectetur assumenda voluptatum laboriosam dolores iure molestias at eligendi vel. Iusto minus quos unde doloremque impedit voluptate sapiente illo excepturi magnam ad nesciunt error voluptates est, maxime in nihil non dignissimos deleniti aperiam quod! Quo, tenetur.</p>
      </section>
      <hr>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
