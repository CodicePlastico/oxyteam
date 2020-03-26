-- Table: public."ppmConcentrations"

-- DROP TABLE public."ppmConcentrations";

CREATE TABLE public."ppmConcentrations"
(
    "Date" timestamp with time zone NOT NULL,
    "Id" uuid NOT NULL,
    "Concentration" integer NOT NULL,
    CONSTRAINT "ppmConcentrations_pkey" PRIMARY KEY ("Id")
)

TABLESPACE pg_default;

ALTER TABLE public."ppmConcentrations"
    OWNER to postgres;