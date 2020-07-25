-- Revert random-cat-api:10-allCats-function from pg

BEGIN;

DROP FUNCTION get_cats();

COMMIT;
