package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.Driver;

public class DeleteStudent_Step_Defs {

    @Given("the user is on the Student's Module")
    public void the_user_is_on_the_Student_s_Module() {
        Driver.getDriver().get("http://cybertektraining.com/") ;
    }

    @When("the user clicks on Students dropdown menu")
    public void the_user_clicks_on_Students_dropdown_menu() {
     
    }

    @When("the user chooses All Students option")
    public void the_user_chooses_All_Students_option() {

    }

    @When("the user hovers over any of already created studends")
    public void the_user_hovers_over_any_of_already_created_studends() {

    }

    @When("the user clicks on {int} dots sign in top right corner of student's name")
    public void the_user_clicks_on_dots_sign_in_top_right_corner_of_student_s_name(Integer int1) {

    }

    @When("the user clicks on delete option")
    public void the_user_clicks_on_delete_option() {

    }

    @When("the user clicks on red Delete button")
    public void the_user_clicks_on_red_Delete_button() {

    }

    @When("the user sees that student removed from the All Students page \\(UI).")
    public void the_user_sees_that_student_removed_from_the_All_Students_page_UI() {

    }

    @Then("the user should be able to see that student removed from the database.")
    public void the_user_should_be_able_to_see_that_student_removed_from_the_database() {

    }


}
