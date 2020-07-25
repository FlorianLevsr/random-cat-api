-- Deploy random-cat-api:20-category-function to pg

BEGIN;

CREATE FUNCTION get_categories() RETURNS SETOF "category" AS
$$
    SELECT * FROM category ORDER BY id;
$$
LANGUAGE SQL STABLE STRICT;

COMMIT;
