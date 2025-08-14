class zoo():
  def __init__(self, zoo_name):
    self.name = zoo_name
    self.animals = []

  def add_animals(self , new_animals):

    if new_animals not in self.animals:
      self.animals.append(new_animals)
      print(f"{new_animals} the new animals added in the zoo")
    else:
      print(f"{new_animals} is already in the zoo")

  def get_animals(self):
    for animals in self.animals:
     print(f"{animals}")

  def sell_animal(self , animal_sold):
    if animal_sold in self.animals:
      self.animals.remove(animal_sold)
      print(f"the {animal_sold} is removed")
    else:
      print(f"{animal_sold} does not exist in the zoo ")

  def sort_animals(self):
     result = {}
     sorted_animals = sorted(self.animals)
     for animal in sorted_animals:
         first_letter = animal[0].upper()
         if first_letter in result:
             if isinstance(result[first_letter], str):
                 result[first_letter] = [result[first_letter], animal]
             else:
                 result[first_letter].append(animal)
         else:
             result[first_letter] = animal
     return result
  def get_groups(self):
        groups = self.sort_animals()
        for letter, animals in groups.items():
            print(f"Groupe {letter} : {animals}")
    
space_zoo = zoo("s")
space_zoo.add_animals("loin") 
space_zoo.add_animals("Panda") 
space_zoo.add_animals("Éléphant") 
space_zoo.add_animals("Crocodile") 
print(space_zoo.animals)
space_zoo.get_animals()
space_zoo.sell_animal("chien")
print(space_zoo.sort_animals())
space_zoo.get_groups()
new_york_zoo = zoo("new_york_zoo")




    