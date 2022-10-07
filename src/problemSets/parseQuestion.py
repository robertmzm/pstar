import re
import json

questions = []

class Option:
    def __init__(self, text, correct):
        self.text = text
        self.correct = correct
    def __repr__(self):
        return self.text

filename = "Aerodromes"
extension = ".txt"
with open(filename+extension) as f:
    lines = f.readlines()
    previousToken=''
    for line in lines:
        line = line.replace('\n', '')
        tokens = line.split(": ")
        if(tokens[0]=='Q'):
            previousToken = 'Q'
            questions.append({"question":tokens[1],"options":[]})
        elif(tokens[0]=='X' or tokens[0]=='Y'):
            correct = tokens[0]=='Y'
            previousToken = tokens[0]
            questions[-1]["options"].append({"option": tokens[1],"correct": correct})
        else:
            print(tokens)
            print(questions[-1]["options"])
            if(previousToken=='Q'):
                questions[-1]["question"]+='\n'
                questions[-1]["question"]+=tokens[0]
            else:
                questions[-1]["options"][-1]["option"]+='\n'
                questions[-1]["options"][-1]["option"]+=tokens[0]
    print(questions)
    json_object = json.dumps(questions, indent=4)
    with open(filename+".json", "w") as outfile:
        outfile.write(json_object)