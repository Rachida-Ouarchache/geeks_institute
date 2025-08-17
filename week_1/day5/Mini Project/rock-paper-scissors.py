from game import Game
def get_user_menu_choice():
    print("\n--- Rock Paper Scissors Menu ---")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")

    choice = input("Enter your choice (1/2/3): ").strip()

    if choice == "1":
        return "play"
    elif choice == "2":
        return "scores"
    elif choice == "3":
        return "quit"
    else:
        return "invalid"
def print_results(results):
  print("\n--- Game Results ---")
  print(f"Wins:  {results.get('win', 0)}")
  print(f"Losses:{results.get('loss', 0)}")
  print(f"Draws: {results.get('draw', 0)}")
  print("--------------------")
  print("Thanks for playing!\n")

def main():
  results = {"win": 0, "loss": 0, "draw": 0}  

  while True:
        choice = get_user_menu_choice()

        if choice == "play":
            game = Game()
            result = game.play()   
            results[result] += 1   

        elif choice == "scores":
          print_results(results)

        elif choice == "quit":
         print_results(results)
         break

        else:
         print("Invalid choice, please try again.")
         
results = {"win": 2, "loss": 1, "draw": 1}
print_results(results)
if __name__ == "__main__":
    main()