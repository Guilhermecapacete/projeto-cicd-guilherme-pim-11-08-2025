import express from 'express';

var app = express();
app.get('/', (req, res) => {
    res.send('A gara file');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
export default app;