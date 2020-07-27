-- Revert random-cat-api:00-initial-schema from pg

BEGIN;

DROP TABLE cat CASCADE;
DROP TABLE category CASCADE;

COMMIT;
