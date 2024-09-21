const express = require('express');
const app = express.Router(); 
app.use(express.json());
const { z } = require('zod');
const bcrypt = require('bcrypt');
const { Usermodel } = require('../db'); 

app.post('/signup', async function(req, res) {
    try {
        const safebody = z.object({
            email: z.string().email(), 
            name: z.string(),
            password: z.string()
        });

        const parsedBody = safebody.safeParse(req.body);

        if (!parsedBody.success) {
            return res.status(400).json({
                message: "You have entered something wrong",
                error: parsedBody.error
            });
        }

        const { email, password, name } = req.body;
        const hashedPassword = await bcrypt.hash(password, 5); 

        const user = await Usermodel.create({
            email: email,
            password: hashedPassword,
            name: name
        });

        return res.json({
            user
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = app; 