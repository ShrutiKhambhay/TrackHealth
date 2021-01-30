const express = require('express');
const app = express();

const port = process.env.PORT||80;
const randData = (min,max) => {
    return Math.floor(Math.random() * (max-min)+ min);
};
const randFloor = (min,max,decimalPlaces) => {
    var rand = Math.random() < 0.5 ?((1-Math.random()) * (max-min)+min) : (Math.random() * (max-min)+min);
    var power = Math.pow(10,decimalPlaces);
    return Math.floor(rand*power) / power;
}

const healthNormalData = {
    bodyTemperature: randFloat(35.5,37.5,1),
    bloodPressure: randData(80,120),
    respiration: randData(12,16),
    glucose: randData(72,140),
    heartRate: randData(60,100),
    cholestrol: randData(125,200),
};
const acuteasthmaData = {
    bodyTemperature: randFloat(35.5,37.5,1),
    bloodPressure: randData(80,120),
    respiration: randData(12,16),
    glucose: randData(72,140),
    heartRate: randData(60,100),
    cholestrol: randData(125,200),
};
const hypoxemiaData = {
    bodyTemperature: randFloat(35.5,37.5,1),
    bloodPressure: randData(80,120),
    respiration: randData(12,16),
    glucose: randData(72,140),
    heartRate: randData(60,100),
    cholestrol: randData(125,200),
};
const chdData = {
    bodyTemperature: randFloat(35.5,37.5,1),
    bloodPressure: randData(80,120),
    respiration: randData(12,16),
    glucose: randData(72,140),
    heartRate: randData(60,100),
    cholestrol: randData(125,200),
};
const bronchiectasisData = {
    bodyTemperature: randFloat(35.5,37.5,1),
    bloodPressure: randData(80,120),
    respiration: randData(12,16),
    glucose: randData(72,140),
    heartRate: randData(60,100),
    cholestrol: randData(125,200),
};
const prediabetesData = {
    bodyTemperature: randFloat(35.5,37.5,1),
    bloodPressure: randData(80,120),
    respiration: randData(12,16),
    glucose: randData(72,140),
    heartRate: randData(60,100),
    cholestrol: randData(125,200),
};
const diabetesData = {
    bodyTemperature: randFloat(35.5,37.5,1),
    bloodPressure: randData(80,120),
    respiration: randData(12,16),
    glucose: randData(72,140),
    heartRate: randData(60,100),
    cholestrol: randData(125,200),
};
app.get('/api/normal',(req,res) => {
    res.status(200).json(healthNormalData)
})
app.get('/api/normal',(req,res) => {
    res.status(200).json(acuteasthmaData)
})
app.get('/api/normal',(req,res) => {
    res.status(200).json(hypoxemiaData)
})
app.get('/api/normal',(req,res) => {
    res.status(200).json(chdData)
})
app.get('/api/normal',(req,res) => {
    res.status(200).json(bronchiectasisData)
})
app.get('/api/normal',(req,res) => {
    res.status(200).json(prediabetesData)
})
app.get('/api/normal',(req,res) => {
    res.status(200).json(diabetesData)
})
app.listen(port, () => console.log("server is listening to the port:",port))
