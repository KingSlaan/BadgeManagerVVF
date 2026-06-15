# Documentazione Modulo Gestione Utenze e Log (Ambiente di Test)

Questo modulo estende le funzionalità del database di test per l'applicativo, introducendo la gestione delle anagrafiche utente, un sistema flessibile di permessi **multi-ruolo** e **multi-sede** e una tabella centralizzata per i **log applicativi**.

Tutti gli oggetti di questo modulo presentano il suffisso `1` per una rapida identificazione all'interno dell'ambiente di test e per evitare conflitti con tabelle preesistenti.

---

## 🏗️ Architettura e Filosofia di Progetto

Per garantire la massima fluidità e scalabilità, il database implementa un puro **registro di accoppiamento** tramite la tabella `UTENTECOMPETENZASEDE1`. 
* **Separazione dei compiti:** Il database si occupa esclusivamente di memorizzare le relazioni atomiche (Utente ↔ Ruolo ↔ Codice Sede).
* **Logica delle Gerarchie (Frontend):** La scomposizione dell'albero organizzativo del Corpo Nazionale dei Vigili del Fuoco (capire se un codice corrisponde a un intero dipartimento regionale, a un comando provinciale o a una scuola centrale come Capannelle) è delegata interamente al livello applicativo/frontend, che elabora le informazioni basandosi sui dati dei dipartimenti.
* **Gestione Totale (Valore NULL):** Se il campo `CODSEDE_COMPETENZA` è impostato a `NULL`, l'applicativo interpreterà il record come **Visibilità/Gestione Totale su tutte le sedi d'Italia**.

---

## 📊 Schema Database

### 1. Tabella: `UTENTE1`
Memorizza le credenziali d'accesso e le informazioni principali del profilo dell'utente applicativo.

| Campo | Tipo | Vincoli | Descrizione |
| :--- | :--- | :--- | :--- |
| `ID_UTENTE` | `NUMBER` | `PK` | Identificativo univoco dell'utente (Auto-incrementale tramite trigger). |
| `EMAIL` | `VARCHAR2(100 BYTE)` | `NOT NULL`, `UNIQUE` | Indirizzo email istituzionale, utilizzato come login. |
| `PASSWORD_HASH` | `VARCHAR2(255 BYTE)` | `NOT NULL` | Hash sicuro della password (es. bcrypt, Argon2). **Mai salvare in chiaro**. |
| `DATA_CREAZIONE` | `DATE` | `NOT NULL`, `DEFAULT SYSDATE` | Data di registrazione dell'account. |
| `ULTIMO_LOGIN` | `DATE` | `NULL` | Timestamp dell'ultimo accesso effettuato con successo. |
| `FOTO_PATH` | `VARCHAR2(500 BYTE)` | `NULL` | Percorso locale o URL della foto profilo dell'utente. |

### 2. Tabella: `RUOLO1`
Contiene il dizionario dei ruoli applicativi censiti nel sistema.

| Campo | Tipo | Vincoli | Descrizione |
| :--- | :--- | :--- | :--- |
| `ID_RUOLO` | `NUMBER` | `PK` | Identificativo univoco del ruolo (Auto-incrementale tramite trigger). |
| `CODICE_RUOLO` | `VARCHAR2(30 BYTE)` | `NOT NULL`, `UNIQUE` | Codice mnemonico del ruolo (`ADMIN`, `OPERATORE`, `VISUALIZZATORE`). |
| `DESCRIZIONE` | `VARCHAR2(100 BYTE)` | `NULL` | Descrizione estesa dei permessi associati al ruolo. |

#### Ruoli standard inseriti di default:
* **`ADMIN`**: Amministratore con controllo totale sul sistema.
* **`OPERATORE`**: Utente abilitato alla scrittura, inserimento e modifica dei dati nel proprio perimetro di competenza.
* **`VISUALIZZATORE`**: Utente con permessi di sola consultazione (lettura) nel proprio perimetro di competenza.

### 3. Tabella: `UTENTECOMPETENZASEDE1`
Tabella pivot per la gestione granulare delle competenze. Consente a un utente di avere ruoli differenti su sedi differenti (es. *Operatore* a Roma e contemporaneamente *Visualizzatore* a Viterbo).

