class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols
        self.grid = [[0 for _ in range(cols)] for _ in range(rows)]
        if initial_state:
            for i in range(min(rows, len(initial_state))):
                for j in range(min(cols, len(initial_state[i]))):
                    self.grid[i][j] = initial_state[i][j]

    def display(self):
        for row in self.grid:
            print(" ".join("O" if cell else "." for cell in row))
        print("\n")

    def count_live_neighbors(self, row, col):
        directions = [(-1,-1), (-1,0), (-1,1),
                      (0,-1),         (0,1),
                      (1,-1), (1,0), (1,1)]
        count = 0
        for dr, dc in directions:
            r, c = row + dr, col + dc
            if 0 <= r < self.rows and 0 <= c < self.cols:
                count += self.grid[r][c]
        return count

    def next_generation(self):
        new_grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]
        for i in range(self.rows):
            for j in range(self.cols):
                live_neighbors = self.count_live_neighbors(i, j)
                if self.grid[i][j] == 1:  
                    if live_neighbors in [2, 3]:
                        new_grid[i][j] = 1  
                    else:
                        new_grid[i][j] = 0  
                else:  # cellule morte
                    if live_neighbors == 3:
                        new_grid[i][j] = 1  
        self.grid = new_grid

initial_state = [
    [0,1,0],
    [0,0,1],
    [1,1,1]
]

game = GameOfLife(rows=5, cols=5, initial_state=initial_state)

generations = 5
for gen in range(generations):
    print(f"Generation {gen+1}:")
    game.display()
    game.next_generation()
