# Gestion de Restaurant

Cette application web permet de gérer les plats, les chefs et les catégories d’un restaurant.  
Vous pouvez aussi chercher des plats et voir des statistiques simples.

---

## Fonctionnalités

- Ajouter, modifier et supprimer des plats.
- Voir les détails d’un plat.
- Rechercher un plat avec la barre de recherche.
- Voir des statistiques : nombre de plats par catégorie et par chef.

---

## Installation

1. Cloner le projet :

```bash
git clone https://github.com/yourusername/restaurant-management.git
cd restaurant-management
````

2. Créer un environnement virtuel :

```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
```

3. Installer les dépendances :

```bash
pip install -r requirements.txt
```

4. Configurer la base de données PostgreSQL :

* Créer une base de données nommée `restaurant`.
* Mettre à jour les informations de connexion dans `database/index.py`.
* Importer le fichier `database/seed/index.sql` pour créer les tables et insérer les données de départ.

5. Lancer l’application :

```bash
python index.py
```

6. Ouvrir votre navigateur à [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## Structure du projet

```
project/
├── index.py              # Application principale Flask
├── models/
│   └── your_model.py     # Modèles de la base de données
├── database/
│   ├── index.py          # Connexion à la base de données
│   └── seed/
│       └── index.sql     # Schéma et données de départ
├── templates/
│   ├── base.html         # Template de base
│   ├── index.html        # Liste des plats
│   ├── create.html       # Formulaire d'ajout
│   ├── edit.html         # Formulaire de modification
│   ├── details.html      # Détails d’un plat
│   └── stats.html        # Statistiques
└── requirements.txt      # Dépendances Python
```
