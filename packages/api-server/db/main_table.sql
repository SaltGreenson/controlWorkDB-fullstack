CREATE OR REPLACE FUNCTION display_table(_offset INT DEFAULT 0, _limit INT DEFAULT 20)
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        SELECT *
        FROM person
        OFFSET _offset LIMIT _limit;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION update_table(
    person_id BIGINT,
    u_first_name VARCHAR(100),
    u_last_name VARCHAR(100),
    u_email VARCHAR(100),
    u_gender VARCHAR(6),
    u_job VARCHAR(100),
    u_salary NUMERIC(8, 2)
)
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        UPDATE person SET first_name = u_first_name, last_name = u_last_name, email = u_email, gender = u_gender, job = u_job, salary = u_salary WHERE person.id = person_id
            RETURNING *;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found';
    END IF;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION delete_element(d_id BIGINT)
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        DELETE FROM person WHERE person.id = d_id RETURNING *;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found';
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_main_element(
    c_first_name VARCHAR(100),
    c_last_name VARCHAR(100),
    c_email VARCHAR(100),
    c_gender VARCHAR(6),
    c_job VARCHAR(100),
    c_salary NUMERIC(8, 2)
)
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        INSERT INTO person (first_name, last_name, email, gender, job, salary) values (c_first_name, c_last_name, c_email, c_gender, c_job, c_salary) RETURNING *;
END;
$$ LANGUAGE plpgsql;

-- CREATE OR REPLACE FUNCTION get_element_by_id(g_id BIGINT)
--     RETURNS SETOF *
-- AS
-- $$
-- BEGIN
--     RETURN QUERY
--         SELECT *
--         FROM person
--         WHERE id = g_id;
--     IF NOT FOUND THEN
--         RAISE EXCEPTION 'Object not found';
--     END IF;
-- END;
-- $$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_max()
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        SELECT *
        FROM person
        WHERE salary = (SELECT MAX(salary) from person);
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_min()
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        SELECT *
        FROM person
        WHERE salary = (SELECT MIN(salary) from person);
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_between(_from INTEGER, _to INTEGER)
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        SELECT *
        FROM person
        WHERE salary BETWEEN _from AND _to
        ORDER BY salary;
END;
$$ LANGUAGE plpgsql;


-- CREATE FUNCTION add_value_to_relatable() RETURNS TRIGGER AS
-- $$
-- BEGIN
--     IF (TG_OP = 'INSERT') THEN
--         UPDATE job SET salary = salary + 1 WHERE id = NEW.job_id;
--         RETURN NEW;
--     ELSIF (TG_OP = 'UPDATE') THEN
--         UPDATE job SET salary = salary - 1 WHERE id = NEW.job_id;
--         RETURN NEW;
--     END IF;
-- END;
-- $$ LANGUAGE plpgsql;
--
-- CREATE TRIGGER my_trigger_add_value_on_insert
--     AFTER INSERT OR UPDATE
--     ON person
--     FOR EACH ROW
-- EXECUTE FUNCTION add_value_to_relatable();

CREATE OR REPLACE FUNCTION search_data(search_text VARCHAR(255))
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY SELECT *
                 FROM person
                 WHERE job LIKE '%' || search_text || '%'
                    OR first_name LIKE '%' || search_text || '%'
                    OR last_name LIKE '%' || search_text || '%'
                    OR email LIKE '%' || search_text || '%'
                    OR gender LIKE '%' || search_text || '%';
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION search_data_by_salary(search_salary numeric(8, 2))
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY SELECT *
                 FROM person
                 WHERE salary <= search_salary
                 ORDER BY salary DESC;
END;
$$ LANGUAGE plpgsql;