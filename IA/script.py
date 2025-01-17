# # Importation des bibliothèques nécessaires
# import pandas as pd
# import numpy as np
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.preprocessing import LabelEncoder
# from sklearn.metrics import classification_report, accuracy_score

# # === 1. Chargement des données ===
# data = pd.read_csv('vache_data.csv')

# # === 2. Préparation des données ===

# # Séparer les variables indépendantes (features) et la variable cible (diagnostic)
# X = data[["temperature", "heart_rate", "activity_x", "activity_y", "activity_z"]]  # Les features
# y = data["diagnostic"]  # La variable cible (diagnostic)

# # === 3. Encodage des labels ===

# # Nous devons encoder les labels de diagnostic en valeurs numériques
# label_encoder = LabelEncoder()
# y_encoded = label_encoder.fit_transform(y)

# # === 4. Séparation des données en ensembles d'entraînement et de test ===
# X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)

# # === 5. Entraînement du modèle ===
# model = RandomForestClassifier(n_estimators=100, random_state=42)  # RandomForest avec 100 arbres
# model.fit(X_train, y_train)  # Entraîner le modèle avec les données d'entraînement

# # === 6. Prédictions et évaluation ===
# y_pred = model.predict(X_test)  # Prédire les diagnostics sur l'ensemble de test

# # Calcul de l'accuracy (précision)
# accuracy = accuracy_score(y_test, y_pred)
# print(f"Accuracy: {accuracy:.2f}")

# # Rapport de classification (détails sur la performance pour chaque classe)
# report = classification_report(y_test, y_pred, target_names=label_encoder.classes_)
# print("Classification Report:\n", report)


import pandas as pd
import numpy as np

# Fonction pour générer des données simulées
def generate_synthetic_data(num_samples=1000):
    data = []
    
    # Liste des diagnostics possibles
    diagnostics = [
        "Fièvre due à une infection bactérienne",
        "Hypothermie ou détresse physiologique",
        "Stress ou douleur",
        "Faible activité - vérifier la nutrition",
        "État normal - surveillance recommandée"
    ]
    
    for i in range(num_samples):
        # Générer des données aléatoires
        temperature = np.random.uniform(36, 42)  # Température entre 36°C et 42°C
        heart_rate = np.random.uniform(50, 120)  # Fréquence cardiaque entre 50 et 120 bpm
        activity_x = np.random.uniform(-10, 10)
        activity_y = np.random.uniform(-10, 10)
        activity_z = np.random.uniform(-10, 10)
        
        # Attribuer un diagnostic basé sur les valeurs générées
        if temperature > 39.5 and heart_rate > 100:
            diagnostic = "Fièvre due à une infection bactérienne"
        elif temperature < 37.5:
            diagnostic = "Hypothermie ou détresse physiologique"
        elif heart_rate > 100:
            diagnostic = "Stress ou douleur"
        elif np.abs(activity_x) < 1 and np.abs(activity_y) < 1 and np.abs(activity_z) < 1:
            diagnostic = "Faible activité - vérifier la nutrition"
        else:
            diagnostic = "État normal - surveillance recommandée"
        
        # Ajouter la ligne de données
        data.append([i, temperature, heart_rate, activity_x, activity_y, activity_z, diagnostic])
    
    # Créer un DataFrame
    df = pd.DataFrame(data, columns=["id", "temperature", "heart_rate", "activity_x", "activity_y", "activity_z", "diagnostic"])
    
    # Sauvegarder le DataFrame dans un fichier CSV
    df.to_csv('vache_data.csv', index=False)

# Générer les données
generate_synthetic_data(num_samples=1000)
