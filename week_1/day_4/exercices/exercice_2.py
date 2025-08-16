class Dog():
  def __init__(self, name , age , weight):
    self.name = name
    self.age = age 
    self.weight = weight
  def bark(self):
    return f"{self.name} is barking"
  def run_speed(self):
    speed = (self.weight / self.age )* 10
    return (speed)
    
  def fight (self , other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} won the fight against {other_dog.name}"
        elif my_power < other_power:
            return f"{other_dog.name} won the fight against {self.name}"
        else:
            return f"It's a tie between {self.name} and {other_dog.name}"

first_dog = Dog("rex", 1, 140)
second_dog = Dog("boby", 6, 150)
third_dog = Dog("rexy", 3, 100)
first_dog.bark()
first_dog.run_speed()

print(f"{first_dog.name} run speed: {first_dog.run_speed()}")
print(f"{second_dog.name} run speed: {second_dog.run_speed()}")
print(f"{third_dog.name} run speed: {third_dog.run_speed()}")

print(first_dog.bark())
print(second_dog.bark())
print(third_dog.bark())

print(first_dog.fight(first_dog))
print(second_dog.fight(second_dog))
print(third_dog.fight(third_dog))

