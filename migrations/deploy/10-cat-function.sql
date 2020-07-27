-- Deploy random-cat-api:10-allCats-function to pg

BEGIN;

-- pour rechercher un chat grâce à son id

CREATE FUNCTION search_cat_by_id(i INT) RETURNS "cat" AS
$$
    SELECT * FROM "cat"
    WHERE cat.id = i;
$$

LANGUAGE SQL STABLE STRICT;

-- pour rechercher un chat en fonction de sa description

CREATE FUNCTION search_cat(user_request TEXT) RETURNS SETOF "cat" AS
$$
    SELECT * FROM "cat"
    WHERE cat.description ILIKE '%' || user_request || '%';

$$

LANGUAGE SQL STABLE STRICT;

COMMIT;
