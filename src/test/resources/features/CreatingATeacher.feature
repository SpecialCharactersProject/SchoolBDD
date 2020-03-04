Feature:

  @SchoolTest
  Scenario:
Given the user is on the Teacher's Module
When the user clicks on the Teachers dropdown menu
And the user clicks on Add Teacher
And the user fills out the Basic Information field
And the user clicks on the Submit button
And the user should see a new created teacher on the All Teacher page(UI)
Then the user should see a new created teacher in the database