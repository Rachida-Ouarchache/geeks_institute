class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class Siamese(Cat):
    def __init__(self , name ,age):
     super().__init__(name , age)
cat_one =  Bengal("nero", 1)
cat_tow = Chartreux("liya", 2)
cat_three =  Siamese("rex", 3)   
all_cats = [cat_one, cat_tow , cat_three]
sara_pets = Pets(all_cats)
for cats in sara_pets.animals :
     print(cats.walk())
    
      

