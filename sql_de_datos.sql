-- LOCK TABLES `actor_episode` WRITE;
-- UNLOCK TABLES;
-- INSERT INTO `actors` VALUES (1,NULL,NULL,'Sam','Worthington',7.5,1),(2,NULL,NULL,'Zoe','Saldana',5.5,2),

-- Data for table 'usercategory'
INSERT INTO entrelineas.usercategory VALUES
(1,'user'),(2,'admin');


-- Data for table 'users' 
INSERT INTO entrelineas.users VALUES 
(1,'María Isolina','Durand Figueroa','isolinadurand@gmail.com','$2a$10$hp5ztx.IxeN1Snf29ic.dOUUDJIbNov4Qx1Vc2oJT32rj/oIWIzJG','img-1656894481277-785793624.jpg',1),
(2,'Manuel','Gago','manuelmeg96@gmail.com','$2a$10$u76NAPtWZbuvPTVjXHJtke6L0wy5gi0/cGRYphp0xu3f98AtswuGS','img-1656894481277-785793624.jpg',1),
(3,'Bronco','Kesting','bronco@gmail.com','$2a$10$uN/ndZg8axVVBagbEukWNO1ft4VNzn0GivFuOJvHxphX0r2T5nH76','img-1657195760992-497204755.jpg',1);

-- Data for table 'producttypes'
INSERT INTO entrelineas.producttypes VALUES
(1,'Libro'),
(2,'Ebook'),
(3,'Varios');

-- Data for table 'genres'
INSERT INTO entrelineas.genres VALUES
(1,'Biografía'),
(2,'Medicina autoayuda');

-- Data for table 'editorials'
INSERT INTO entrelineas.editorials VALUES
(1,'Aique'),
(2,'Utopiaa'),
(3,'estrada'),
(4,'El Ateneo');

-- Data for table 'authors'
INSERT INTO entrelineas.authors VALUES 
(1,'Franco Linder'),
(2,'Harper Lee'),
(3,'Victoria Avyard'),
(4,'J.K.Rowling'),
(5,'Ricardo García'),
(6,'Doctora Fany Lopez');

-- Data for table 'products'
INSERT INTO entrelineas.products VALUES
(1,'La Cabeza de Macri',4000,'','','Este es un libro ... que tiene ... muy interesante...','','/img/products/book-la-cabeza-de-macri.webp',9,1,1,1,null),
(2,'Matar un Ruiseñor',3260,'','','','','/img/products/book-matar-a-un-ruisenior.webp',9,2,null,1,null),
(3,'Red Queen',2600,'','','','','/img/products/book-harry-potter.jpeg',9,4,null,1,null),
(4,'Harry Potter',5200,'','','','','/img/products/book-red-queen.webp',9,3,null,1,null),
(5,'Las Vidas dentro De tu cabeza',5400,'','','','','/img/products/book-las-vidas-dentro-de-tu-cabeza.webp',9,1,null,1,null),
(6,'El Buen Cirujano',5400,'','','','','/img/products/book-el-buen-cirujano.webp',9,5,null,1,null),
(7,'Como educar a tu bebe',10000,'10 x 30',150,'ta bueno','BUEN LIBRO','/img/products/productImg-1657459177808.jpg',9,6,2,1,null);
-- id,name.price,size,pages,opinion,more,picture,stock,idAu,idGen,idProdT,idEdit