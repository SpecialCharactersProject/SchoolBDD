@deleteStudent
Feature:Delete a Student
#
#  @deleteStudent1
#  Scenario Outline:Verifying delete student function CREATION
#    Given the user is on the Student's Module
#    When the user clicks on Students dropdown menu
#    And user clicks on Add Student
#    And user fills out all information ("<userName>","<lastName>","<email>","<joinDate>","<subject>","<mobile>","<birthDate>","<major>","<permAddress>","<compName>","<title>","<startDate>","<city>","<street>","<zipCode>","<state>")
#    And user clicks on Submit button
#    Then user should see new user being created.
#
#    Examples: Student creation
#      | userName | lastName | email | joinDate | subject | mobile | birthDate | major | permAddress | compName | title | startDate | city | street | zipCode | state |
#
#
##  Scenario Outline: Etsy search title verification
##    When User searches for "<searchValue>"
##    Then User should see "<expectedTitle>" in the Etsy title
##
##    Examples: different data sets
##    #command option L for mac
##      | searchValue         | expectedTitle       |
##      | custom wooden spoon | Custom wooden spoon |
##      | wooden spoon        | Wooden spoon        |
##      | wooden spoon        | Wooden spoon        |
#


@deleteStudent2
Scenario: Verifying delete student function DELETION
Given the user is on the Student's Module
When the user clicks on Students dropdown menu
And the user chooses All Students option
And the user opens already created student
And the user clicks on 3 dots sign in top right corner of student's name
And the user clicks on delete option
And the user clicks on red Delete button
And the user sees that student removed from the All Students page (UI).
Then the user should be able to see that student removed from the database.
