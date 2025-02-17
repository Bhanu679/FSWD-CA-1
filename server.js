const express = require('express');
const app = express();
const PORT = 3000;
app.get("/signup", (req, res) => {
    const { password, email } = req.query;
    if (!password || password.length < 8) {
        return res.send("Password length should be greater than 8 or less than or equal to 16");
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.send("Email cannot be empty");
    }
    


    res.send("Signup successful!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});