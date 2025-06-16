// Import Express
import express from "express"
import tvRoutes from "./routes/tv.routes.js";


//! Create an instance called "app"
const app = express();

//Define the PORT for our Express server
const PORT = 5000;

//! Miidleware
app.use(express.json());

app.get("/api" , (req,res) => {
    res.send(" HellOo EveryOne ");
});

app.use("/api/tvshows", tvRoutes);

//!Run the Server
app.listen( PORT , ()=> {
    console.log(`Server is running on the PORT:${PORT}`);
});