require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/UserRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const savedJobsRoutes = require("./routes/savedJobsRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const app = express();


// ================== CORS (FIXED) ==================
app.use(cors({
    origin: [
        "http://localhost:5173", // local frontend
        // "https://your-frontend-url.com" // future deploy
    ],
    credentials: true
}));

// 🔥 Handle preflight requests
app.options("*", cors());


// ================== MIDDLEWARE ==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ================== CONNECT DATABASE ==================
connectDB();


// ================== ROUTES ==================
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/save-jobs", savedJobsRoutes);
app.use("/api/analytics", analyticsRoutes);


// ================== STATIC FILES ==================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// ================== TEST ROUTE ==================
app.get("/", (req, res) => {
    res.send("API is running...");
});


// ================== ERROR HANDLING ==================
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});


// ================== START SERVER ==================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});