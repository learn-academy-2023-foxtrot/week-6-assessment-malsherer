# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: MS

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Models in rails can be edited by adding columns. In this situation the Student model needs a foreign key indicating which cohort the student belongs to (a Cohort has many Students). I will need to create a migration to add a foreign key column to the student model. The syntax is: rails generate migration addColumn cohort:references

Researched answer: Run rails db:migrate to run the migration

2. Which RESTful routes must always be passed params?

Your answer: POST requires a param to indicate what data to create.
DELETE requires a param to indicate what to delete.
PUT/PATCH requires a param to indicate what is being updated and how.


Researched answer: GET can take params but does not always require it.

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model + model information creates a new model and adds the values it requires. rails generate migration creates a migration that makes changes to the database. Those are the only two I can remember, sorry!!

Researched answer: rails generate scaffold creates the files required to start a new rails app.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
The name of the controller method would be StudentsController#index
and it calls the "index" action in the StudentsController.

action: "POST" location: /students
The name of the controller method is StudentsController#create and it will use the "create" action in the StudentsController to create a new student.

action: "GET" location: /students/new
The name fo the controller method is StudentsController#new and it will call the "new" action in the StudentsController to show the form for creating a new student. 

action: "GET" location: /students/2
The name of the controller method would be StudentsController#show and it displays the info of the student with the ID of 2.

action: "GET" location: /students/2/edit
The name of the controller method would be StudentsController#edit and it calls the "edit" action in the StudentsController for the student with the ID of 2.

action: "PATCH" location: /students/2
The name of the controller method would be StudentsController#update and it will call the "update" action in the StudentsController to update the data for the student with the ID of 2.

action: "DELETE" location: /students/2
The name of the controller method is StudentsController#destroy and it will delete the student with the ID of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
1. As a user I can see a home page that displays all of my lists, with an option to create a new list.
2. I can open lists I have already created and display the tasks.
3. I can click on the create button and input a name for my new list.
4. Within that list I can create tasks and give them a status of incomplete.
5. I can update the status of a task to mark it as complete.
6. I can edit a a list I have created.
7. Once I have selected to edit a list, I can make changes to the tasks that belong to that list.
8. I can change the text of a task within a list.
9. I can delete a task from a list.
10. I can delete a list and all the tasks contained within it.