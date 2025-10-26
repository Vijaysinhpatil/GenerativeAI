import { GoogleGenAI } from "@google/genai";
import { encoding_for_model, Tiktoken } from "tiktoken";
import dotenv from 'dotenv'
dotenv.config({})


const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_KEY
})

const model = "gemini-2.5-flash"
const prompt = "tell me what is matrix"


const main = async() => {

    const response = await ai.models.generateContent({

        model : model ,
        contents : [{

            role : 'user',
            parts : [{ text : prompt }]
        }]
    })

    // console.log(response.usageMetadata);
    
}
// main()


// token Calculator

const TokenCalculate = async() => {
 
      try {
        
        const response = await ai.models.countTokens({

            model : model,
            contents : [{

                role : 'user',
                parts : [{ text : prompt}]
            }]
        })

         
       console.log(`Total Tokens => ${response.totalTokens}`);
       
        
      } catch (error) {
            console.error("Error counting tokens:", error);
      }
     
    
}

TokenCalculate()