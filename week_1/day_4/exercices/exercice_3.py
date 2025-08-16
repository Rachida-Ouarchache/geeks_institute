import random
from exercice_2 import Dog

class PetDog(Dog):
  def __init__(self, name , weight , age ,trained =False):
    super().__init__(name , age , weight)
    self.trained = trained 
  def train(self):
      print(self.bark())
      self.trained = True
  def play(self , *doggies):
     dog_names = [self.name] +[dog.name for dog in doggies]
     print(f"{', '.join(dog_names)} all play together")
  def do_a_trick(self):
     if self.trained :
      tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
      print(random.choice(tricks))

     
dog1= PetDog("rex", 5 , 15)
dog2= PetDog("marks", 5 , 15)
dog3= PetDog("boby", 5 , 15)
dog1.train()
dog2.play()
dog1.play()
dog1.do_a_trick()
dog2.do_a_trick()
dog3.do_a_trick()




    


