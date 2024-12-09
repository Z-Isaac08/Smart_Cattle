# Importation des bibliothèques nécessaires
import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

# === 1. Chargement et Prétraitement des Données ===

def load_and_preprocess_data(filepath):
    """Charge et pré-traite les données."""
    data = pd.read_csv(filepath)
    features = ["temperature", "heart_rate", "activity"]
    X = data[features]
    return data, X


# === 2. Modélisation et Clustering ===

def perform_kmeans_clustering(X, n_clusters=3, random_state=42):
    """Applique l'algorithme K-means pour détecter les clusters."""
    kmeans = KMeans(n_clusters=n_clusters, random_state=random_state)
    clusters = kmeans.fit_predict(X)
    return clusters


# === 3. Réduction de Dimensions ===

def apply_pca(X, n_components=2):
    """Réduit les dimensions des données pour la visualisation."""
    pca = PCA(n_components=n_components)
    data_pca = pca.fit_transform(X)
    return data_pca


# === 4. Système de Recommandation avec Diagnostic ===

def generate_diagnostic(row):
    """Génère un diagnostic basé sur la santé de la vache."""
    if row["temperature"] > 39.5 and row["heart_rate"] > 100 and row["activity"] < 10:
        return "Fièvre due à une infection bactérienne"
    elif row["temperature"] < 37.5:
        return "Hypothermie ou détresse physiologique"
    elif row["heart_rate"] > 100:
        return "Stress ou douleur"
    elif row["activity"] < 10:
        return "Faible activité - vérifier la nutrition"
    return "État normal - surveillance recommandée"


def add_diagnostics(data):
    """Ajoute une colonne de diagnostics au DataFrame."""
    data["diagnostic"] = data.apply(generate_diagnostic, axis=1)


def generate_recommendation(row):
    """Génère une recommandation en fonction des caractéristiques."""
    if row["temperature"] > 39 and row["heart_rate"] > 120:
        return "Vérification vétérinaire urgente"
    elif row["activity"] < 10:
        return "Suivi alimentaire recommandé"
    return "Rien à signaler"


def add_recommendations(data):
    """Ajoute une colonne de recommandations au DataFrame."""
    data["recommendation"] = data.apply(generate_recommendation, axis=1)


# === 5. Visualisation ===

def plot_clusters(data, pca_data, cluster_col="cluster"):
    """Affiche les clusters sur un graphique PCA."""
    plt.scatter(pca_data[:, 0], pca_data[:, 1], c=data[cluster_col], cmap="viridis")
    plt.title("Clusters détectés")
    plt.xlabel("PCA1")
    plt.ylabel("PCA2")
    plt.colorbar(label="Cluster")
    plt.show()


# === 6. Enregistrement des Résultats ===

def save_results(data, output_filepath):
    """Sauvegarde les résultats dans un fichier CSV."""
    data.to_csv(output_filepath, index=False)


# === Main ===

if __name__ == "__main__":
    # Étape 1 : Charger et prétraiter les données
    filepath = "vache_data.csv"
    data, X = load_and_preprocess_data(filepath)

    # Étape 2 : Appliquer K-means
    data["cluster"] = perform_kmeans_clustering(X)

    # Étape 3 : Réduction de dimension avec PCA
    data_pca = apply_pca(X)
    data["pca1"] = data_pca[:, 0]
    data["pca2"] = data_pca[:, 1]

    # Étape 4 : Ajouter les diagnostics
    add_diagnostics(data)

    # Étape 5 : Ajouter les recommandations
    add_recommendations(data)

    # Étape 6 : Visualisation
    plot_clusters(data, data_pca)

    # Étape 7 : Sauvegarder les résultats
    save_results(data, "vache_results.csv")

    # Afficher un aperçu des résultats
    print(data[["id", "temperature", "heart_rate", "activity", "diagnostic", "recommendation"]])
