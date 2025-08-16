from exercice_2 import Dog

class PetDog(Dog):
  def __init__(self, name , weight , age ,trained =False):
    self.trained = trained 
    super().__init__(name , age , weight)

  def train(self):
      print(self.bark())

dog1= PetDog("rex", 5 , 15)
dog1.train()



    


