class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = [] 

    def call(self, other_phone):
        call_record = f"{self.phone_number} a appelé {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)

    def show_call_history(self):
        if not self.call_history:
            print("Aucun appel dans l'historique.")
        else:
            print("Historique des appels :")
            for record in self.call_history:
                print(record)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        print(f"Message envoyé de {self.phone_number} à {other_phone.phone_number} : {content}")

    def show_outgoing_messages(self):
        if not self.messages:
            print("Aucun message envoyé.")
        else:
            print("Messages envoyés :")
            for msg in self.messages:
                print(f"À {msg['to']}: {msg['content']}")

    def show_incoming_messages(self, all_phones):
        incoming = []
        for phone in all_phones:
            for msg in phone.messages:
                if msg['to'] == self.phone_number:
                    incoming.append(msg)
        if not incoming:
            print("Aucun message reçu.")
        else:
            print("Messages reçus :")
            for msg in incoming:
                print(f"De {msg['from']}: {msg['content']}")

    def show_messages_from(self, sender_phone, all_phones):
        filtered = []
        for phone in all_phones:
            for msg in phone.messages:
                if msg['to'] == self.phone_number and msg['from'] == sender_phone.phone_number:
                    filtered.append(msg)
        if not filtered:
            print(f"Aucun message reçu de {sender_phone.phone_number}.")
        else:
            print(f"Messages reçus de {sender_phone.phone_number} :")
            for msg in filtered:
                print(msg['content'])

phone1 = Phone("0612345678")
phone2 = Phone("0698765432")
phone3 = Phone("0600000000")

all_phones = [phone1, phone2, phone3]

# Tests des appels
phone1.call(phone2)
phone2.call(phone1)
phone3.call(phone1)

print("\n--- Historique des appels ---")
phone1.show_call_history()
phone2.show_call_history()
phone3.show_call_history()

phone1.send_message(phone2, "Salut !")
phone2.send_message(phone1, "Hello !")
phone3.send_message(phone1, "Hi there!")

print("\n--- Messages sortants de phone1 ---")
phone1.show_outgoing_messages()

print("\n--- Messages entrants de phone1 ---")
phone1.show_incoming_messages(all_phones)

print("\n--- Messages de phone2 à phone1 ---")
phone1.show_messages_from(phone2, all_phones)
