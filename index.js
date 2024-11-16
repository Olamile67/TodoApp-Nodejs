// import express
import express from 'express';
import router from "./routes/authroute.js"
const app = express();
// telling the server we are using json
app.use(express.json());
// creating route
app.use("/api/auth", router);


// creating server
app.listen(9090, () =>{
    console.log('server is running on port 9090')
});


