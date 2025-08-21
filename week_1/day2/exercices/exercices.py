# exercice 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

list_zip = zip(keys,values)
print(list(list_zip))

# exercice 2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for name, age in family.items():
  if age < 3:
    price = 0
  elif 3 <= age <= 12:
    price = 15
  else:
    price = 20
  total_cost += price
  print(f"{name} pays: ${price}")
print(f"Total cost: ${total_cost}")

# exercice 3"""

   # 1
brand ={
   "name": "zara",
   "creation_date" : 1975,
   "creation_name" : "Amancio Ortega Gaona",
   "type_of_clothes": {'men','women','children','home'},
   "international_competitors": {'Gap','H&M','benetton'},
   "number_stores":7000,
   "major_color":{
     "france":"blue",
     "spain":"red",
     "us":{
       "pink",
       "green"
     }
   }
}
   # 2 Change the number of stores
brand["number_stores"] = 2
print(brand)

   # 3 print a sentence explains who Zaras clients are.
print(f"Zara's clients are {', '.join(brand['type_of_clothes'])}.")

   # 4 Add a key
brand['country_creation'] = 'spain'
# 5
if "international_competitors" in brand:
    brand["international_competitors"].add("Desigual")
    print(brand)

# 6
del brand["creation_date"]

# 7
# Note: Sets do not support indexing, so use sorted() or list() to get the last element
print(list(brand["international_competitors"])[-1])

# 8
print(brand["major_color"]["us"])

# 9
print(len(brand))

# 10
print(brand.keys())

  # 11
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12
brand.update(more_on_zara)

# 13
print(brand["number_stores"])

# exercice 4
def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik", "Iceland")

describe_city("Oslo")

# 5
import random

def compare_numbers(user_number):
    if not 1 <= user_number <= 100:
        print("Please enter a number between 1 and 100.")
        return
    
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print(f"Success! Both numbers are {user_number}.")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}.")

# Example usage:
import random

def compare_numbers(user_number):
    if not 1 <= user_number <= 100:
        print("Please enter a number between 1 and 100.")
        return
    
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print(f"Success! Both numbers are {user_number}.")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}.")
# exercices 6
#1
def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

# 2
make_shirt("L", "Hello World")

# 3
def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

# 4
make_shirt()

# 5
make_shirt("Medium")

# 6
make_shirt("Small", "Code is life")

# 
make_shirt(text="Python is awesome", size="XL")

# exercice 7
import random

def get_random_temp(season):
    # Définir les bornes selon la saison
    if season.lower() == "winter":
        low, high = -10, 16
    elif season.lower() in ["spring", "autumn", "fall"]:
        low, high = 0, 23
    elif season.lower() == "summer":
        low, high = 16, 40
    else:
        low, high = -10, 40
    
    return round(random.uniform(low, high), 1)

def main():

    month = int(input("Enter the number of the month (1-12): "))
    
    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    elif month in [9, 10, 11]:
        season = "autumn"
    else:
        print("Invalid month, defaulting to summer.")
        season = "summer"
    
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")
    
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temp <= 23:
        print("Nice weather! A light jacket should be fine.")
    elif 24 <= temp <= 32:
        print("It's warm! Stay hydrated.")
    elif 33 <= temp <= 40:
        print("It's hot! Don't forget sunscreen and stay cool.")

main()
 
#  exercices 8
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def ask_questions():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ").strip()
        if user_answer.lower() == item["answer"].lower():
            print("Correct!")
            correct += 1
        else:
            print("Incorrect!")
            incorrect += 1

            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })
    return correct, incorrect, wrong_answers

def show_results(correct, incorrect, wrong_answers):
    print(f"\nYou got {correct} correct and {incorrect} incorrect.")

    if wrong_answers:
        print("\nHere are the questions you answered incorrectly:")
        for item in wrong_answers:
            print(f"- Question: {item['question']}")
            print(f"  Your answer: {item['your_answer']}")
            print(f"  Correct answer: {item['correct_answer']}\n")

    if incorrect > 3:
        print("You missed more than 3 questions. Would you like to play again? (yes/no)")
        play_again = input().strip().lower()
        if play_again == "yes":
            print("\nLet's try again!\n")
            main()
        else:
            print("Thanks for playing!")

def main():
    correct, incorrect, wrong_answers = ask_questions()
    show_results(correct, incorrect, wrong_answers)

main()
