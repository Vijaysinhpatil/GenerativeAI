import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'
dotenv.config({})

const model = "gemini-2.5-flash"
const prompt = "How are you"
const creativeTemperature = 0
const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_KEY
})

const run = async() => {
   
      try {
        
        const response = await ai.models.generateContent({
            model : model ,
            
            config : {
               temperature : creativeTemperature,
               maxOutputTokens : 2040
            
            },

            contents : {
                role : 'user',
                parts : [{ text : prompt }]
            }
        })
        console.log(response);
         const oldResponse = await Chat.getHistory()
        console.log(oldResponse);
      } catch (error) {
        console.error("Error while Getting Response => " , error);
      }
}
run()