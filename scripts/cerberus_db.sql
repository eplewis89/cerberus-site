CREATE TABLE thoughts(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    date_posted DATETIME NOT NULL
) AUTO_INCREMENT=1000;

INSERT INTO thoughts (id, title, content, date_posted) VALUES
  (1, 'congratulations!', 'you have somehow found this post',  NOW()),