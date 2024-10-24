-- Gera��o de Modelo f�sico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE PACIENTE (
IDPACIENTE INTEGER PRIMARY KEY,
EMAIL VARCHAR(100),
CPF VARCHAR(11),
SENHA VARCHAR(50),
NOME VARCHAR(100),
IDPERFILACESSO INTEGER
)

CREATE TABLE PERFILACESSO (
IDPERFILACESSO INTEGER PRIMARY KEY,
CODIGO INTEGER
)

CREATE TABLE TELEFONE (
IDTELEFONE INTEGER PRIMARY KEY,
NUMERO INTEGER,
DDD INTEGER,
IDMEDICO INTEGER,
IDPACIENTE INTEGER,
FOREIGN KEY(IDPACIENTE) REFERENCES PACIENTE (IDPACIENTE)
)

CREATE TABLE CONSULTA (
IDCONSULTA INTEGER PRIMARY KEY,
HORARIO DATETIME,
IDMEDICO INTEGER,
IDPACIENTE INTEGER,
FOREIGN KEY(IDPACIENTE) REFERENCES PACIENTE (IDPACIENTE)
)

CREATE TABLE MEDICO (
IDMEDICO INTEGER PRIMARY KEY,
NOME VARCHAR(100),
SENHA VARCHAR(50),
EMAIL VARCHAR(100),
IDPERFILACESSO INTEGER,
FOREIGN KEY(IDPERFILACESSO) REFERENCES PERFILACESSO (IDPERFILACESSO)
)

CREATE TABLE ESPECIALIDADE (
IDESPECIALIDADE INTEGER PRIMARY KEY,
NOME VARCHAR(100),
IDMEDICO INTEGER,
FOREIGN KEY(IDMEDICO) REFERENCES MEDICO (IDMEDICO)
)

ALTER TABLE PACIENTE ADD FOREIGN KEY(IDPERFILACESSO) REFERENCES PERFILACESSO (IDPERFILACESSO)
ALTER TABLE TELEFONE ADD FOREIGN KEY(IDMEDICO) REFERENCES MEDICO (IDMEDICO)
ALTER TABLE CONSULTA ADD FOREIGN KEY(IDMEDICO) REFERENCES MEDICO (IDMEDICO)
