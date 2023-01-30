CREATE OR REPLACE FUNCTION display_table(_offset INT DEFAULT 0, _limit INT DEFAULT 20)
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY
        SELECT *
        FROM belarus_region
        OFFSET _offset LIMIT _limit;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION update_table(
    u_id BIGINT,
    u_region VARCHAR(50),
    u_capital VARCHAR(50),
    u_square NUMERIC(8, 2),
    u_population NUMERIC(8, 2)
)
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY
        UPDATE belarus_region SET region = u_region, capital = u_capital, square = u_square, population = u_population  WHERE id = u_id
            RETURNING *;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found';
    END IF;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION delete_element(d_id BIGINT)
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY
        DELETE FROM belarus_region WHERE belarus_region.id = d_id RETURNING *;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found';
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_main_element(
    c_region VARCHAR(50),
    c_capital VARCHAR(50),
    c_square NUMERIC(8, 2),
    c_population NUMERIC(8, 2)
)
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY
        INSERT INTO belarus_region (region, capital, square, population) values (c_region, c_capital, c_square, c_population) RETURNING *;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_max()
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY
        SELECT *
        FROM belarus_region
        WHERE square = (SELECT MAX(square) from belarus_region);
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_min()
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY
        SELECT *
        FROM belarus_region
        WHERE square = (SELECT MIN(square) from belarus_region);
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_between(_from INTEGER, _to INTEGER)
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY
        SELECT *
        FROM belarus_region
        WHERE population BETWEEN _from AND _to
        ORDER BY population;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION search_data(search_text VARCHAR(255))
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY SELECT *
                 FROM belarus_region
                 WHERE capital LIKE '%' || search_text || '%'
                    OR region LIKE '%' || search_text || '%';
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION search_data_by_salary(search_salary numeric(8, 2))
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY SELECT *
                 FROM belarus_region
                 WHERE square <= search_salary
                 ORDER BY square DESC;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_count_less_than_average()
RETURNS TABLE(count BIGINT)
AS
$$
BEGIN
    RETURN QUERY
    SELECT COUNT(*) FROM belarus_region WHERE square < (SELECT AVG(square) FROM belarus_region);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_regions_less_than_average()
    RETURNS SETOF belarus_region
AS
$$
BEGIN
    RETURN QUERY
    SELECT * FROM belarus_region WHERE square < (SELECT AVG(square) FROM belarus_region);
END;
$$ LANGUAGE plpgsql;