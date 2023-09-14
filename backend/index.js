const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router')
const mongoose = require('mongoose');
require('dotenv/config')
const { Configuration, OpenAIApi } = require("openai");

const openaiConfig = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(openaiConfig);

async function generateReport(employeeData) {
  
  const prompt = `Employee Data: ${employeeData}\nGenerate the report:`;

  
  const parameters = {
    model: "text-davinci-003",
    prompt,
    max_tokens: 100, 
    temperature: 0.7,
    n: 1,
    stop: "\n", 
  };

  
  const response = await openai.createCompletion(parameters);

  
  const reportText = response.choices[0].text.trim();

  return reportText;
}



const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use('/', router)

app.post("/generate-report", async (req, res) => {
    try {
      const { employeeData } = req.body; 
  
      
      const reportText = await generateReport(employeeData);
  
      res.send(reportText);
    } catch (error) {
      console.error("Error generating report:", error);
      console.log(error.response.data.error);
      res.status(500).json({ error: "Failed to generate report" });
    }
  });
  


const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log('database connected!'))
.catch(err => console.log(err))

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log(`server is running on ${port}`);
})