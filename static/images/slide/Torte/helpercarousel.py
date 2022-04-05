import os
import json
dir_list = os.listdir("./")
with open("list.json", "w") as list:
    list.write(json.dumps(dir_list))
    print("Immagini aggiornate")
    