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

-- Data for table 'editorials'
INSERT INTO entrelineas.editorials VALUES
(default,'Aique'),
(default,'Utopiaa'),
(default,'estrada'),
(default,'El Ateneo'),
(default,'UOC');

-- Data for table 'authors'
INSERT INTO entrelineas.authors VALUES 
(default,'Franco Linder'),
(default,'Harper Lee'),
(default,'Victoria Avyard'),
(default,'J.K.Rowling'),
(default,'Ricardo García'),
(default,'Doctora Fany Lopez'),
(default,'Diana Rodriguez Palchevich'),
(default,'Anastacio ovejero bernal'),
(default,'Michael W. Malone'),
(default,'Jean Ziegler'),
(default,'María V. Rosas');

-- Data for table 'genres'
INSERT INTO entrelineas.genres VALUES
(default,'Otros'),
(default,'Biografía'),
(default,'Medicina autoayuda'),
(default,'Comedia'),
(default,'Educativo');

-- Data for table 'products'
INSERT INTO entrelineas.products VALUES
(default,'La Cabeza de Macri',4000,'',null,'Este es un libro ... que tiene ... muy interesante...','','/img/products/book-la-cabeza-de-macri.webp',9,1,2,1,null),
(default,'Matar un Ruiseñor',3260,'',null,'','','/img/products/book-matar-a-un-ruisenior.webp',9,2,1,1,null),
(default,'Red Queen',2600,'',null,'','','/img/products/book-red-queen.webp',9,4,1,1,null),
(default,'Harry Potter',5200,'',null,'','','/img/products/book-harry-potter.jpeg',9,3,1,1,null),
(default,'Las Vidas dentro De tu cabeza',5400,'',null,'','','/img/products/book-las-vidas-dentro-de-tu-cabeza.webp',9,1,1,1,null),
(default,'El Buen Cirujano',5400,'',null,'','','/img/products/book-el-buen-cirujano.webp',9,5,1,1,null),
(default,'Como educar a tu bebe',10000,'10 x 30',150,'ta bueno','BUEN LIBRO','/img/products/productImg-1657459177808.jpg',9,6,3,1,null),
(default,'#TresTipsenTIC',1200,'500mg',150,'ta bueno','BUEN LIBRO','/img/products/book-TresTipsenTic.webp',9,7,4,2,null),
(default,'Psicología Social de la Educación',1500,'540mg',130,'ta bueno','BUEN LIBRO','/img/products/book-psicologia-social.jpeg',2,7,3,2,null),
(default,'Dump it!',2900,'670mg',180,'ta bueno','BUEN LIBRO','/img/products/book-dump-it.jpg',6,9,3,2,null),
(default,'El Capitalismo explicado a mi nieta',4200,'780mg',280,'ta bueno','BUEN LIBRO','/img/products/book-el-capitalismo.jpeg',8,10,5,2,null),
(default,'Recursos educativos',1200,'500mg',150,'ta bueno','BUEN LIBRO','/img/products/book-recursos-educativos.png',9,11,5,2,null);
-- id,name.price,size,pages,opinion,more,picture,stock,idAu,idGen,idProdT,idEditproducts
