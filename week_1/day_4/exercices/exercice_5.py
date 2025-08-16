from exercices_4 import Family

class TheIncredibles(Family):
   def __init__(self, last_name):
        super().__init__(last_name)

   def born(self, **kwargs):
        if 'power' not in kwargs or 'incredible_name' not in kwargs:
            print("Error: You must provide 'power' and 'incredible_name' for an Incredible member.")
            return
        super().born(**kwargs)
   def use_power(self , name):
         if not any(member.get('name') == name for member in self.members):
            raise ValueError(f"No member named {name} found in the family.")

         if self.is_18(name):
            # Find the member and print their power
            for member in self.members:
                if member.get('name') == name:
                    print(f"{member.get('name')} uses their power: {member.get('power')}!")
                    return
         else:
            # Raise an exception for underage members
            raise Exception(f"{name} is not over 18 years old and cannot use their power.")
         
   def incredible_presentation(self):
        print("\n*Here is our powerful family!*")
        super().family_presentation()

incredible_family = TheIncredibles("Incredibles")
initial_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]
for member in initial_members:
    incredible_family.born(**member)


incredible_family.incredible_presentation()

incredible_family.born(
    name="Jack",
    age=1,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="Jacky"
)
incredible_family.incredible_presentation()