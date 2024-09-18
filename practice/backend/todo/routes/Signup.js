const express = require('express');
const { Usermodel } = require('../db');
const bcrypt = require('bcrypt');
const { z } = require('zod');

const app = express.Router();

app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        const requiredbody = z.object({
            email: z.string().min(3).max(100).email(),
            name: z.string().min(3).max(30),
            password: z.string().min(3).max(100)
        });

        const parsedbody = requiredbody.safeParse(req.body);

        if (!parsedbody.success) {
            return res.status(400).json({
                message: "You have entered wrong inputs",
                error: parsedbody.error
            });
        }

        const { email, name, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10); // Use a higher salt rounds for better security

        const user = await Usermodel.create({
            email,
            password: hashedPassword,
            name
        });

        res.status(201).json({
            message: 'You have signed up, User created successfully',
            user
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = app;
