
-- pour utiliser dans pgAdmin :
-- 1/ clic droit sur la base gbay, puis "query tool"
-- 2/ cliquer sur l'icone répertoire
-- 3/ sélectionner ce fichier
-- 4/ cliquer sur l'icone 'éclair' ou F5


INSERT INTO public."Category"(title, "createdAt", "updatedAt") VALUES
  ('Apple', now(), now()),
  ('composant', now(), now()),
  ('PC', now(), now()),
  ('livres', now(), now())
;

INSERT INTO public."Role"(title, "createdAt", "updatedAt") VALUES
  ('user', now(), now()),
  ('admin', now(), now())
;

INSERT INTO public."User"("userId", email, pswd, address, "createdAt", "updatedAt", "roleTitle") VALUES
  (uuid_generate_v4(), 'bibi@gmail.com', 'iamtheboss', 'chez ta maman', now(), now(), 'admin'),
  (uuid_generate_v4(), 'abde@outlook.com', 'onclebens', 'Paris', now(), now(), 'user'),
  (uuid_generate_v4(), 'caro@yahoo.fr', 'souris', 'Vincennes', now(), now(), 'user')
;

INSERT INTO public."Product"("productId", title, description, price, "biddingStart", "biddingEnd", "createdAt", "updatedAt", "sellerUserId") VALUES
  (uuid_generate_v4(), 'iPhone', 'il est déjà has-been faut que je prenne le nouveau', 500, now(), now() + interval '1 days', now(), now(), (select "userId" from "User" where email='bibi@gmail.com')),
  (uuid_generate_v4(), 'livre anglais', 'niveau C1', 15, now(), now() + interval '1 days', now(), now(), (select "userId" from "User" where email='caro@yahoo.fr'))
;

INSERT INTO public."Product"("productId", title, description, price, "createdAt", "updatedAt", "sellerUserId") VALUES
  (uuid_generate_v4(), 'processeur', 'Intel core i5', 100, now(), now(), (select "userId" from "User" where email='abde@outlook.com'))
;

INSERT INTO public."CategoryProduct"("createdAt", "updatedAt", "ProductProductId", "CategoryTitle") VALUES
  (now(), now(), (select "productId" from "Product" where title = 'iPhone'), 'Apple'),
  (now(), now(), (select "productId" from "Product" where title = 'livre anglais'), 'livres'),
  (now(), now(), (select "productId" from "Product" where title = 'processeur'), 'composant')
;
