-- Revert random-cat-api:00-initial-schema from pg

BEGIN;

DROP TABLE cat;
DROP TABLE category;

COMMIT;
