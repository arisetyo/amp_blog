/**
 * Server that render the React app
 * @author Arie M. Prasetyo
 * @copyright 2021
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.user('^/$', (req, res, next) => {
  
});