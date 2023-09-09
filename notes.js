

// routes for new user for regisration --- POST REQUEST 
// app.post("/register", async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Hash the password using bcrypt
//         const hashPassword = await bcrypt.hash(password, saltRounds);

//         // Create a new user document
//         const newUser = new User({
//             email: username,
//             password: hashPassword
//         });

//         // Save the user to the database
//         const savedUser = await newUser.save();

//         console.log("User saved successfully:", savedUser);
//         res.render("secrets.ejs"); // Navigate to the corresponding page
//         // res.status(200).send("User registered successfully");
//     } catch (err) {
//         console.error("Error saving user:", err);
//         res.status(500).send("Error registering user");
//     }
// });

// // routes for already existing user to login --- POST REQUEST 
// app.post("/login", async (req, res) => {
//     const Ousername = req.body.username;
//     const Opassword = req.body.password;

//     try { //collect the one user which matches in db
//         const foundUser = await User.findOne({ email: Ousername });
//         // if it fetched then it would check the password too
//         if (foundUser) {
//             // Compare the provided password with the stored hashed password
//             const result = await bcrypt.compare(Opassword, foundUser.password)
//             if (result === true) {
//                 res.render("secrets.ejs");
//             } else {
//                 console.log("Incorrect password");
//                 res.status(401).send("Incorrect password");
//             }
//         }
//         else {
//             console.log("User not found");
//             res.status(404).send("User not found");
//         }
//     } catch (err) {
//         console.error("Error finding user:", err);
//         res.status(500).send("Error during login");
//     }
// });

