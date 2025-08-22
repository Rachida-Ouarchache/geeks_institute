-- 1
Le SecondTab.id contient la valeur NULL : resultat → 0
-- 2
id = 5 existe
Total des lignes de FirstTab sauf id = 5
-- 3
le SecondTab.id ne contient pas de NULL → le COUNT renvoie le nombre de lignes de FirstTab dont l’id n’existe pas dans SecondTab.
-- 4
Le COUNT(*) renverra le nombre de lignes de FirstTab dont l’id n’existe pas dans SecondTab (en excluant les NULL de SecondTab).