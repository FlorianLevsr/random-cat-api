-- Revert random-cat-api:30-views from pg

BEGIN;

DROP VIEW all_cats;
DROP VIEW random_cat;

COMMIT;
