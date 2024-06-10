const color = require('./color.js');

module.exports = 

    (req, res) => {
    color.getColorList((err, result) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.render('add-fruit.ejs', {
            title: 'Add | Fruit',
            message: '',
            color: result
        });
    });

    
};


// router.post('/add-fruit', (req, res) => {
//     const fruitName = req.body.fruitName;
//     const startMonth = req.body.startMonth;
//     const endMonth = req.body.endMonth;
//     const colorId = req.body.colorId;
//     const calories = req.body.calories;
//     const image = req.body.image;

//     const season = `${startMonth}-${endMonth}`;


//     res.render('add-fruit.ejs', {
//         title: 'Add | Fruit',
//         message: 'Fruit added successfully!',
//         colors: result
//     });
// });