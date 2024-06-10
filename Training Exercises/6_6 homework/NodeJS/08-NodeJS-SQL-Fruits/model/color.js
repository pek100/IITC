
const db = require('../db');

module.exports = {

    // Get the list of cuisines with their id
    getColorList: (callback) => {

        let querySQL = 'SELECT id, color_name FROM colors';

        db.query(querySQL,(err,result) => {

            if (err) {
                console.log(err.message);
                callback(err,[]);
                return;
            }

            callback(err,result);

        })

    }


}
