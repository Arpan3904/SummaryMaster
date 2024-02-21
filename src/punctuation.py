from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for all routes

@app.route('/add_punctuation', methods=['POST'])
def add_punctuation():
    data = request.json
    text = data['text']

    print(text)
    
   

    nlp = spacy.load("en_core_web_sm")
    doc = nlp(text)

    sentences = []
    current_sentence = ""

    for token in doc:
        if token.is_sent_start:
            sentences.append(current_sentence.strip() + ".")
            current_sentence = token.text
        else:
            current_sentence += token.text_with_ws

    sentences.append(current_sentence.strip() + ".")

    final_text = ""
    for sentence in sentences:
        final_text += sentence

    return jsonify({'result': final_text})

if __name__ == '__main__':
    app.run(debug=True,port=5002)
