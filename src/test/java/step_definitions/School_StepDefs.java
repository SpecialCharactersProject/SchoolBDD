package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.LoginPage;
import pages.student.AddStudentPage;
import pages.student.AllStudentsPage;
import pages.teacher.AddTeacherPage;
import pages.teacher.AllTeachersPage;
import utilities.SeleniumUtils;

import java.util.Map;

public class School_StepDefs {

    LoginPage loginPage = new LoginPage();                          //here, I am just logging in

    AddTeacherPage addTeacherPage = new AddTeacherPage();           //the 4 line below: I'm creating the objects, so we can use the elements from the Page classes
    AllTeachersPage allTeachersPage = new AllTeachersPage();
    AddStudentPage addStudentPage = new AddStudentPage();
    AllStudentsPage allStudentsPage = new AllStudentsPage();

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
        addTeacherPage.teachersButtonDropdown.click();
    }


    @When("the user clicks on Add Teacher")
    public void the_user_clicks_on_Add_Teacher() {
        addTeacherPage.addTeacherButton.click();
    }


    @When("the user enters")
    public void the_user_enters(io.cucumber.datatable.DataTable dataTable) {
        Map<String, String> data = dataTable.asMap(String.class, String.class);
        SeleniumUtils.pause(2);

        addTeacherPage.firstNameInput.sendKeys(data.get("FirstName"));
        addTeacherPage.emailInput.sendKeys(data.get("Email"));
        addTeacherPage.passwordInput.sendKeys(data.get("Password"));
        addTeacherPage.subjectInput.sendKeys(data.get("Subject"));
        addTeacherPage.genderDropdown.sendKeys(data.get("Gender"));
        addTeacherPage.birthDateInput.sendKeys(data.get("BirthDate"));
        addTeacherPage.batchDropdown.sendKeys(data.get("Batch"));
        addTeacherPage.lastNameInput.sendKeys(data.get("LastName"));
        addTeacherPage.joiningDateInput.sendKeys(data.get("JoiningDate"));
        addTeacherPage.mobileNumberInput.sendKeys(data.get("MobileNumber"));
        addTeacherPage.departmentDropdown.sendKeys(data.get("Department"));
        addTeacherPage.salaryInput.clear();
        addTeacherPage.salaryInput.sendKeys(data.get("Salary"));
        addTeacherPage.sectionInput.sendKeys(data.get("Section"));
        addTeacherPage.permanentAddressInput.sendKeys(data.get("PermanentAddress"));

    }

    @When("the user clicks on the Submit button")
    public void the_user_clicks_on_the_Submit_button() {
        addTeacherPage.submitButton.click();

    }

    @When("the user should see a new created teacher on the All Teacher page\\(UI)")
    public void the_user_should_see_a_new_created_teacher_on_the_All_Teacher_page_UI() {

    }

    @Then("the user should see a new created teacher in the database")
    public void the_user_should_see_a_new_created_teacher_in_the_database() {

    }


    //UPDATING A TEACHER


    //DELETING A TEACHER


    //CREATING A STUDENT


    //UPDATING A STUDENT


    //DELETING A STUDENT

}