| Campo | Tipo | Vincoli | Descrizione |
| :--- | :--- | :--- | :--- |
| `ID_COMPETENZA` | `NUMBER` | `PK` | Identificativo della riga di competenza (Auto-incrementale tramite trigger). |
| `ID_UTENTE` | `NUMBER` | `FK` (`UTENTE1`), `NOT NULL` | Riferimento all'utente (Cancellazione in cascata). |
| `ID_RUOLO` | `NUMBER` | `FK` (`RUOLO1`), `NOT NULL` | Riferimento al ruolo associato in questa specifica sede. |
| `CODSEDE_COMPETENZA` | `VARCHAR2(10 BYTE)` | `NULL` | Codice della sede VVF (es. 'RM', 'LAZ', '58'). Se `NULL`, indica l'intero territorio nazionale. |

*Nota di integrità: È presente un vincolo `UNIQUE(ID_UTENTE, ID_RUOLO, CODSEDE_COMPETENZA)` per impedire l'inserimento di righe duplicate identiche.*

### 4. Tabella: `LOGAPPLICATIVO1`
Registro centralizzato per il tracciamento delle attività utente, delle anomalie e delle operazioni di sistema.

| Campo | Tipo | Vincoli | Descrizione |
| :--- | :--- | :--- | :--- |
| `ID_LOG` | `NUMBER` | `PK` | Identificativo univoco del log (Auto-incrementale tramite trigger). |
| `DATA_ORA` | `TIMESTAMP` | `NOT NULL`, `DEFAULT CURRENT_TIMESTAMP` | Data e ora esatta dell'evento. |
| `ID_UTENTE` | `NUMBER` | `NULL` | ID dell'utente che ha compiuto l'azione (può essere `NULL` per eventi di sistema). |
| `EMAIL_UTENTE` | `VARCHAR2(100 BYTE)` | `NULL` | Email dell'utente per una rapida consultazione visiva senza Join. |
| `LIVELLO` | `VARCHAR2(10 BYTE)` | `NOT NULL` | Livello di severità. Valori ammessi: `INFO`, `WARNING`, `ERROR`, `SUCCESS`. |
| `AZIONE` | `VARCHAR2(50 BYTE)` | `NOT NULL` | Stringa identificativa macro-operazione (es: `LOGIN`, `INSERT_TESSERA`). |
| `DESCRIZIONE` | `CLOB` | `NULL` | Campo di testo esteso per i dettagli (può ospitare stringhe JSON di errore). |
| `INDIRIZZO_IP` | `VARCHAR2(45 BYTE)` | `NULL` | Indirizzo IP del client che ha effettuato la richiesta (supporta IPv4 e IPv6). |

---

## 🛠️ Componenti di Automazione ed Ottimizzazione

### Sequenze e Trigger (Auto-Incremento)
Per garantire la compatibilità con le versioni legacy di Oracle DB presenti in ambiente di test, l'auto-incremento delle chiavi primarie non usa la clausola `IDENTITY` ma è gestito in modo classico mediante coppie di **Sequenze** e **Trigger di tipo Before Insert (BI)**:
* `SEQUTENTE1` ↔ `TRGUTENTE1BI`
* `SEQRUOLO1` ↔ `TRGRUOLO1BI`
* `SEQUTENTECOMPSEDE1` ↔ `TRGUTCOMPSEDE1BI`
* `SEQLOGAPPLICATIVO1` ↔ `TRGLOGAPPLICATIVO1BI`

### Indici di Performance
Al fine di scongiurare rallentamenti durante le fasi critiche di login, verifica autorizzazioni e lettura dei log, sono stati creati i seguenti indici di ricerca dedicati:
* `UTCOMPUTENTE1IDX`: Ottimizza il recupero dei permessi dell'utente in fase di login.
* `UTCOMPSEDE1IDX`: Velocizza i controlli incrociati basati sulle sedi di appartenenza.
* `LOG1_DATA_IDX`: Ottimizza l'ordinamento decrescente dei log (`DATA_ORA DESC`) per i pannelli di monitoraggio.
* `LOG1_UTENTE_IDX` e `LOG1_LIVELLO_IDX`: Velocizzano i filtri di ricerca all'interno dell'audit log.

---

## 🚀 Istruzioni per il Deployment

Il file SQL correlato si trova all'interno delle cartelle di configurazione del repository:
1. Per installare e popolare le tabelle da zero, eseguire lo script di inizializzazione presente nel repository: `Query_Creazione_Test1.sql`.