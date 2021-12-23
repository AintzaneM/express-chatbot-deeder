const express = require('express');
const router = express.Router();



//our first Route

router.get('/message', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker. :)</h1>');
   });
 


module.exports = router;