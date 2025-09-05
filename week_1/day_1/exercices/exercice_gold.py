import random
# exercice 1 What is the season
month = int(input("enter a month of months of years " ))
if (month >= 3 and month <= 5 ):
  print('Spring')
elif (month >= 6 and month <= 8) :
  print('Summer')
elif (month >=9 and month) <= 11 :
  print('Autumn')
else :
  print('Winter')

# exercice 2 : for Loop
  # 1
for i in range(1,21):
  print(i)
#   # 2
numbers = list(range(1,21))
for i in range(len(numbers)):
  print(numbers[i])
# exercice 3
userName = ''
while userName != 'Rachida' :
  userName = input('enter your name' )
print('we have the same name')
# exercice 4
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
userName = input("Enter your name: ")
if userName in names:
    index = names.index(userName)
    print(f"The first occurrence of {userName} is at index {index}")
else:
    print("Name not found in the list.")
# exercice 5
firstNumber = int(input('input the first number: ' ))
secondNumber = int(input('input the second number: ' ))
thirdNumber = int(input('input the third number: ' ))

greatest = max(firstNumber,secondNumber,thirdNumber) 
print('the greatest number is' ,greatest)
# exercice 6
number = int(input('insert a number from  1 to 9' )) 
random_number = random.randint(1,9)
if number == random_number :
  print("winner")
else:
  print("Better luck next time")