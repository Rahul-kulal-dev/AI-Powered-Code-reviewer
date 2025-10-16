const aiService=require("../services/ai.services")
module.exports.getReviw=async (req,res)=>{

    // const prompt=req.query.prompt;
//     ✅ req.query is used to get data from the URL in a GET request, like this:
// /search?prompt=hello → req.query.prompt gives "hello".

    const code=req.body.code;
    if(!code){
        return res.status(400).send("Prompt is required")
    }
    const response=await aiService(code);
    res.send(response);
}