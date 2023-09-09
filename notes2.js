// require('dotenv').config();

// const express = require("express");
// const ejs = require("ejs");
// const bodyparser = require("body-parser");
// const mongoose = require('mongoose');
// const session = require('express-session'); // for cookies and sessions
// const passport = require('passport'); // same here
// const passportLocalMongoose = require('passport-local-mongoose');//same here
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-find-or-create')
// // const encrypt = require("mongoose-encryption");
// // const md5 = require("md5");
// // const bcrypt = require('bcrypt');

// const app = express();
// const port = 4000;
// const saltRounds = 10;


// app.use(express.static("public"));
// app.set('view engine', 'ejs');
// app.use(bodyparser.urlencoded({ extended: true }));

// // -------- to use the passport session -------- >> 1 <<----
// app.use(session({
//     secret: "this is our little secret",
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());


// // to connect with the mongodb database with mongoose 
// async function connecttoMongo() {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/userDB");
//         console.log("connected to MongoDB");
//     } catch (err) {
//         console.log("Error connecting:", err);
//     }
// }
// connecttoMongo();

// // to create the schema in mongoose for users --REGISTER 
// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String
// });

// // to encrypt the password -- done only before creating model 
// // const secret = process.env.SECRET;
// // userSchema.plugin(encrypt, { secret:secret, encryptedFields: ["password"] });

// // -------- to use the passport session -------- >> 2 <<----
// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate); // it is for google authentication


// // to create the mongoose model for users 
// const User = new mongoose.model("User", userSchema);

// // -------- to use the passport session -------- >> 3 <<----
// passport.use(User.createStrategy());

// // to serilalize the user through login 
// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });
// passport.deserializeUser(function (id, done) {
//     User.findById(id, function (err, user) {
//         done(err, user);
//     });
// });

// // for google verification through login 
// // Google OAuth Strategy
// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:4000/auth/google/secrets",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
// },
//     (accessToken, refreshToken, profile, cb) => {
//         User.findOrCreate({ googleId: profile.id }, (err, user) => {
//             return cb(err, user);
//         });
//     }
// ));



// // routes for rendering the --GET REQUEST 
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// })
// // routes for google login authenticatuion --PASSPORT GOOLGE OAUTH
// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['profile'] }
//     ));
// // routes for google login authenticatuion --PASSPORT GOOLGE OAUTH
// app.get('/auth/google/secrets',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     (req, res) => {
//         res.redirect('/secrets');
//     }
// );

// app.get("/login", (req, res) => {
//     res.render("login.ejs");
// })
// app.get("/register", (req, res) => {
//     res.render("register.ejs");
// })
// app.get("/submit", (req, res) => {
//     res.render("submit.ejs");
// })
// app.get("/secrets", (req, res) => {
//     if (req.isAuthenticated()) {
//         res.render("secrets.ejs");
//     } else {
//         res.redirect("/login");
//     }
// })
// app.get("/logout", (req, res) => {
//     req.logout((err) => {
//         if (err) {
//             console.error(err);
//         }
//         res.redirect("/");
//     });
// });




// // routes for new user for regisration --- POST REQUEST 
// app.post("/register", async (req, res) => {
//     User.register({ username: req.body.username }, req.body.password, (err, user) => {
//         if (err) {
//             console.log(err);
//             res.redirect("/register");
//         } else {
//             passport.authenticate("local")(req, res, () => {
//                 res.redirect("/secrets");
//             });
//         }
//     });
// });

// // routes for already existing user to login --- POST REQUEST 
// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/secrets",
//     failureRedirect: "/login"
// }));



// app.listen(port, () => {
//     console.log(`server is running on the port ${port}`)
// })
