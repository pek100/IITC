USE fruits;

DROP TABLE IF EXISTS colors;

CREATE TABLE colors(
    id TINYINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    color_name VARCHAR(60) NOT NULL UNIQUE KEY,
)

INSERT INTO colors (color_name)
VALUES ('yellow')
,('green')
,('purple')