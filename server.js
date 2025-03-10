const cors=require(`cors`)
const express=require(`express`)
const connectDB=require("./config/db")
const app=express()

const allowedOrigins=["ecom-frontend-pla94cva6-kushalagbs-projects.vercel.app","ecom-frontend-eight-fawn.vercel.app"]
//middlewares
app.use(express.json())
app.use(cors(
    {
        origin: function (origin, callback) {
          if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        },
        credentials: true, // Allows cookies and authentication headers if needed
      }
))
connectDB()
app.use("/auth",require("./routes/authRoutes"))
app.use("/cart",require("./routes/cartRoutes"))

//getting the server configration
app.get("/",(req,res)=>{
    res.send('getting the server')
})
const port=5000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
