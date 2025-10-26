# part : 3

## Optinal Parameter

# Temperature 
- it varies between 0 - 2
- 0 represents => less random text , less creativity , No extra text ,   pure Answer.
- 2 represents => more random text , more creativity ,  extra text , no pure Answer. 

# syntax

```
config : {
    temperature : 0
}
```

# maxOutputTokens
- It set Limit for models to generate response
- model stops when limit gets hit
- it contains both input and output token value
- It control details like low = short answer and high = detailed
# syntax

```
maxOutputTokens : 2040

```

# store
- It store the response Id
- based on the Responce Id we can retrive the chat history or last prompt response(exact same)

# syntax for openAI

```
  store : true,

  const oldRes = await ai.responses.retrive("ResponseId")

```