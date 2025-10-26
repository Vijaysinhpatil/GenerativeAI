## Part : 2

# 🧮 Token Guide for AI Models

## 📘 What is a Token?
1. A **token** is a unit of data that an AI model processes — it can be a word, part of a word, or even punctuation.  
2. AI models **calculate billing based on tokens** used in both request and response.  
3. The **total token count** includes both:
   - Tokens sent in the **prompt (input)**  
   - Tokens generated in the **response (output)**

---

## ⚙️ Installing Token Counter

To count tokens locally, install the **Tiktoken** package (developed by OpenAI):

and for Gemini use **countToken** method : it takes objects as an argument and that object contains role , parts (prompt) and all

```bash
npm install tiktoken
```

## Method used In Gemini =>
 ``` 
   **ai.models.countToken({

       model : model ,
        contents : [{

            role : 'user',
            parts : [{ text : prompt }]
        }]
   })**
```
