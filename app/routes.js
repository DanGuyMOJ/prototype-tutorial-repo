const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

/* -----------------------------------------------
Explanation of routes.js
----------------------------------------------- */

// Get the url action from the submitted form
// * tip -> Make it a page that doesn't acutaly exist
router.post('/url-from-form', function (req, res) {

    // Create a variable from the name attribute of the input field
    var variableName = req.session.data['input name']

    // if variable is equal to given value...
    if (variableName == 'value') {
        // ...then go to this page
        res.redirect('specify-a-page')
    // otherwise...    
    } else {
        // go to a different page
        res.redirect('specify-a-different-page')
    }
})

// Name change router
router.post('/name-change/change-name-router', function (req, res) {
    var changedName = req.session.data['cheanged-nam']
    if (changedName === 'yes') {
        res.redirect('new-name')
    } else {
        res.redirect('check-answers')
    }
})

// router.post('/name-change/router', function (req, res) {
//     var changedName = req.session.data['changed-name']
//     if (changedName === 'yes') {
//         res.redirect('new-name')
//     } else {
//         res.redirect('check-answers')
//     }
// })







/* -----------------------------------------------
Demo of multi option router
----------------------------------------------- */

router.post('/name-change/router2', function (req, res) {
    var pets = req.session.data['pets']
    if (pets === '1') {
        res.redirect('page-1')
    } else if (pets === '2') {
        res.redirect('page-2')
    } else if (pets === '3') {
        res.redirect('page-3')
    } else {
        res.redirect('page-4')
    }
})

module.exports = router
