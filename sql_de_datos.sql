-- LOCK TABLES `actor_episode` WRITE;
-- UNLOCK TABLES;
-- INSERT INTO `actors` VALUES (1,NULL,NULL,'Sam','Worthington',7.5,1),(2,NULL,NULL,'Zoe','Saldana',5.5,2),

-- Data for table 'usercategory'
INSERT INTO entrelineas.usercategory VALUES
(default,'user'),(default,'admin');


-- Data for table 'users' 
INSERT INTO entrelineas.users VALUES 
(default,'María Isolina','Durand Figueroa','isolinadurand@gmail.com','$2a$10$hp5ztx.IxeN1Snf29ic.dOUUDJIbNov4Qx1Vc2oJT32rj/oIWIzJG','img-1656894481277-785793624.jpg',1),
(default,'Manuel','Gago','manuelmeg96@gmail.com','$2a$10$u76NAPtWZbuvPTVjXHJtke6L0wy5gi0/cGRYphp0xu3f98AtswuGS','img-1657054974695-787462444.jpg',1),
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
(default, 'Quino'),
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
(default,'La Cabeza de Macri',4000,'',null,'','','/img/products/book-la-cabeza-de-macri.webp',9,1,2,1,null),
(default,'Matar un Ruiseñor',3260,'',336,
'Publicada en 1960, Matar un ruiseñor no ha parado de cruzar desde entonces la línea que separa las novelas juveniles de las adultas. Es la única novela publicada de Harper Lee, pero eso no fue un impedimento para que se llevase el Pullitzer ese mismo año. La escritora vivió su infancia y juventud entre la literatura y las desigualdades sociales, dos elementos que transmite en su obra.'
,'Matar un ruiseñor nos presenta una protagonista muy joven pero inteligente, Scout Finch, que vive en un pueblo imaginario del Alabama de la Gran Depresión. Es un momento histórico en el que los negros empiezan a alzar la voz, mientras que los blancos, aterrorizados por la posibilidad de revancha, estrechan más el cerco del racismo. La pólvora está echada y sólo falta encender la chispa. Scout no vive ajena a estos acontecimientos, pero tiene problemas mucho más serios que atender: con su hermano Jem y su nuevo amigo Drill, se propone averiguar qué sucede en la siniestra casa de “Boo” Radley, toda una aventura para el hastío del verano. El hecho de que los adultos se nieguen a hablar de él sólo aumenta la curiosidad de los tres niños, que se las ingenian para conseguir que el solitario vecino salga de su casa para poder verle. Para colmo, el misterioso “Boo” les deja regalos en el hueco de un árbol del jardín. ¿Quién es él exactamente, y por qué sólo sale por las noches?'
,'/img/products/book-matar-a-un-ruisenior.webp',9,2,1,1,null),
(default,'Red Queen',2600,'',null,'','','/img/products/book-red-queen.webp',9,3,1,1,null),
(default,'Harry Potter',5200,'','254',
'Harry Potter nunca conoció a sus padres. Desde bebé ha vivido con sus horribles tíos y primo, pero cuando está a punto de cumplir diez años, una serie de misteriosas y obstinadas cartas, y Hagrid, un gigantón bonachón, le desvelan que no es un niño normal: es un mago destinado a pasar a la historia; y que además irá a estudiar a Hogwarts, un colegio de magos. Allí conocerá a Ron y Hermione, de los que se hará amigo, y un secreto que pondrá en peligro su vida y la del resto de los hechiceros. '
,'','/img/products/book-harry-potter.jpeg',9,4,1,1,null),
(default,'Las Vidas dentro De tu cabeza',5400,'',null,'','','/img/products/book-las-vidas-dentro-de-tu-cabeza.webp',9,1,1,1,null),
(default,'El Buen Cirujano',5400,'',null,'','','/img/products/book-el-buen-cirujano.webp',9,5,1,1,null),
(default,'#TresTipsenTIC',1200,'500mg',150,'ta bueno','BUEN LIBRO','/img/products/book-TresTipsenTic.webp',9,7,4,2,null),
(default,'Psicología Social de la Educación',1500,'540mg',130,'ta bueno','BUEN LIBRO','/img/products/book-psicologia-social.jpeg',2,7,3,2,null),
(default,'Dump it!',2900,'670mg',180,'ta bueno','BUEN LIBRO','/img/products/book-dump-it.jpg',6,9,3,2,null),
(default,'El Capitalismo explicado a mi nieta',4200,'780mg',280,'ta bueno','BUEN LIBRO','/img/products/book-el-capitalismo.jpeg',8,10,5,2,null),
(default,'Recursos educativos',1200,'500mg',150,'ta bueno','BUEN LIBRO','/img/products/book-recursos-educativos.png',9,11,5,2,null),
(default,'Taza Entre Lineas',400,'400ml',null,'Taza de 400 ml color blanca, excelente para el cafe de la mañana junto a un libro',null,'/img/products/merch-taza.jpeg',20,null,null,3,null);

-- id,name.price,size,pages,opinion,more,picture,stock,idAu,idGen,idProdT,idEditproducts


