-- Deploy random-cat-api:30-views to pg

BEGIN;

-- vue pour récupérer tous les chats et faire la jointure avec la table category
-- cat.id | category (jointure cat.category_id = category.id pour ne récupérer que le category.label) | cat.description | cat.img

CREATE VIEW all_cats AS

SELECT cat.id, category.label AS category, cat.description, cat.img FROM "cat"
JOIN "category" ON cat.category_id = category.id
ORDER BY cat.id;

-- vue pour récupérer un chat aléatoire et faire la jointure avec la table category
-- cat.id | category (jointure cat.category_id = category.id pour ne récupérer que le category.label) | cat.description | cat.img

CREATE VIEW random_cat AS

SELECT cat.id, category.label AS category, cat.description, cat.img FROM "cat"
JOIN "category" ON cat.category_id = category.id
ORDER BY RANDOM() LIMIT 1;

COMMIT;
