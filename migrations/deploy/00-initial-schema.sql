-- Deploy random-cat-api:00-initial-schema to pg

BEGIN;

CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE
);

CREATE TABLE "cat" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "category_id" INT REFERENCES "category"("id"),
    "img" TEXT NOT NULL UNIQUE,
    "description" TEXT
);

COMMIT;
