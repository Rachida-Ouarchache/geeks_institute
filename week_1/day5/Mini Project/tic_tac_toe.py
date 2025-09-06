def display_board(board):
    print()
    for i in range(3):
        print(" | ".join(board[i]))
        if i < 2:
            print("--+---+--")
    print()

def player_input(player, board):
    while True:
        try:
            pos = int(input(f"Joueur {player}, choisis une case (1-9) : "))
            if pos < 1 or pos > 9:
                print("Position invalide, entrez un nombre de 1 à 9.")
                continue
            row = (pos - 1) // 3
            col = (pos - 1) % 3
            if board[row][col] == " ":
                board[row][col] = player
                break
            else:
                print("Case déjà occupée. Choisis une autre case.")
        except ValueError:
            print("Entrez un nombre valide.")

def check_win(board):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != " ":
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] != " ":
            return board[0][i]
    if board[0][0] == board[1][1] == board[2][2] != " ":
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != " ":
        return board[0][2]
    for row in board:
        for cell in row:
            if cell == " ":
                return None  
    return "Tie"

def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"

    while True:
        display_board(board)
        player_input(current_player, board)
        result = check_win(board)
        if result:
            display_board(board)
            if result == "Tie":
                print("Égalité !")
            else:
                print(f"Le joueur {result} a gagné ! 🎉")
            break
        current_player = "O" if current_player == "X" else "X"

play()
