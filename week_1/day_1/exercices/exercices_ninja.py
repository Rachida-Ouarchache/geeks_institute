# # exercice 1
#   # 1
# 3 <= 3 < 9
# 3 <= 3 => True
# 3 < 9 => True
# Result: True
#   # 2
# 3 == 3 == 3
# 3 == 3 => True
# 3 == 3 => True
# Result: True
#   # 3
# bool(0)
#   0 => False
# Result: False
#   # 4
# bool(5 == "5")
# 5 == "5" => False 
# bool(False) => False
# Result: False
#   # 5
# bool(4 == 4) == bool("4" == "4")
# 4 == 4 => True
# bool(True) => True
# "4" == "4" => True
# bool(True) => True
# bool(True) == bool(True) => True
# Result: True
#   # 6
#  bool(bool(None))
# None => False

# bool(False) => False

# bool(False) => False
# Result: False
#   # 7
# x = (1 == True)
# y = (1 == False)
# a = True + 4
# b = False + 10
# print("x is", x)
# print("y is", y)
# print("a:", a)
# print("b:", b)

# x is True
# y is False
# a: 5
# b: 10
# exercice 2
# longset_sentence =''
# while True :
#   sentence = input('enter a longset sentence you can without character "A"' )
#   if "a" in sentence.lower():
#     print('Your sentence contains the letter "A". Try again!')
#     continue
#   if len(sentence) > len(longset_sentence):
#     longset_sentence = sentence 
#     print("Congratulations! New longest sentence")
#     print(f"{longset_sentence}(lenght {len(longset_sentence)})")
#   else:
#         print(" Your sentence is valid but not longer than the current record.")
# exercice 3
paragraph = """Teamwork is crucial for achieving success in any group endeavor. 
It allows individuals to combine their strengths, skills, and ideas to accomplish goals more efficiently. 
Working together fosters a sense of unity and collaboration, leading to innovative solutions and increased productivity. 
Effective teamwork also enhances communication and builds trust among team members."""
character = len(paragraph)

print("the paragraph contains{character} characters .")

senctence = paragraph.split('.')
num_sentences = len(senctence)
print (f"The paragraph contains {num_sentences} sentences.")

words = paragraph.split() 
num_words = len(words)     

print(f"The paragraph contains {num_words} words.")

words = paragraph.split()

words_lower = [word.lower().strip(".,") for word in words]
unique_words = set(words_lower)
num_unique_words = len(unique_words)

print(f"The paragraph contains {num_unique_words} unique words.")
