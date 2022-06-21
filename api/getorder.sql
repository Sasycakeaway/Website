SELECT sys.Utenti.PK_CF, sys.Utenti.Telefono, sys.Ordini.PK_ID, sys.Ordini.Nome, sys.Ordini.Cognome, sys.Ordini.CAP, sys.Ordini.Indirizzo, sys.Ordini.Domicilio, sys.Ordini.Email
FROM  sys.Ordini INNER JOIN
         sys.Utenti ON sys.Ordini.Email = sys.Utenti.PK_Email
WHERE (sys.Ordini.Email = N'vivanco')