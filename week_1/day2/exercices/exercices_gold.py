import random

# # exercices 1 & 2
# birthdays = {
#     "Nezha": "2004/03/12",
#     "Laila": "2002/07/25",
#     "Ismail": "1999/11/05",
#     "Oumaima": "2000/01/30",
#     "Rachida": "1993/02/17"
# }

# print("welcome")
# print("You can look up the birthdays of the people in the list!")

# print("Here are the people in the list:")
# for name in birthdays.keys():
#     print(f" - {name}")
# name = input("enter a name " )

# if name in birthdays:
#   print(f"the birthday of {name} is {birthdays[name]}")
# else:
#     print(f" Sorry, we don’t have the birthday information for {name}.")
    
#  exercice 3
# def somme (X: int) -> int:
#   x_str = str(X)
#   term1 = int(x_str)
#   term2 = int(x_str * 2) 
#   term3 = int(x_str * 3)
#   term4 = int(x_str * 4) 

       
#   return term1 + term2 + term3 + term4
# print(somme(3))

# exercice 4
def throw_dice():
  return random.randint(1,6)
def throw_until_doubles():
  count = 0
  while True :
    die1 = throw_dice()
    die2 = throw_dice()
    count = count + 1
    print (f"Throw{count}:({die1},{die2})")
    if die1 == die2:
      break

    return count
  print("Total throws until doubles:", throw_until_doubles())

def main():
 results = []
 for _ in range(100):
   throws = throw_until_doubles()
   results.append(throws)
   total_throws = sum(results)
   average_throws = round(total_throws / len(results), 2)
   
   print(f"It took {total_throws} throws in total to reach 100 doubles.")
   print(f"On average, it took {average_throws} throws to reach doubles.")


   return results
data = main()
print("Results of 100 simulation:", data)


        
   

