-- Revert random-cat-api:10-allCats-function from pg

BEGIN;

DROP FUNCTION search_cat_by_id(INT);
DROP FUNCTION search_cat(TEXT);

COMMIT;
