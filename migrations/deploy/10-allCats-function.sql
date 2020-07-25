-- Deploy random-cat-api:10-allCats-function to pg

BEGIN;

CREATE FUNCTION get_cats() RETURNS SETOF "cat" AS
$$
    SELECT * FROM cat ORDER BY id;
$$
LANGUAGE SQL STABLE STRICT;

COMMIT;
