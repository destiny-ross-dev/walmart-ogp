-- DDL generated by Postico 1.5.8
-- Not all database features are supported. Do not use for backup.

-- Table Definition ----------------------------------------------

CREATE TABLE users (
    user_id uuid PRIMARY KEY,
    username character varying(16) NOT NULL UNIQUE,
    email citext NOT NULL UNIQUE,
    hashpass text NOT NULL,
    user_type usertype NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX users_pkey ON users(user_id uuid_ops);
CREATE UNIQUE INDEX users_username_key ON users(username text_ops);
CREATE UNIQUE INDEX users_email_key ON users(email citext_ops);


CREATE TABLE stores (
    store_id uuid PRIMARY KEY,
    store_number character varying(6) NOT NULL,
    store_name character varying(75) NOT NULL,
    address character varying(75) NOT NULL,
    city character varying(75) NOT NULL,
    state character varying(2) NOT NULL,
    zipcode character varying(5) NOT NULL,
    phone character varying(10) NOT NULL,
    manager character varying(75) NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX stores_pkey ON stores(store_id uuid_ops);

-- Table Definition ----------------------------------------------

CREATE TABLE employees (
    employee_id character varying(9) PRIMARY KEY UNIQUE,
    user_id uuid NOT NULL REFERENCES users(user_id),
    store_id uuid NOT NULL REFERENCES stores(store_id),
    first_name character varying(75),
    last_name character varying(75),
    phone character varying(10)
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX employees_pkey ON employees(employee_id text_ops);
CREATE UNIQUE INDEX employees_employee_id_key ON employees(employee_id text_ops);
