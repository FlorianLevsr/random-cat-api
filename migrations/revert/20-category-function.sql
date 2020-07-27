-- Revert random-cat-api:20-category-function from pg

BEGIN;

DROP FUNCTION get_categories();

COMMIT;
