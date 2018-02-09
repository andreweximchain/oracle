var skyhook = require ('skyhook-api') ('andrew@eximchain.com', 'eJwVwUEOwCAIBMCzjyFhhWK5sg2fMv27cQYDei17bezueopzSSdDwhQyoSl0plfAP_I_FCsLMw');

// Lookup IP
skyhook ('18.189.115.97', (err, data) => {
  console.log (err || data);
});
