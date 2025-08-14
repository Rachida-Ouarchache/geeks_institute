class farm():
  def __init__(self , farm_name):
    self.name = farm_name
    self.animals = {}
  def add_animal(self, animal_type, count=1):
    if animal_type in self.animals:
      self.animals[animal_type]+= count
    else:
      self.animals[animal_type]= count
      print(self.animals)

  def get_info(self):
     output = f"{self.name}'s Farm\n\n"
     for animal, count in self.animals.items():
        output += f"{animal:<10} : {count:>3}\n"

    
     output += "\nE-I-E-I-O!"
     return output
  def get_animal_types(self):
    sorted_list = sorted(self.animals.keys())
    return sorted_list
  def get_short_info(self):
    animal_list = []
    for animal in self.get_animal_types():
      count = self.animals[animal]
      if count > 1:
        animal_list.append(animal + "s")
      else:
        animal_list.append(animal)
      if len(animal_list) > 1:
            animals_str = ", ".join(animal_list[:-1]) + " and " + animal_list[-1]
      else:
            animals_str = animal_list[0]

      return f"{self.name}'s farm has {animals_str}."
    
old_farm =farm("McDonald")  
old_farm.add_animal("cow")
old_farm.add_animal("pig", 3)
old_farm.add_animal("horse" ,2)
print(old_farm.get_info())
print(old_farm.get_animal_types())
print(old_farm.get_short_info())
