import re
import json

questions = []

class Option:
    def __init__(self, text, correct):
        self.text = text
        self.correct = correct
    def __repr__(self):
        return self.text

filename = "Colision Avoidance"
extension = ".txt"
with open(filename+extension) as f:
    lines = f.readlines()
    for line in lines:
        line = line.replace('\n', '')
        tokens = line.split(": ")
        if(tokens[0]=='Q'):
            questions.append({"question":tokens[1],"options":[]})
        else:
            correct = tokens[0]=='Y'
            questions[-1]["options"].append({"option": tokens[1],"correct": correct})
    print(questions)
    json_object = json.dumps(questions, indent=4)
    with open(filename+".json", "w") as outfile:
        outfile.write(json_object)