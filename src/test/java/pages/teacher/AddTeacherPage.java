package pages.teacher;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AddTeacherPage {

    public AddTeacherPage () {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy (xpath = "//span[@class='text-uppercase']")
    public WebElement schoolText;

    @FindBy (xpath = "//a[@class='subdrop']")
    public WebElement teachersButton;

    @FindBy (linkText = "Add Teacher")
    public WebElement addTeacherButton;

    @FindBy (xpath = "(//input[@type='text'])[1]")
    public WebElement firstNameButton;

    @FindBy (xpath = "(//input[@type='text'])[2]")
    public WebElement emailButton;

    @FindBy (xpath = "(//input[@type='password'])[1]")
    public WebElement passwordButton;

    @FindBy (xpath = "(//input[@type='text'])[3]")
    public WebElement subjectButton;

    @FindBy (xpath = "(//div[@class='form-group custom-mt-form-group'])[5]//select")
    public WebElement genderDropdown;

    @FindBy (xpath = "(//input[@type='text'])[4]")
    public WebElement birthDate;






}
