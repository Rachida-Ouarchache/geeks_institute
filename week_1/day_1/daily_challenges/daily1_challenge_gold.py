from datetime import datetime

birthdate = input("Please enter your birthdate (format: DD/MM/YYYY): ")

birth_date = datetime.strptime(birthdate, "%d/%m/%Y")
today = datetime.today()

age = today.year - birth_date.year

if (today.month, today.day) < (birth_date.month, birth_date.day):
    age = age - 1
last_digit = age % 10

candles = 'i' * last_digit  

cake = f"""
       ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""

print(f"You are {age} years old!")
print(cake)
