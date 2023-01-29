CREATE OR REPLACE FUNCTION display_main_table_with_relatable(_offset INT DEFAULT 0, _limit INT DEFAULT 20)
    RETURNS TABLE
            (
                id         BIGINT,
                first_name VARCHAR(100),
                last_name  VARCHAR(100),
                email      VARCHAR(100),
                gender     VARCHAR(6),
                job_title  VARCHAR(100),
                salary     NUMERIC(5, 2)
            )
AS
$$
BEGIN
    RETURN QUERY
        SELECT person.id, person.first_name, person.last_name, person.email, person.gender, job.job_title, job.salary
        FROM person
                 JOIN job ON job.id = person.job_id
        OFFSET _offset LIMIT _limit;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION update_main_table(person_id BIGINT,
                                             u_first_name VARCHAR(100),
                                             u_last_name VARCHAR(100),
                                             u_email VARCHAR(100),
                                             u_gender VARCHAR(6),
                                             u_job_id BIGINT DEFAULT NULL
)
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        UPDATE person SET first_name = u_first_name, last_name = u_last_name, email = u_email, gender = u_gender, job_id = u_job_id WHERE person.id = person_id
            RETURNING *;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found.';
    END IF;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION delete_element_from_main_table(d_id BIGINT)
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        DELETE FROM person WHERE person.id = d_id RETURNING *;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found.';
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_main_element(
    c_first_name VARCHAR(100),
    c_last_name VARCHAR(100),
    c_email VARCHAR(100),
    c_gender VARCHAR(6),
    c_job_id BIGINT DEFAULT NULL
)
    RETURNS SETOF person
AS
$$
BEGIN
    RETURN QUERY
        INSERT INTO person (first_name, last_name, email, gender, job_id) values (c_first_name, c_last_name, c_email, c_gender, c_job_id) RETURNING *;
END;
$$ LANGUAGE plpgsql;

-- select * from create_main_element('Vlad', 'Yuskovich', 'vladyuskovich@gmail.com', 'Male', 36);

CREATE OR REPLACE FUNCTION get_main_element(g_id BIGINT)
    RETURNS TABLE
            (
                id         BIGINT,
                first_name VARCHAR(100),
                last_name  VARCHAR(100),
                email      VARCHAR(100),
                gender     VARCHAR(6),
                job_title  VARCHAR(100),
                salary     NUMERIC(5, 2)
            )
AS
$$
BEGIN
    RETURN QUERY
        SELECT person.id, person.first_name, person.last_name, person.email, person.gender, job.job_title, job.salary
        FROM person
                 JOIN job ON job.id = person.id
        WHERE person.id = g_id;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Object not found.';
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_max()
    RETURNS TABLE
            (
                id         BIGINT,
                first_name VARCHAR(100),
                last_name  VARCHAR(100),
                email      VARCHAR(100),
                gender     VARCHAR(6),
                job_title  VARCHAR(100),
                salary     NUMERIC(5, 2)
            )
AS
$$
BEGIN
    RETURN QUERY
        SELECT person.id, person.first_name, person.last_name, person.email, person.gender, job.job_title, job.salary
        FROM person
                 JOIN job ON job.id = person.job_id
        ORDER BY salary DESC
        LIMIT 1;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_min()
    RETURNS TABLE
            (
                id         BIGINT,
                first_name VARCHAR(100),
                last_name  VARCHAR(100),
                email      VARCHAR(100),
                gender     VARCHAR(6),
                job_title  VARCHAR(100),
                salary     NUMERIC(5, 2)
            )
AS
$$
BEGIN
    RETURN QUERY
        SELECT person.id, person.first_name, person.last_name, person.email, person.gender, job.job_title, job.salary
        FROM person
                 JOIN job ON job.id = person.job_id
        ORDER BY salary
        LIMIT 1;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_between(_from INTEGER, _to INTEGER)
    RETURNS TABLE
            (
                id         BIGINT,
                first_name VARCHAR(100),
                last_name  VARCHAR(100),
                email      VARCHAR(100),
                gender     VARCHAR(6),
                job_title  VARCHAR(100),
                salary     NUMERIC(5, 2)
            )
AS
$$
BEGIN
    RETURN QUERY
        SELECT person.id, person.first_name, person.last_name, person.email, person.gender, job.job_title, job.salary
        FROM person
                 JOIN job ON job.id = person.job_id
        WHERE job.salary BETWEEN _from AND _to
        ORDER BY job.salary;
END;
$$ LANGUAGE plpgsql;


CREATE FUNCTION add_value_to_relatable() RETURNS TRIGGER AS
$$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        UPDATE job SET salary = salary + 1 WHERE id = NEW.job_id;
        RETURN NEW;
    ELSIF (TG_OP = 'UPDATE') THEN
        UPDATE job SET salary = salary - 1 WHERE id = NEW.job_id;
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER my_trigger_add_value_on_insert
    AFTER INSERT OR UPDATE
    ON person
    FOR EACH ROW
EXECUTE FUNCTION add_value_to_relatable();