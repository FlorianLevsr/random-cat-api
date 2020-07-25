-- Revert random-cat-api:20-category-function from pg

BEGIN;

DROP FUNCTION get_categories();
DROP FUNCTION get_random_cat();

COMMIT;
