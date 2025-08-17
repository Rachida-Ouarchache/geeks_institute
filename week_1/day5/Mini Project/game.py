import random
class Game:
    def get_user_item(self):
        valid_items = ["rock", "paper", "scissors"]
        while True:
            choice = input("Choose rock, paper, or scissors: ").strip().lower()
            if choice in valid_items:
                return choice
            else:
                print("Invalid choice. Please try again.")
    def get_computer_item(self):
        valid_items = ["rock", "paper", "scissors"]
        choice = random.choice(valid_items)
        return choice
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        if (user_item == "rock" and computer_item == "scissors") or \
           (user_item == "paper" and computer_item == "rock") or \
           (user_item == "scissors" and computer_item == "paper"):
            return "win"
        
        return "loss"
    def play(self):

        self.user_item = self.get_user_item()

        self.computer_item = self.get_computer_item()

        self.result = self.get_game_result(self.user_item, self.computer_item)

        if self.result == "win":
            print(f"You selected {self.user_item}. The computer selected {self.computer_item}. You WIN!")
        elif self.result == "loss":
            print(f"You selected {self.user_item}. The computer selected {self.computer_item}. You LOSE!")
        else:
            print(f"You selected {self.user_item}. The computer selected {self.computer_item}. It's a DRAW!")

        return self.result
game = Game()

user = game.get_user_item()
computer = game.get_computer_item()

print(f"You chose {user}, computer chose {computer}")
print("Result:", game.get_game_result(user, computer))