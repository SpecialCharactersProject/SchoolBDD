@SC-319 @SchoolTest
Feature: 

	
	@SC-321 @SC-317 @SC-318
	Scenario: Verification of the ability to update a teacher
		Scenario Outline: Changing Name and department of the teacher
		
		Given the user is on the School Landing page
		When the user should verify he is on the School main page
		When the user is on the Teacher's Module
		When user should click on the all teachers button
		And user shoudl be able to see added teachers
		And user should clicks on the three dots sighn 
		And user should click on the edit button
		And user should verify the edit teacher header
		And user should update the "<Firstname>" of the teacher
		And user should update the "<Department>" of the teacher
		And user should handle the pop-up message
		And user should verify updated information on UI 
		Then user should compare updated information in database with UI
		
		Examples: Different Data Sets
		      | Firstname   | Department |
		      | Albert      | Math    |
		     
			

	
	@SC-322 @SC-317 @SC-318
	Scenario: Verification of the ability to delete a teacher
		Given user clicks on All Teachers submodule
		      And user search teacher with "Jason"
		      And user on the teacher profile
		      And user verifies the MY PROFILE header
		      And user stores the "teacher_id"
		      Then user compares UI teacher_id with dataBase teacher_id
		      When user clicks on All Teachers submodule
		      And user search the teacher with id
		      And   user clicks on threeDotsign in order to delete the teacher
		      When  user  clicks on delete option
		      And   user should handle the confirmation message is displayed
		      When  user clicks on All Teachers submodule
		      And user search for teacher with teacher_id on UI
		      And user verifies threeDotsign not displayed on UI
		      Then user verifies UI teacherid with dataBase teacherid
		          
		            
		
			

	
	@SC-323 @SC-317 @SC-318
	Scenario: Verification of the ability to create a student
		Given the user is on the Student's Module
		      When user should click on the add student button
		      And user should be able to see add students header
		      And user should verify Student Information header
		      When user store student's
		        | FIRST_NAME        | Lionel          |
		        | LAST_NAME         | Messi           |
		        | EMAIL             | messi@gmail.com |
		        | JOIN_DATE         | 01/01/2010      |
		        | PASSWORD          | 123             |
		        | SUBJECT           | Math            |
		        | MOBILE_NUMBER     | 3124756521      |
		        | GENDER            | Male            |
		        | ADMISSION_NO      | 10              |
		        | BIRTH_DATE        | 01/01/1990      |
		        | MAJOR             | Football        |
		        | BATCH             | 10              |
		        | SECTION           | LaLigA          |
		        | PREMANENT_ADDRESS | 921 W Huron St. |
		        | COMPANY_NAME      | Barcelona       |
		        | TITLE             | Goat            |
		        | START_DATE        | 01/02/2010      |
		        | CITY              | Barcelona       |
		        | STREET            | Huron           |
		        | ZIP_CODE          | 60742           |
		        | STATE             | IL              |
		      
		      And user should enter student's information
		      And user should click on the summit button
		      And user should handle pop-up alert
		      When user is on the All students page
		      And user should search student by "name" on UI
		      And user should click on the student profile
		      And user should verify my profile header
		      And user should verify "student_id" on UI
		      And user should store added student information
		      Then user should compare added student information with database
		
			

	
	@SC-324 @SC-317 @SC-318
	Scenario: Verification of the ability to update a student
		Given the user clicks and All Students and Edit button
		      When the user updates below fields with new data
		
		|FIRST_NAME         |           Phyliss                                       |
		|LAST_NAME          |           Edelstein                                     |
		|EMAIL_ADDRESS      |           koteague0@shutterfly.com                      |
		|SUBJECT            |           Linear Algebra                                |
		|PHONE              |           2061166182                                    |
		|MAJOR              |           Calculus                                      |
		|PREMANENT_ADDRESS  |           965 Nancy Center, Long Beach, CA 90847        |
		
		    Then the user should be able to see updated student info on website
		    Then the user should be able to see the updated student info in database
		
		
			

	
	@SC-325 @SC-317 @SC-318
	Scenario: Verification of the ability to delete a student
		Given the user clicks on Students dropdown menu
		And the user chooses All Students option
		And the user opens already created student
		And the user clicks on 3 dots sign in top right corner of student's name
		And the user clicks on delete option
		And the user clicks on red Delete button
		And the user sees that student removed from the All Students page (UI).
		Then the user should be able to see that student removed from the database.
			

	
	@SC-320 @SC-317 @SC-318
	Scenario: Verification of the ability to create a teacher
		    Given the user is on the Teacher's Module
		    And the user clicks on Add Teacher
		    And the user enters
		      | FirstName        | Venkat           |
		      | Email            | venkat@gmail.com |
		      | Password         | 123456           |
		      | Subject          | Math             |
		      | Gender           | Male             |
		      | BirthDate        | 09/01/2020       |
		      | Batch            | 7                |
		      | LastName         | Patel            |
		      | JoiningDate      | 02/02/2020       |
		      | MobileNumber     | 7731112222       |
		      | Department       | English          |
		      | Salary           | 50000            |
		      | Section          | 9.0              |
		      | PermanentAddress | 123 Main St      |
		    And the user clicks on the Submit button
		    And the user should see a new created teacher on the All Teacher page(UI)
		    Then the user should see a new created teacher in the database