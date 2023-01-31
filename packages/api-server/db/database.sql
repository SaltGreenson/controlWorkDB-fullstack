CREATE TABLE IF NOT EXISTS belarus_region
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    region VARCHAR(50),
    capital VARCHAR(50),
    square NUMERIC(8, 2),
    population NUMERIC(8, 2)
);


ALTER TABLE belarus_region ADD CONSTRAINT region_must_be_unique UNIQUE (region);
ALTER TABLE belarus_region ADD CONSTRAINT capital_must_be_unique UNIQUE (capital);


INSERT INTO belarus_region (region, capital, square, population) VALUES ('Бресткая', 'Брест', 32.8, 1445.6);
INSERT INTO belarus_region (region, capital, square, population) VALUES ('Витебская', 'Витебск', 40.0, 1294.7);
INSERT INTO belarus_region (region, capital, square, population) VALUES ('Гомельская', 'Гомель', 40.4, 1485.1);
INSERT INTO belarus_region (region, capital, square, population) VALUES ('Гродненская', 'Гродно', 25.1, 1123.5);
INSERT INTO belarus_region (region, capital, square, population) VALUES ('Минская', 'Минск', 39.96, 1474.1);
INSERT INTO belarus_region (region, capital, square, population) VALUES ('Могилевская', 'Могилев', 29.0, 1146.8);


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