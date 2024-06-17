const color = require('./color.js');
const fs = require('fs');

module.exports = {

    getEditPage: (req, res) => {

        let fruitId = req.params.id;

        color.getColorList((err,color) => {

            if (err) {
                return res.status(500).send(err.message);
            }

            let querySQL = `SELECT * FROM fruit
                   WHERE id = ${fruitId}`;

            db.query(querySQL, (err,fruit) => {

                if (err) {
                    return res.status(500).send(`<h1>ERROR ${err.message}\n
                    while on purpose to edit fruit performing\n
                    ${querySQL}</h1>`);
                }

                res.render('edit-fruit.ejs', {
                    title: 'Edit | Fruit',
                    message: module.exports.message,
                    colors: color,
                    fruit: fruit.length > 0 ? fruit[0] : null
                })
            })

        })

    },
    
    editFruit: (req, res) => {

        let fruitId = req.params.id;

        let fruitName = req.body.fruitName;
        let colorId = +req.body.color;
        let calories = req.body.calories ? + req.body.calories : null;
        let seasonStart =  req.body.seasonStart;
        let seasonEnd =  req.body.seasonEnd;
        let season = seasonStart + " - " + seasonEnd;
    

       
        let querySQL = `UPDATE fruit SET fruit_name = ?,
              color_id = ?, calories = ?,
              season = ?      
              WHERE id = ?`;

    //           ('${fruitName}','${seasonStart+" - "+seasonEnd}',${colorId},'${calories}',
    // '${imageName}')`;

        let inputSQL = [fruitName,colorId,calories,season,fruitId];

        db.query(querySQL,inputSQL, (err) => {

            if (err) {
                return res.status(500).send(`<h1>ERROR ${err.message}\n
                while performing\n
                ${querySQL}</h1>`);
            }

            res.redirect('/');

        }) // end of db.query('UPDATE ...')

    


    }, // end of editFood()


    deleteFruit: (req, res) => {
        let fruitId = req.params.id;
    
        let querySQL = `SELECT * FROM fruit WHERE id = ?`;
    
        db.query(querySQL, [fruitId], (err, fruits) => {
            if (err) {
                return res.status(500).send(`<h1>ERROR ${err.message}\n
                while getting image name for DELETE and performing\n
                ${querySQL}</h1>`);
            }
    
            if (fruits.length === 0) {
                return res.status(404).send(`<h1>Fruit with id ${fruitId} not found</h1>`);
            }
    
            let imageName = fruits[0].image;
    
            querySQL = `DELETE FROM fruit WHERE id = ?`;
            
            db.query(querySQL, [fruitId], (err) => {
                if (err) {
                    return res.status(500).send(`<h1>ERROR ${err.message}\n
                    while performing\n
                    ${querySQL}</h1>`);
                }
    
                if (imageName) {
                    fs.unlink(`static/assets/img/${imageName}`, (err) => {
                        if (err && err.code !== 'ENOENT') {
                            console.error(`Failed to remove image: static/assets/img/${imageName}`, err);
                        }
                        res.redirect('/');
                    });
                } else {
                    res.redirect('/');
                }
            });
        });
    },

    getAddPage: (req, res) => {
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

},

    addFruit: (req, res) => {

    console.log(req.body)

    if (!req.files) {

        module.exports.message = 'No file was uploaded';
        return res.redirect('/add');
    }


    let fruitName = req.body.fruitName;
    let colorId = +req.body.color;
    let calories = req.body.calories ? + req.body.calories : null;
    let seasonStart =  req.body.seasonStart;
    let seasonEnd =  req.body.seasonEnd;

    // CHOICE OPERATOR || - if we've got a value we use it, if not we want it to be "null"
    let image = req.files.image;

    let extension = image.mimetype.split('/')[1];

    if (!/^(gif|heic|jpeg|jpg|png|svg|webp)$/.test(extension)) {

        module.exports.message = `Wrong file extension: ${extension}`;
        return res.redirect('/add');

    }


    let imageName = `${fruitName}.${extension}`;

    let querySQL = `SELECT * FROM fruit WHERE fruit_name = '${fruitName}'`;

    db.query(querySQL,(err,result) => {

        if (err) {
            return res.status(500).send(`<h1>ERROR ${err.message}\n
            while performing\n
            ${querySQL}</h1>`);
        }


    if (result.length > 0) {

        module.exports.message = `Fruit named ${fruitName} already exist`;
        return res.redirect('/add');

    }

    querySQL = `INSERT INTO fruit (fruit_name, season, color_id, calories, image)
    VALUES ('${fruitName}','${seasonStart+" - "+seasonEnd}',${colorId},'${calories}',
    '${imageName}')`;

    db.query(querySQL,(err) => {

        if (err) {
            return res.status(500).send(`<h1>ERROR ${err.message}\n
            while performing\n
            ${querySQL}</h1>`);
        }
        // mv() - puts the file to some place in the disk
        image.mv(`static/assets/img/${imageName}`,(err) => {

            if (err) {
                // t.b.d. - delete the row from the database
                // `DELETE FROM fruit WHERE name = ${foodName}`
                return res.status(500).send(`<h1>ERROR ${err.message}\n
                        while performing mv() of \n
                        static/assets/img/${imageName}</h1>`);
            }

            res.redirect('/');

        }) // end of image.mv()

    }) // end of db.query('INSERT ...')

    
}) // end of db.query('SELECT ...')


}
}

