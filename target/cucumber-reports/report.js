$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/DeleteStudent.feature");
formatter.feature({
  "name": "Delete a Student",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@deleteStudent"
    }
  ]
});
formatter.scenario({
  "name": "Verifying delete student function DELETION",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteStudent"
    },
    {
      "name": "@deleteStudent2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Student\u0027s Module",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteStudent_Step_Defs.the_user_is_on_the_Student_s_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Students dropdown menu",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStudent_Step_Defs.the_user_clicks_on_Students_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user chooses All Students option",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_Step_Defs.the_user_chooses_All_Students_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user opens already created student",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_Step_Defs.user_opens_alerady_created_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on 3 dots sign in top right corner of student\u0027s name",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_Step_Defs.the_user_clicks_on_dots_sign_in_top_right_corner_of_student_s_name(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on delete option",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_Step_Defs.the_user_clicks_on_delete_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on red Delete button",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_Step_Defs.the_user_clicks_on_red_Delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sees that student removed from the All Students page (UI).",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteStudent_Step_Defs.the_user_sees_that_student_removed_from_the_All_Students_page_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see that student removed from the database.",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteStudent_Step_Defs.the_user_should_be_able_to_see_that_student_removed_from_the_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});