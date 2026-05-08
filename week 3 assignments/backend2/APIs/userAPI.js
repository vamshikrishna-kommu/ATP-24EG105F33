import express from 'express';
import { Types } from 'mongoose';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { userModel } from '../model/UserModel.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const { hash, compare } = bcryptjs;
const { sign } = jwt;

export const userApp = express.Router();

/**
 * @route   POST /user-api/auth
 * @desc    User Login
 */
userApp.post('/auth', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "Invalid email" });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
    }

    // Generate Token
    const token = sign({ email: user.email }, process.env.JWT_SECRET || "abcdef", { expiresIn: "1h" });

    // Store token in HttpOnly cookie
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production"
    });

    res.status(200).json({ message: "Login successful", payload: user });
});

/**
 * @route   POST /user-api/users
 * @desc    Register new user
 */
userApp.post("/users", async (req, res) => {
    const newUser = req.body;
    newUser.password = await hash(newUser.password, 10);

    const userDoc = new userModel(newUser);
    const result = await userDoc.save();

    res.status(201).json({ message: "User registered successfully", payload: result });
});

/**
 * @route   GET /user-api/users
 * @desc    Get all users (Protected)
 */
userApp.get("/users", verifyToken, async (req, res) => {
    const users = await userModel.find().select("-password");
    res.status(200).json({ message: "Users retrieved", payload: users });
});

/**
 * @route   GET /user-api/user
 * @desc    Get current user profile (Protected)
 */
userApp.get("/user", verifyToken, async (req, res) => {
    const email = req.user?.email;
    const user = await userModel.findOne({ email }).populate("cart.product").select("-password");

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User profile retrieved", payload: user });
});

/**
 * @route   PUT /user-api/users/:id
 * @desc    Update user by ID (Protected)
 */
userApp.put("/users/:id", verifyToken, async (req, res) => {
    const { id } = req.params;
    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid user ID format" });
    }

    const updateData = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(id, { $set: updateData }, { new: true, runValidators: true });

    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", payload: updatedUser });
});

/**
 * @route   DELETE /user-api/users/:id
 * @desc    Delete user by ID (Protected)
 */
userApp.delete("/users/:id", verifyToken, async (req, res) => {
    const { id } = req.params;
    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid user ID format" });
    }

    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", payload: deletedUser });
});

/**
 * @route   PUT /user-api/cart/product-id/:pid
 * @desc    Add product to cart (Protected)
 */
userApp.put("/cart/product-id/:pid", verifyToken, async (req, res) => {
    const productId = req.params.pid;
    const email = req.user?.email;

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const productIndex = user.cart.findIndex(item => item.product.toString() === productId);

        if (productIndex > -1) {
            // Increment count if product exists
            user.cart[productIndex].count += 1;
        } else {
            // Add new product if not in cart
            user.cart.push({ product: productId, count: 1 });
        }

        await user.save();
        res.status(200).json({ message: "Cart updated", payload: user.cart });
    } catch (err) {
        res.status(500).json({ message: "Error updating cart", error: err.message });
    }
});