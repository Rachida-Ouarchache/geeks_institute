class Family():
  def __init__(self, last_name):
    self.last_name = last_name
    self.members = {}
  def born(self ,**kwargs):  
    name = kwargs.get('name', 'your child')
    if name in self.members:
            print(f"{name} is already in the family!")
    else:
            # Add the child to the dictionary
            self.members[name] = kwargs
            print(f"Congratulations to the {self.last_name} family on the birth of {name}!")

    print(f"Congratulations to the {self.last_name} family on the birth of {kwargs.get('name', 'your child')}!")
  def is_18(self, name):
    for member in self.members.values():
        if member.get('name') == name:
            age = member.get('age')
            if age is not None:
                return age >= 18
            else:
                print(f"Age for {name} is unknown.")
                return False
    print(f"No member named {name} found.")
    return False
  def family_presentation(self):
      print(f"\nFamily {self.last_name}")
      if not self.members:
            print("No members in the family yet.")
      for member in self.members:
          if isinstance(member, dict):
            details = ", ".join(f"{key}: {value}" for key, value in member.items())
            print(f"- {details}")

family_member= Family("Tasnim")

initial_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]
family_member.born()
family_member.is_18("laila")
family_member.family_presentation()