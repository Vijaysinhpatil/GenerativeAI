## creating a chat application on terminal

## Step1

- importing googleGenAI from google/genai
- configuring dotenv file
- creating instance of GoogleGenAI
- passing apikey as an argument

## Step2

- run a function
- get the response by passing modelname , configuring temperature to avoid extra text and all
- In Contents assign role and parts.
- parts take an array as a value ,  we have to pass text and question as an key value
- log the response.text

## getting the inputs from the user

- write a message from ai using process.stdout.write("")
- taking input from the user , using process.stdin.on()
- .on() takes two parameters 1. data and 2. callback function
- basically data contains a buffer value we have to convert this buffer to string() but it contains some white space for the we have trim() this.
- to End the conversation use process.exit() it executes when input text is === to exit
- then call the run funtion and pass question as an argument
- and pass this question as an arg while defining run function
- And pass the question as an prompt so the user generated question act as prompt and ai will take this as an input and process it and give the response  