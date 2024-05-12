import express from 'express';
import User from './user.model.js';
const router = express.Router();

router.post('/signup', async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.json({ message: 'User created successfully!', savedUser });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating user");
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.json({ message: 'Login successful!', user });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error logging in");
    }
});


router.get('/t', async (req, res) => {
    try {
        throw new Error('Test error');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching users");
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching users");
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching user");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedUser) return res.status(404).send("User not found");
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user");
    }
});

export default router;
