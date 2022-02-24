
Diagrama atualizado: https://dbdiagram.io/d/6205b72485022f4ee575c194

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR NOT NULL,
    display_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    birthday TIMESTAMP NOT NULL,
    nba_team VARCHAR NOT NULL,
    role VARCHAR DEFAULT 'user',
    avatar VARCHAR DEFAULT 'default_profile.jpg',
    cover VARCHAR DEFAULT 'default_cover.jpg',
    address_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_DATE(),
    updated_at TIMESTAMP DEFAULT CURRENT_DATE(),
    PRIMARY KEY(id),
    FOREIGN KEY(address_id) REFERENCES adresses(id)
);

CREATE TABLE adresses (
    id INT NOT NULL AUTO_INCREMENT,
    country VARCHAR NOT NULL,
    state VARCHAR NOT NULL,
    city VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_DATE(),
    updated_at TIMESTAMP DEFAULT CURRENT_DATE(),
    PRIMARY KEY(id)
);

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    owner_id INT NOT NULL,
    description VARCHAR NOT NULL,
    image VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_DATE(),
    updated_at TIMESTAMP DEFAULT CURRENT_DATE(),
    PRIMARY KEY(id),
    FOREIGN KEY(owner_id) REFERENCES users(id) 
);

CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR NOT NULL,
  owner_id INT NOT NULL,
  post_id INT NOT NULL,
  parent_comment_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_DATE(),
  updated_at TIMESTAMP DEFAULT CURRENT_DATE(),
  PRIMARY KEY(id),
  FOREIGN KEY(owner_id) REFERENCES users(id),
  FOREIGN KEY(post_id) REFERENCES posts(id),
  FOREIGN KEY(parent_comment_id) REFERENCES comments(id)
);

CREATE TABLE likes (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(post_id) REFERENCES posts(id)
);

