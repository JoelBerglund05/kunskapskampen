# pwa-quizz-game


## user
The rows are made up of the following chategories;
id. Id is used to give the user an unice id.
created_at. Used to map when the user created their acount ant how long they have been playing.
username. The displayed name of the user to identify who the users are playing against ang to find their friends.
password. The loggin credentials and security needed to access the users acount.
email. The email is connected to the users game account ant is the primary way for the developers to contact the user about changes and so on. It email is also used for reseting password.


## quizz 
The rows are made up of the following chategories;
id. Separet identification for each question, making it easier to locate and enables the game to chose the game questions with no dubplicates.
questions. The questinon in an of itself/the text displayed to the user.
answer 1-4. The four answers make up the four alternative answers that the users get to choose from. Each question have their own set of four answers.
chategory. Chategory is used to chategorise the questions into subjects. The users gets to choose wich subject they want to answer questions about wich in turn lets the game know from which questions it can chose to display.

## activeGames
The rows are made up of the following chategories;
Id.
created-at. Makes a timestamp of when the game is started.
player(1-2)Ponts: Stores the numper of ponts each player gets wich in turn decides the winner or if there is a need to have a sudden death round.
playerTurn. Used to keep count of whose turn it is depending on if player1 or player2 just answered their question.
QuestionId(1-3). Calls the question from the quizz table by their id wich makes it so that it doesn't have any duplicates.
player(1-2)Id. Calls two palyers from the user table to deside who will compete against each other.