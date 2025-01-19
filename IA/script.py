import joblib
import numpy as np
from flask import Flask, request, jsonify

# Initialisation du serveur Flask
app = Flask(__name__)

# Charger le modèle et le scaler avec joblib
model = joblib.load('models/model.pkl')  # Charger le modèle
scaler = joblib.load('models/scaler.pkl')  # Charger le scaler (assurez-vous que le scaler est dans le même répertoire)

@app.route('/')
def home():
    return "Bienvenue sur le serveur de prédiction de la santé des vaches !"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Récupérer les données envoyées dans la requête
        data = request.get_json()

        # Extraire les caractéristiques de l'entrée (par exemple température, capacité de marche, fréquence cardiaque)
        body_temperature = data['body_temperature']
        walking_capacity = data['walking_capacity']
        heart_rate = data['heart_rate']

        # Convertir en tableau numpy
        input_data = np.array([body_temperature, walking_capacity, heart_rate]).reshape(1, -1)

        # Normaliser les données
        input_data_scaled = scaler.transform(input_data)

        # Prédiction
        prediction = model.predict(input_data_scaled)
        
        # Retourner la réponse  
        return jsonify({'prediction': prediction[0]})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
