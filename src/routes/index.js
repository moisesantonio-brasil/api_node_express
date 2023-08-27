const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
    
});
router.get('/users/1', function (req, res, next) {
    res.status(200).send({
          Horario:[
            {
                segunda:"Monday",
                descriçao:"dia de trabalhar",
                url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhuman&psig=AOvVaw26zq-om9yB71n1hMRVoX41&ust=1693224344469000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPi7sLrm_IADFQAAAAAdAAAAABAE",
            },
            {
                terça:"Tuesday",
                descriçao:"dia de cochilar"
            }
          ]  
          
        
    });

});
router.get('/users/2', function (req, res, next) {
    res.status(200).send({
        title: "oi tudo bem",
        name: "Breno",
        data: "01/12/2014"
    });
});
module.exports = router;