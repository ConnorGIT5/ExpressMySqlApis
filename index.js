const express = require('express');
const app = express();
const PORT = 8080;

// applying middleware *the express json middleware*
app.use(express.json());


app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);

// api endpoint

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'medium'
    })
});

// adding a second endpoint as a post request

app.post('/tshirt/:id', (req, res) => {
    
    const { id } = req.params;     
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }


    // if we do have a logo, then a response will be send with a t-shirt with a logo and id
    res.send({
        tshirt:`👕 with your ${logo} and ID of ${id}`,

    });
});

