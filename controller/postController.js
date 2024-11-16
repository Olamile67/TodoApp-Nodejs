export const createPost = (req, res) => {
    console.log(req.body);
    const otp = Math.floor(Math.random()*1000);
    const sms_message = `Kindly input the OTP sent to your mobile number ${otp}`
    res.json({data: req.body, message: "Registration successful, an OTP has been sent to the registered email." });
    console.log(sms_message)
}
export const getPost = (req, res) => {
    res.json({ message: "This is the route to get post" })
}
export const updatePost = (req, res) => {
    res.json({ message: "This is the route to update post from the controller" })
}
export const deletePost = (req, res) => {
    res.json({ message: "This is the route to delete post" })
}