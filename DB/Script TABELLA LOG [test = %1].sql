-- ====================================================================
-- CREAZIONE TABELLA LOG
-- ====================================================================
CREATE TABLE LOGAPPLICATIVO1 (
    ID_LOG                 NUMBER NOT NULL,
    DATA_ORA               TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    ID_UTENTE              NUMBER,             -- Può essere NULL se l'azione avviene prima del login o è di sistema
    EMAIL_UTENTE           VARCHAR2(100 BYTE), -- Comoda per vedere subito chi è senza fare join
    LIVELLO                VARCHAR2(10 BYTE) NOT NULL,  -- INFO, WARNING, ERROR, SUCCESS
    AZIONE                 VARCHAR2(50 BYTE) NOT NULL,  -- LOGIN, LOGOUT, INSERT_TESSERA, UPDATE_UTENTE, ecc.
    DESCRIZIONE            CLOB,               -- Testo libero o JSON per i dettagli dell'azione/errore
    INDIRIZZO_IP           VARCHAR2(45 BYTE),  -- Supporta sia IPv4 che IPv6
    
    CONSTRAINT LOGAPPLICATIVO1_PK PRIMARY KEY (ID_LOG),
    -- Vincolo sui livelli di log ammessi
    CONSTRAINT LOG1_LIVELLO_CHK CHECK (LIVELLO IN ('INFO', 'WARNING', 'ERROR', 'SUCCESS'))
);

-- ====================================================================
-- CREAZIONE SEQUENZE E TRIGGER (COMPATIBILITÀ UNIVERSALE)
-- ====================================================================
CREATE SEQUENCE SEQLOGAPPLICATIVO1 START WITH 1 INCREMENT BY 1 NOCACHE;

CREATE OR REPLACE TRIGGER TRGLOGAPPLICATIVO1BI
BEFORE INSERT ON LOGAPPLICATIVO1
FOR EACH ROW
BEGIN
    IF :NEW.ID_LOG IS NULL THEN
        SELECT SEQLOGAPPLICATIVO1.NEXTVAL INTO :NEW.ID_LOG FROM DUAL;
    END IF;
END;
/

-- ====================================================================
-- CREAZIONE INDICI (PER EVITARE RALLENTAMENTI NELLE RICERCHE SUI LOG)
-- ====================================================================
CREATE INDEX LOG1_DATA_IDX ON LOGAPPLICATIVO1 (DATA_ORA DESC);
CREATE INDEX LOG1_UTENTE_IDX ON LOGAPPLICATIVO1 (ID_UTENTE);
CREATE INDEX LOG1_LIVELLO_IDX ON LOGAPPLICATIVO1 (LIVELLO);