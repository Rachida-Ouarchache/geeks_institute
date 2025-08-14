class song():
    def __init__(self , lyrics):
        self.lyrics = lyrics
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
            
list_song = song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
list_song.sing_me_a_song()      
