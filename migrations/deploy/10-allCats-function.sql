-- Deploy random-cat-api:10-allCats-function to pg

BEGIN;

CREATE FUNCTION get_cats() RETURNS SETOF "cat" AS
$$
    SELECT * FROM "cat" ORDER BY id;
$$
LANGUAGE SQL STABLE STRICT;

CREATE FUNCTION get_random_cat() RETURNS "cat" AS
$$
    SELECT * FROM get_cats() ORDER BY RANDOM() LIMIT 1;
$$
LANGUAGE SQL STABLE STRICT;

COMMIT;
