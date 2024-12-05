CREATE DATABASE  IF NOT EXISTS `education_system`;
USE `education_system`;

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `matricula` varchar(20) NOT NULL,
  `course_id` int NOT NULL,
  `name` varchar(250) NOT NULL,
  `bithday` varchar(250) DEFAULT NULL,
  `cpf` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `situation` varchar(25) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `matricula` (`matricula`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `subjects`;
CREATE TABLE `subjects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `teacher` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `grades`;
CREATE TABLE `grades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `subject_id` int NOT NULL,
  `grade` decimal(5,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `teacher_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `student_subject`;
CREATE TABLE `student_subject` (
  `student_id` int NOT NULL,
  `subject_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `students` VALUES (1,2,'1324',1,'Erick Nagoski','2002-12-02','052.362.480-86','ericknagoski@gmail.com','549844471179','farroupilha','Ativo','2024-11-25 22:34:29','2024-12-01 12:56:47'),(13,NULL,'9876',1,'João teste','2001-01-01','683.566.090-20','ericknagoski@gmail.com','549844471179','Linha São José 1 Distrito','Ativo','2024-12-03 22:20:21','2024-12-03 22:20:21'),(14,NULL,'112233',2,'Lucas','2002-08-02','12345678910','lucas@gmail.com','549844471179','Linha São José 1 Distrito','Transferido','2024-12-03 22:28:22','2024-12-03 22:28:22');
INSERT INTO `subjects` VALUES (1,'Matemática',3,'2024-11-26 03:08:40'),(2,'Física',4,'2024-11-26 03:08:40'),(3,'História',5,'2024-11-26 03:08:40'),(4,'Química',1,'2024-11-26 03:08:40'),(15,'Programação',2,'2024-12-03 22:18:59'),(16,'Inglês',5,'2024-12-03 22:23:08'),(17,'Teste de software',2,'2024-12-03 22:26:34'),(18,'Banco de dados',2,'2024-12-03 22:36:34');
INSERT INTO `teacher` VALUES (1,'Alice Silva','2024-11-28 00:48:20'),(2,'Bruno Santos','2024-11-28 00:48:20'),(3,'Carla Oliveira','2024-11-28 00:48:20'),(4,'Diego Costa','2024-11-28 00:48:20'),(5,'Elisa Martins','2024-11-28 00:48:20');
INSERT INTO `student_subject` VALUES (1,1,'2024-12-01 12:59:03'),(1,4,'2024-12-01 13:03:04'),(1,3,'2024-12-01 13:04:22'),(1,4,'2024-12-02 16:28:51'),(1,18,'2024-12-03 22:38:14');
INSERT INTO `grades` VALUES (3,2,1,9.00,'2024-11-26 03:08:40'),(4,2,3,8.00,'2024-11-26 03:08:40'),(20,1,4,10.00,'2024-12-01 13:04:49'),(21,1,3,10.00,'2024-12-03 22:37:11');
INSERT INTO `users` VALUES (1,'admin@education.com','password','2024-11-25 22:33:40','2024-11-28 01:55:16','school'),(2,'ericknagoski@gmail.com','student','2024-11-25 22:33:40','2024-11-29 02:58:11','student'),(7,'lucas@gmail.com','112233','2024-12-03 22:28:22','2024-12-03 22:28:22','student');

