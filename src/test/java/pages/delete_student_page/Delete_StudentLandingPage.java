package pages.delete_student_page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class Delete_StudentLandingPage {

    public Delete_StudentLandingPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }


    @FindBy(xpath = "(//a[@href='#'])[5]")
    public WebElement studentsModule;

    @FindBy(linkText = "All Students")
    public WebElement allStudButton;

    @FindBy( linkText = "Add Student")
    public WebElement addStudentButton;

    @FindBy( xpath = "(//a[@class='action-icon dropdown-toggle'])[1]")
    public WebElement deleteDropdwn;


    @FindBy( xpath = "(//a[@data-target = '#delete_employee'])[1]")
    public WebElement deleteOption;

    @FindBy( xpath = "//button[@class = 'btn btn-danger']")
    public WebElement deleteRedButton;

//    @FindBy( xpath = "(//table/tbody//td[2])[3]")
//    public WebElement studentId;

    @FindBy( xpath = "(//table/tbody//td[2])[1]")
    public WebElement studentId;

    @FindBy( xpath = " //a[@class ='list-view btn btn-link']")
    public WebElement studListView;

//    @FindBy( xpath = "(//div[@class='profile-widget'])[3]")
//    public WebElement studInfo;

    @FindBy( xpath = "(//div[@class='profile-widget'])[1]")
    public WebElement studInfo;



}
