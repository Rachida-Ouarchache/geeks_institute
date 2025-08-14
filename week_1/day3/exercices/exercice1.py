# 1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

first_cat = Cat("nero" , 1)
second_cat = Cat("leo", 2)
third_cat = Cat("tiger", 3)
print("The name of the first cat is", first_cat.name , first_cat.age, "years old" "; the second cat is", second_cat.name , second_cat.age,"years old" "and the last one is" , third_cat.name , third_cat.age , "years old" )
# 2
def find_oldest(*cats):
    oldest_cat = max(cats, key=lambda cat: cat.age)
    print(f"The oldest cat is {oldest_cat.name}, {oldest_cat.age} years old.")


 