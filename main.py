from flask import *
import json

app = Flask(__name__)

@app.route('/pacjenci', methods=['GET'])
def home_page():
    with open('dataPacjenci.json', encoding='utf-8') as f:
        dataPacjenci = json.load(f)

        with open('dataLekarze.json', encoding='utf-8') as f2:
            dataLekarze = json.load(f2)

            for pacjent in dataPacjenci['pacjenci']:
                if pacjent['UID'] == request.args.get("uid"):
                    return pacjent

            for lekarz in dataLekarze['lekarze']:
                if lekarz['UID'] == request.args.get("uid"):
                    return lekarz

    return 'error'

def main():
    app.run(host="0.0.0.0", port=8080)

if __name__ == '__main__':
    main()