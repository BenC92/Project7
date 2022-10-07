DROP DATABASE IF EXISTS groupomania;
CREATE DATABASE groupomania
DEFAULT CHARACTER SET utf8mb4 COLLATE = utf8mb4_general_ci;
USE groupomania;


CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `last_name` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(250) NOT NULL,
  `pp` varchar(500) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL,
  `admin` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `user` WRITE;

INSERT INTO `user` VALUES (102,'Montes','Manuel','mariom@email.com','$2b$10$X4rj9c35..OJE7S3bCBuredQ2TI0f.fsFxQaHwGYR0O.7yLC7wIg6','http://localhost:3000/images/profile/image1662922643932.png','web dev',1),(103,'west','beanie','beanie@email.com','$2b$10$DTYXHAZAyk7TL1JH4Ab53uxen1itUftIqTiDqEzYt4ephgKU1RbjS','http://localhost:3000/images/profile/image1663103489408.jpg','Poster',0);

UNLOCK TABLES;

CREATE TABLE `post` (
  `postId` int NOT NULL AUTO_INCREMENT,
  `text` varchar(300) DEFAULT NULL,
  `imageUrl` varchar(300) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `like` int DEFAULT '0',
  `authorId` int NOT NULL,
  `comment` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`postId`),
  KEY `authorId_idx` (`authorId`),
  CONSTRAINT `authorId` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=319 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



LOCK TABLES `post` WRITE;

INSERT INTO `post` VALUES (318,'this is a test post','http://localhost:3000/images/post/image1663079137241.jpg','2022-09-13 16:25:37',2,102,1);

UNLOCK TABLES;

CREATE TABLE `comment` (
  `idComment` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(500) NOT NULL,
  `authorId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`idComment`),
  KEY `authorId_idx` (`authorId`),
  KEY `postId_idx` (`postId`),
  CONSTRAINT `author` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `postId` FOREIGN KEY (`postId`) REFERENCES `post` (`postId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=213 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `comment` WRITE;

INSERT INTO `comment` VALUES (212,'this post is great!!!',103,318);

UNLOCK TABLES;




CREATE TABLE `like` (
  `likeId` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`likeId`),
  KEY `postId_idx` (`postId`),
  KEY `userIdlike_idx` (`userId`),
  CONSTRAINT `postIdlikes` FOREIGN KEY (`postId`) REFERENCES `post` (`postId`) ON DELETE CASCADE,
  CONSTRAINT `userIdlike` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=452 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `like` WRITE;

INSERT INTO `like` VALUES (448,318,102),(450,318,103);

UNLOCK TABLES;









