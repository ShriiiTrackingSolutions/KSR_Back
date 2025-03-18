require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const contactRoutes = require("./routes/router");

// const app = express();
// const PORT = process.env.PORT || 5000;


// app.use(express.json()); 
// app.use(cors()); 
// { origin: " https://anujzbundela.github.io/Submition/" }

// app.use("/api", contactRoutes);

// app.post("sendEmail", async (req, res) => {
//     console.log("Received request:", req.body); 
//     res.json({ message: "Testing API response!" }); 
// });


// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://0.0.0.0:${PORT}`));


const express = require("express");
const cors = require("cors");
const app = express();
const contactRoutes = require("./routes/contactRoutes")



// ✅ Allow requests from your frontend (GitHub Pages)
// app.use(cors({
//   origin: "https://shriiitrackingsolutions.github.io", // Allow only your frontend
//   methods: "GET,POST", // Allow necessary methods
//   allowedHeaders: "Content-Type"
// }));
// app.use(cors())

// ✅ If using a wildcard (allow any origin) - use this instead:
// app.use(cors());

app.use(express.json());
app.use(cors())
app.use("/api", contactRoutes);
// Your existing routes
app.post("/api/send", (req, res) => {
    res.json({ message: "Email sent successfully!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://0.0.0.0:${PORT}`));

