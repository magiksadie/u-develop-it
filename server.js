const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

//Express Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Default Response (404)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});