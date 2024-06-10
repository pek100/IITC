USE fruits;

DROP TABLE IF EXISTS fruit;

CREATE TABLE fruit (
    id SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fruit_name VARCHAR(50) NOT NULL UNIQUE KEY,
    season CHAR(5) NULL,
    color_id TINYINT NULL,
    calories SMALLINT NULL,
    image VARCHAR(250) NOT NULL
);

INSERT INTO fruit (fruit_name, season, color_id, calories, image)
VALUES ('pineapple', 'march-july', 1 , 50, 'pineapple.jpeg')
,('apple', 'september-november', 2, 52, 'apple.jpeg')
,('banana', 'year-round', 1, 96, 'banana.jpeg')
,('cherry', 'may-july', 3, 50, 'cherry.jpeg');

