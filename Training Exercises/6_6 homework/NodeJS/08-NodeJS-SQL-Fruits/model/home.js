module.exports = 



//getSampleHomePage
(req,res) => {

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
     ]
    })

},

function (req,res) {

    res.render('small-index.ejs',
      {title: 'Yummy!'})

}

  



