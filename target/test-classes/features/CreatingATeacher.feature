Feature:

  @SchoolTest
  Scenario:
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



