class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm")
    

shelter_dog = Dog("alex",70)
shelter_dog.bark()
shelter_dog.jump()  
davides_dog = Dog("rex", 50)
davides_dog.bark()
davides_dog.jump()
sarahs_dog = Dog("teacup" , 20)
sarahs_dog.bark()
sarahs_dog.jump()

dogs = [shelter_dog, sarahs_dog, davides_dog]
bigger_dog = dogs[0]
for dog in dogs:
    if dog.height > bigger_dog.height:
        bigger_dog = dog

print(f"The biggest dog is {bigger_dog.name} with a height of {bigger_dog.height} cm")

  