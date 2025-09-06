import math , random
from menu_manager import MenuManager

# # exercice 1
class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def definition(self):
        print("Un cercle est l'ensemble des points situés à égale distance d'un centre donné.")
  # exercice 2
    class MyList:
     def __init__(self, letters):
        self.letters = letters

    def reversed_list(self):
        return list(reversed(self.letters))

    def sorted_list(self):
        return sorted(self.letters)

    def random_list(self):
        return [random.randint(1, 100) for _ in range(len(self.letters))]
    # exercice 3
   
menu_manager = MenuManager()

for dish in menu_manager.menu:
        print(dish)
menu_manager.add_item("Pizza", 20, "B", True)

menu_manager.update_item("Pizza", 18, "B", False)

menu_manager.remove_item("Pizza")


for dish in menu_manager.menu:
    print(dish)

