import app from './app';

const PORT = process.env.PORT || 8082;

app.listen(PORT, ()=>{console.log("Server is running on PORT "+ PORT)});