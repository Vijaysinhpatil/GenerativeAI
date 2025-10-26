import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'
// import { Content } from "openai/resources/containers/files.js";
dotenv.config({})


const ai = new GoogleGenAI({

    apiKey : process.env.GEMINI_KEY

})

const main = async() => {

    const response = await ai.models.generateContent({
        
        model : "gemini-2.5-flash",
 
        config : {
            systemInstruction : "Act as a senior javascript deeloper and answer in marathi language"
        },

        //2 user prompt goes in the 'content' array
        contents : [{

             role : "user",
             parts : [{ text : " tell me about yourself "}]
        }]
        // instruction from the system
        // config : {
        //     systemInstruction : "Respond with a single word."
        // }
    })

    console.log("Response =>" , response.text);
}
main()
