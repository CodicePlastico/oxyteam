-- DROP TABLE ppmConcentrations;

CREATE TABLE ppmConcentrations
(
    "Date" timestamp with time zone NOT NULL,
    "Id" uuid NOT NULL,
    "Concentration" integer NOT NULL,
    CONSTRAINT "ppmConcentrations_pkey" PRIMARY KEY ("Id")
)