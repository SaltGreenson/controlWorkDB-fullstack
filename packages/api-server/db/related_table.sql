CREATE OR REPLACE FUNCTION get_related_table(_offset BIGINT DEFAULT 0, _limit BIGINT DEFAULT 20)
    RETURNS SETOF job AS
$$
BEGIN
    RETURN QUERY
        SELECT * FROM job OFFSET _offset LIMIT _limit;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_related_row(s_id BIGINT)
    RETURNS SETOF job AS
$$
BEGIN
    RETURN QUERY
        SELECT * FROM job WHERE id = s_id;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found.';
    END IF;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION update_related_row(u_id BIGINT, u_title VARCHAR(50), u_salary NUMERIC(5, 1))
    RETURNS SETOF job AS
$$
BEGIN
    RETURN QUERY
        UPDATE job SET job_title = u_title, salary = u_salary WHERE id = u_id
            RETURNING *;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found.';
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_related_row(c_title VARCHAR(50), c_salary NUMERIC(5, 1))
    RETURNS SETOF job AS
$$
BEGIN
    RETURN QUERY
        INSERT INTO job (job_title, salary) VALUES (c_title, c_salary)
            RETURNING *;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION delete_related_row(u_id BIGINT)
    RETURNS SETOF job AS
$$
BEGIN
    RETURN QUERY
        DELETE FROM job WHERE id = u_id
            RETURNING *;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found.';
    END IF;
END;
$$ LANGUAGE plpgsql;