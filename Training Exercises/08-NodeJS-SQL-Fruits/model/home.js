module.exports = 
{

getHomePage:(req,res) => {

  let querySQL = `SELECT f.* , c.color_name AS colors
  FROM fruit f JOIN colors c
      ON color_id = c.id`;

db.query(querySQL,(err, result) => {

  if (err) {

    console.log(err.message);
    return res.status(500).send(`<h1>ERROR: ${err.message} \n
         while performing \n
         ${querySQL}</h1>`);

  }

  // Controller (we've got it here close to the Model)
  res.render('index.ejs', {
    title: 'Yummy',
    fruit: result,
    hostingDir
  })

})

},


//getSampleHomePage
getSampleHomePage: (req,res) => {

  res.render('index.ejs',
    {title: 'Yummy',
     fruit: [ 
      {
       id: 1,
       fruit_name: 'pineapple',
       season:'march-july',
       color_id: 1,
       calories: 50,
       image:'pineapple.jpeg'
      },
      {
        id: 2,
        fruit_name: 'apple',
        season:'september-november',
        color_id: 2,
        calories: 52,
        image:'apple.jpeg'
       }
     ],
     hostingDir
    })

},

  getSmallHomePage: (req,res) => {

    res.render('small-index.ejs',
      {title: 'Yummy!',
      hostingDir})
      
}}


