const express = require('express');
const router = express.Router();



//our first Route

router.get('/chatbot', (request, response, next) => {
    console.log("hello",request);
    response.send('<button>Welcome Ironhacker. :)</button>');
   });
 


module.exports = router;