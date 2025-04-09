import express from 'express';
import connectDB from './configs/db';
import { config } from 'dotenv';
import bookRoute from './routes/book-route';
import homeRoute from './routes/home-route';
import loginRoute from './routes/login-route';
import signupRoute from './routes/signup-route';
import dotenv from 'dotenv';
dotenv.config();


config();

const PORT = process.env.PORT || 8888;

const app = express();

app.use(express.json());    

app.set('view engine','ejs')
app.use(express.static('public'))

//Routes
app.use("/", homeRoute);     
app.use("/api/book",bookRoute);    
app.use("/login", loginRoute);          
app.use("/signup", signupRoute);       

app.all("*", (_req, _res) => {
    _res.status(404).send("Page Not Found");
  });

async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
startServer();

export default app;
