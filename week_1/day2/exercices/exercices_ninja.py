cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

cars_list = cars.split(', ')
count_o = len([car for car in cars_list if 'o' in car.lower()])
print(f"Number of manufacturers with the letter 'o': {count_o}")
count_no_i = len([car for car in cars_list if 'i' not in car.lower()])
print(f"Number of manufacturers without the letter 'i': {count_no_i}")
cars_list.sort(reverse=True)

print(f"There are {len(cars_list)} manufacturers in the list.")
print("Manufacturers in reverse order (Z-A):")

print(cars_list)

car_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_cars = list(set(car_list))

print("List without duplicates:")
print(unique_cars)

unique_cars = []
for car in cars_list:
    if car not in unique_cars:
        unique_cars.append(car)


cars_string = ", ".join(unique_cars)

print("Manufacturers without duplicates:")
print(cars_string)
print(f"There are now {len(unique_cars)} companies in the list.")
# exercice 2
def get_full_name(first_name,last_name, middle_name =""):
    
  if middle_name:
     full_name = f"{first_name} {middle_name} {last_name}"
  else: 
     full_name = f"{first_name} {last_name}"

  return full_name

print(get_full_name("rachida","alae","ouarhache"))
print(get_full_name("rachida","ouarhache"))
# exercice 3

MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'  
}


MORSE_CODE_DICT_REVERSE = {value: key for key, value in MORSE_CODE_DICT.items()}

def text_to_morse(text):
    text = text.upper()
    morse_text = ' '.join(MORSE_CODE_DICT.get(char, '') for char in text)
    return morse_text

def morse_to_text(morse):
    words = morse.split(' / ')
    decoded_words = []
    for word in words:
        letters = word.split()
        decoded_word = ''.join(MORSE_CODE_DICT_REVERSE.get(letter, '') for letter in letters)
        decoded_words.append(decoded_word)
    return ' '.join(decoded_words)

sample_text = "Hello World"
morse = text_to_morse(sample_text)
print("Text to Morse:", morse)

decoded = morse_to_text(morse)
print("Morse to Text:", decoded)
