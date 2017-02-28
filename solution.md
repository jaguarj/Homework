Joshs-MacBook-Pro:desktop joshseipel1$ cd ga
Joshs-MacBook-Pro:ga joshseipel1$ ls
Homework
Joshs-MacBook-Pro:ga joshseipel1$ cd homework
Joshs-MacBook-Pro:homework joshseipel1$ ls
command-line-mystery
Joshs-MacBook-Pro:homework joshseipel1$ cd command-line-mystery/
Joshs-MacBook-Pro:command-line-mystery joshseipel1$ ls -a
.   .git    hint1   hint3   hint5   hint7   instructions  readme.md
..    cheatsheet.md hint2   hint4   hint6   hint8   mystery   solution.md
Joshs-MacBook-Pro:command-line-mystery joshseipel1$

cat hint1

Try poking around what's in a file by using the 'head' command:

  head -n 20 people

This will show you the first 20 lines of the 'people' file.Joshs-MacBook-Pro:command-line-mystery joshseipel1$



Joshs-MacBook-Pro:command-line-mystery joshseipel1$ grep -r "CLUE" *
hint2:
 grep "CLUE" crimescene

instructions:Fortunately the sergeant went through and marked the real clues with the word "CLUE" in all caps.
mystery/crimescene:CLUE: Footage from an ATM security camera is blurry but shows that the perpetrator is a tall male, at least 6'.
mystery/crimescene:CLUE: Found a wallet believed to belong to the killer: no ID, just loose change, and membership cards for AAA, Delta SkyMiles, the local library, and the Museum of Bash History. The cards are totally untraceable and have no name, for some reason.
mystery/crimescene:CLUE: Questioned the barista at the local coffee shop. He said a woman left right before they heard the shots. The name on her latte was Annabel, she had blond spiky hair and a New Zealand accent.
mystery/crimescene:grep “CLUE” file
mystery/crimescene:grep “CLUE” crimescene
Joshs-MacBook-Pro:command-line-mystery joshseipel1$

Joshs-MacBook-Pro:mystery joshseipel1$
grep "Annabel" people

Annabel Sun F 26  Hart Place, line 40
Oluwasegun Annabel  M 37  Mattapan Street, line 173
Annabel Church  F 38  Buckingham Place, line 179
Annabel Fuglsang  M 40  Haley Street, line 176
Joshs-MacBook-Pro:mystery joshseipel1$

Joshs-MacBook-Pro:memberships joshseipel1$

grep "Annabel" *

AAA:Annabel Church
AAdvantage:Annabel Fuglsang
AAdvantage:Annabel Church
Fitness_Galaxy:Oluwasegun Annabel
Fitness_Galaxy:Annabel Church
Museum_of_Bash_History:Annabel Church
Museum_of_Bash_History:Oluwasegun Annabel
REI:Annabel Church
Rotary_Club:Annabel Sun
Rotary_Club:Annabel Fuglsang
Rotary_Club:Annabel Church



Joshs-MacBook-Pro:mystery joshseipel1$
head -n 173 streets/Mattapan_Street | tail -n 1

SEE INTERVIEW #9437737


License Plate L337DV9
Make: Honda
Color: Blue
Owner: Joe Germuska
Height: 6'2"
Weight: 164 lbs
--

License Plate L3375A9
Make: Honda
Color: Blue
Owner: Jeremy Bowers
Height: 6'1"
Weight: 204 lbs
--

License Plate L337WR9
Make: Honda
Color: Blue
Owner: Jacqui Maher
Height: 6'2"
Weight: 130 lbs


Joshs-MacBook-Pro:command-line-mystery joshseipel1$
ls

cheatsheet.md hint2   hint4   hint6   hint8   mystery   solution.md

hint1   hint3   hint5   hint7   instructions  readme.md

Joshs-MacBook-Pro:command-line-mystery joshseipel1$

cd mystery

Joshs-MacBook-Pro:mystery joshseipel1$

ls

crimescene  interviews  memberships people    streets   vehicles



Joshs-MacBook-Pro:mystery joshseipel1$
grep -rl "Joe Germuska" memberships

memberships/AAA
memberships/Terminal_City_Library

/// Ruled out as a suspect, memberships are not conducive.

Joshs-MacBook-Pro:mystery joshseipel1$
grep -rl "Jeremy Bowers" memberships

memberships/AAA
memberships/Delta_SkyMiles
memberships/Museum_of_Bash_History
memberships/Terminal_City_Library

Joshs-MacBook-Pro:mystery joshseipel1$
grep -rl "Jacqui Maher" memberships

memberships/AAA
memberships/Delta_SkyMiles
memberships/Museum_of_Bash_History
memberships/Terminal_City_Library

Joshs-MacBook-Pro:mystery joshseipel1$
grep -r "Maher" *

interviews/interview-904020:Maher is not considered a suspect.
Video evidence confirms that she was away at a professional soccer game
on the morning in question, even though it was a workday.

memberships/AAA:Jacqui Maher
memberships/Delta_SkyMiles:Jacqui Maher
memberships/Museum_of_Bash_History:Maher Vos
memberships/Museum_of_Bash_History:Jacqui Maher
memberships/TCSU_Alumni_Association:Maher Vos
memberships/Terminal_City_Library:Jacqui Maher

people:Maher Vos  M 55  Waltham Street, line 340
people:Jacqui Maher F 40  Andover Road, line 224
vehicles:Owner: Maher Vos
vehicles:Owner: Jacqui Maher


Joshs-MacBook-Pro:mystery joshseipel1$
 grep -r "Bowers" *

memberships/AAA:Jeremy Bowers
memberships/Delta_SkyMiles:Jeremy Bowers
memberships/Museum_of_Bash_History:Jeremy Bowers
memberships/Terminal_City_Library:Jeremy Bowers
people:Jeremy Bowers  M 34  Dunstable Road, line 284
vehicles:Owner: Jeremy Bowers

///  All memberships point to Jeremy Bowers as the suspect. ///
Solution = "Jeremy Bowers"


