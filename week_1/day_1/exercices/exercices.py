# exercice 1
print(("Hello word \n") * 4)

# exercice 2
print((99**3)*8)

# exercice 3
your_name = input("your name " )
name = "rachida"
if name == your_name:
   print("we have the same name hahaha")
else:
   print("hay",your_name)


# exercice 4
height_user = int(input("enter your height in centimetres " ))
height = 145

if height < height_user:
    print("you are tall enough to ride")
else:
    print("you need to grow some more to ride.")
# exercice 5
my_fav_numbers = {1, 2, 3, 4, 5}
my_fav_numbers.add(11)
my_fav_numbers.add(12)
my_fav_numbers.remove(12)
friend_fav_numbers = {6, 7, 8, 9, 10}
our_fav_numbers = friend_fav_numbers.union(my_fav_numbers)
print("Our favorite numbers are: ", our_fav_numbers)

# exercice 6
my_tuple = (1, 2, 3, 4, 5)
#It is not possible to add elements to a tuple.


#Exercice 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)

#Exercice 8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
finished_sandwiches = []
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
print("The following sandwiches have been made:")
for sandwich in finished_sandwiches:
    print("I made your:" + sandwich)