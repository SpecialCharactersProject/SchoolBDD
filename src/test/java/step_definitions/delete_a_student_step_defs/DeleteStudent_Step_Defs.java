package step_definitions.delete_a_student_step_defs;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pages.delete_student_page.Delete_StudentLandingPage;
import utilities.Config;
import utilities.DBUtility;
import utilities.Driver;
import utilities.SeleniumUtils;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class DeleteStudent_Step_Defs {

    Delete_StudentLandingPage delStudent = new Delete_StudentLandingPage();
    WebElement studentIdUI;
    String compareID = "";

    // DELETING STUDENT FUNCTION //

    @Given("the user is on the Student's Module")
    public void the_user_is_on_the_Student_s_Module() {
        Driver.getDriver().get(Config.getProperty("cybertektrainingURL"));
    }

    @When("the user clicks on Students dropdown menu")
    public void the_user_clicks_on_Students_dropdown_menu() throws InterruptedException {
        delStudent.studentsModule.click();
        SeleniumUtils.pause(2);
    }

    @When("the user chooses All Students option")
    public void the_user_chooses_All_Students_option() throws InterruptedException {
        delStudent.allStudButton.click();
        SeleniumUtils.pause(2);
    }

    @When("the user opens already created student")
    public void user_opens_alerady_created_student() throws InterruptedException {
        delStudent.studListView.click();
        Driver.getDriver().navigate().refresh();
        SeleniumUtils.pause(4);
        WebElement studentIdUI = delStudent.studentId;
        SeleniumUtils.pause(5);
        compareID = studentIdUI.getText();
        Driver.getDriver().navigate().back();
        SeleniumUtils.pause(2);
        delStudent.studInfo.click();
        SeleniumUtils.pause(2);
        Driver.getDriver().navigate().back();
        SeleniumUtils.pause(2);
    }

    @When("the user clicks on {int} dots sign in top right corner of student's name")
    public void the_user_clicks_on_dots_sign_in_top_right_corner_of_student_s_name(Integer int1) throws InterruptedException {
        delStudent.deleteDropdwn.click();
        SeleniumUtils.pause(2);
    }

    @When("the user clicks on delete option")
    public void the_user_clicks_on_delete_option() throws InterruptedException {
        delStudent.deleteOption.click();
        SeleniumUtils.pause(2);
    }

    @When("the user clicks on red Delete button")
    public void the_user_clicks_on_red_Delete_button() throws InterruptedException {
        delStudent.deleteRedButton.click();

        Driver.getDriver().navigate().refresh();
        delStudent.studListView.click();
        Driver.getDriver().navigate().refresh();
        SeleniumUtils.pause(4);
    }

    @When("the user sees that student removed from the All Students page \\(UI).")
    public void the_user_sees_that_student_removed_from_the_All_Students_page_UI() throws InterruptedException {
        Driver.getDriver().navigate().refresh();
        List<WebElement> studentsIdsUI = Driver.getDriver().findElements(By.xpath("//table/tbody//td[2]"));
        for (WebElement id : studentsIdsUI) {
            Assert.assertFalse("ID Still exists. UI VERIFICATION FAILED", compareID.equalsIgnoreCase(id.getText()));
        }
    }

    @Then("the user should be able to see that student removed from the database.")
    public void the_user_should_be_able_to_see_that_student_removed_from_the_database() throws SQLException {
        DBUtility.createConnectionSchoolDB();
        List<Map<Object, Object>> dbInfo = DBUtility.executeQuery("select s.first_name, s.last_name, c.student_id from student s inner join contact c on s.student_id = c.student_id");
        for (Map<Object, Object> map : dbInfo) {
            Assert.assertFalse("Database verification failed", map.get("STUDENT_ID").toString().equalsIgnoreCase(compareID));
        }

    }

}
