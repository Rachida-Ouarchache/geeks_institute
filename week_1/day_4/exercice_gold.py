class BankAccount:
    def __init__(self, balance=0):
        """Initialize the account with an optional balance (default = 0)."""
        self.balance = balance

    def deposit(self, amount):
        """Deposit a positive amount into the account."""
        if amount <= 0:
            raise Exception("Deposit amount must be positive.")
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        """Withdraw a positive amount from the account."""
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise Exception("Insufficient funds.")
        self.balance -= amount
        return self.balance

# Créer un compte avec 100 en solde initial
account = BankAccount(100)

# Dépôt de 50
print("New balance after deposit:", account.deposit(50))

# Retrait de 30
print("New balance after withdraw:", account.withdraw(30))

# Retrait avec montant non valide
# account.withdraw(-10)  # → Lève une Exception
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, minimum_balance=0):
        """Initialize the account with balance and minimum balance."""
        super().__init__(balance)   # Appelle le constructeur de BankAccount
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        """Withdraw only if balance after withdrawal >= minimum_balance."""
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive.")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot withdraw: balance would go below minimum balance.")
        self.balance -= amount
        return self.balance
    
# Création d’un compte avec solde initial 200 et minimum_balance = 50
account = MinimumBalanceAccount(balance=200, minimum_balance=50)

print("Balance initiale:", account.balance)

# Retrait valide
print("Nouveau solde après retrait:", account.withdraw(100))  # solde = 100


class BankAccount:
    def __init__(self, username, password, balance=0):
        """Initialize the account with credentials and optional balance."""
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False  # Par défaut non connecté

    def authenticate(self, username, password):
        """Authenticate the user by checking username and password."""
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            raise Exception("Authentication failed. Invalid username or password.")

    def deposit(self, amount):
        """Deposit money only if authenticated."""
        if not self.authenticated:
            raise Exception("You must be authenticated to deposit.")
        if amount <= 0:
            raise Exception("Deposit amount must be positive.")
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        """Withdraw money only if authenticated."""
        if not self.authenticated:
            raise Exception("You must be authenticated to withdraw.")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise Exception("Insufficient funds.")
        self.balance -= amount
        return self.balance
# Création du compte avec login et mot de passe
account = BankAccount("tasnim", "1234", balance=500)

# Essai sans authentification → Exception
# account.deposit(100)

# Authentification correcte
account.authenticate("tasnim", "1234")

# Dépôt après authentification
print("Nouveau solde après dépôt:", account.deposit(200))  # 700

# Retrait après authentification
print("Nouveau solde après retrait:", account.withdraw(150))  # 550
