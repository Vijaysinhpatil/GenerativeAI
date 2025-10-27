import { GoogleGenAI } from '@google/genai'
import dotenv, { config } from 'dotenv'

dotenv.config()

const model = 'gemini-2.5-flash'

const ai = new GoogleGenAI({
     apiKey : process.env.GEMINI_KEY
})

const context = [{

    config : {
     systemInstruction : "Keep the answers short and simple"
    }
}]

const run = async( question ) => {

     try {

        context.push({
            
        })
        
        const response = await ai.models.generateContent({
              model : model,
             
              config : {
                  
                temperature : 0.8
              } ,
              contents : {
                role : 'user',
                parts : [{ text : question }]
              }
        })

        console.log(response.text);
        
     } catch (error) {
        
        console.log("Error While Response =>" , error);
        
     }
}
// run()

// AI answer

process.stdout.write('Ask Your Question => ');
process.stdin.on("data" , (data) => {
    //  console.log(data); returns a buffer
    //  console.log(data.toString().trim());

     const question = data.toString().trim();

     if (question.toLocaleLowerCase() === 'exit') {
        process.exit();
     }else{
        run(question)
     }
     
})