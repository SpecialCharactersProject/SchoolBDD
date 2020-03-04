package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.LoginPage;
import pages.teacher.AddTeacherPage;
import pages.teacher.AllTeachersPage;

public class School_StepDefs {

    LoginPage loginPage = new LoginPage();
    AddTeacherPage addTeacherPage = new AddTeacherPage();
    AllTeachersPage allTeachersPage = new AllTeachersPage();

    //LOGGING IN
    @Given("the user is on the School Landing page")
    public void the_user_is_on_the_School_Landing_page() {
        loginPage.login();
    }

    @Then("the user should verify he is on the School main page")
    public void the_user_should_verify_he_is_on_the_School_main_page() {
        String expected = "SCHOOL";
        String actual = addTeacherPage.schoolText.getText();
        Assert.assertEquals(expected, actual);
    }



    //CREATING A TEACHER
    @Given("the user is on the Teacher's Module")
    public void the_user_is_on_the_Teacher_s_Module() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("the user clicks on the Teachers dropdown menu")
    public void the_user_clicks_on_the_Teachers_dropdown_menu() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("the user clicks on Add Teacher")
    public void the_user_clicks_on_Add_Teacher() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("the user fills out the Basic Information field")
    public void the_user_fills_out_the_Basic_Information_field() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("the user clicks on the Submit button")
    public void the_user_clicks_on_the_Submit_button() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("the user should see a new created teacher on the All Teacher page\\(UI)")
    public void the_user_should_see_a_new_created_teacher_on_the_All_Teacher_page_UI() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("the user should see a new created teacher in the database")
    public void the_user_should_see_a_new_created_teacher_in_the_database() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }


    //UPDATING A TEACHER


    //DELETING A TEACHER


    //CREATING A STUDENT


    //UPDATING A STUDENT


    //DELETING A STUDENT

}
