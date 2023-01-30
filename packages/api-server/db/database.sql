CREATE TABLE IF NOT EXISTS person
(
    id         BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name  VARCHAR(50),
    email      VARCHAR(50),
    gender     VARCHAR(6),
    job        VARCHAR(100),
    salary     NUMERIC(8, 2)
);

CREATE VIEW temp_view AS
SELECT id, last_name, email
FROM person;


ALTER TABLE person
    ADD CONSTRAINT gender_male_and_female_constraint CHECK (gender = 'Female' OR gender = 'Male');


CREATE OR REPLACE FUNCTION get_functions()
    RETURNS TABLE
            (
                name TEXT,
                type TEXT
            )
AS
$$
BEGIN
    RETURN QUERY
        SELECT CAST(routine_name AS TEXT), CAST(routine_type AS TEXT)
        FROM information_schema.routines
        WHERE routine_schema = 'public'
        ORDER BY routine_name;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_triggers()
    RETURNS SETOF pg_trigger
AS
$$
BEGIN
    RETURN QUERY
        SELECT * FROM pg_trigger WHERE tgname like 'my_trigger%';
END;
$$ LANGUAGE plpgsql;