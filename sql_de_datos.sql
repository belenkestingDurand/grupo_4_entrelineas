
-- LOCK TABLES `actor_episode` WRITE;
-- UNLOCK TABLES;
-- INSERT INTO `actors` VALUES (1,NULL,NULL,'Sam','Worthington',7.5,1),(2,NULL,NULL,'Zoe','Saldana',5.5,2),

-- Data for table 'usercategory'
INSERT INTO entrelineas.usercategory VALUES
(default,'user'),(default,'admin');


-- Data for table 'users' 
INSERT INTO entrelineas.users VALUES 
(default,'María Isolina','Durand Figueroa','isolinadurand@gmail.com','$2a$10$hp5ztx.IxeN1Snf29ic.dOUUDJIbNov4Qx1Vc2oJT32rj/oIWIzJG','img-1656894481277-785793624.jpg',1),
(default,'Manuel','Gago','manuelmeg96@gmail.com','$2a$10$u76NAPtWZbuvPTVjXHJtke6L0wy5gi0/cGRYphp0xu3f98AtswuGS','img-1656894481277-785793624.jpg',1),
(default,'Bronco','Kesting','bronco@gmail.com','$2a$10$uN/ndZg8axVVBagbEukWNO1ft4VNzn0GivFuOJvHxphX0r2T5nH76','img-1657195760992-497204755.jpg',1);

-- Data for table 'producttypes'
INSERT INTO entrelineas.producttypes VALUES
(default,'Libro'),
(default,'Ebook'),
(default,'Varios');

-- Data for table 'genres'
INSERT INTO entrelineas.genres VALUES
(default,'Biografía'),
(default,'Medicina autoayuda');

-- Data for table 'editorials'
INSERT INTO entrelineas.editorials VALUES
(default,'Aique'),
(default,'Utopiaa'),
(default,'estrada'),
(default,'El Ateneo');

-- Data for table 'authors'
INSERT INTO entrelineas.authors VALUES 
(default,'Franco Linder'),
(default,'Harper Lee'),
(default,'Victoria Avyard'),
(default,'J.K.Rowling'),
(default,'Ricardo García'),
(default,'Doctora Fany Lopez');

-- Data for table 'products'
INSERT INTO entrelineas.products VALUES
(default,'La Cabeza de Macri',4000,'','','Este es un libro ... que tiene ... muy interesante...','','/img/products/book-la-cabeza-de-macri.webp',9,1,1,1,null),
(default,'Matar un Ruiseñor',3260,'','','','','/img/products/book-matar-a-un-ruisenior.webp',9,2,null,1,null),
(default,'Red Queen',2600,'','','','','/img/products/book-harry-potter.jpeg',9,4,null,1,null),
(default,'Harry Potter',5200,'','','','','/img/products/book-red-queen.webp',9,3,null,1,null),
(default,'Las Vidas dentro De tu cabeza',5400,'','','','','/img/products/book-las-vidas-dentro-de-tu-cabeza.webp',9,1,null,1,null),
(default,'El Buen Cirujano',5400,'','','','','/img/products/book-el-buen-cirujano.webp',9,5,null,1,null),
(default,'Como educar a tu bebe',10000,'10 x 30',150,'ta bueno','BUEN LIBRO','/img/products/productImg-1657459177808.jpg',9,6,2,1,null);
-- id,name.price,size,pages,opinion,more,picture,stock,idAu,idGen,idProdT,idEdit