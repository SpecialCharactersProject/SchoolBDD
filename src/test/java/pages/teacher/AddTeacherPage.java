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
    public WebElement teachersButtonDropdown;

    @FindBy (linkText = "Add Teacher")
    public WebElement addTeacherButton;

    @FindBy (xpath = "(//input[@type='text'])[1]")
    public WebElement firstNameInput;

    @FindBy (xpath = "(//input[@type='text'])[2]")
    public WebElement emailInput;

    @FindBy (xpath = "(//input[@type='password'])[1]")
    public WebElement passwordInput;

    @FindBy (xpath = "(//input[@type='text'])[3]")
    public WebElement subjectInput;

    @FindBy (xpath = "(//div[@class='form-group custom-mt-form-group'])[5]//select")
    public WebElement genderDropdown;

    @FindBy (xpath = "(//input[@type='text'])[4]")
    public WebElement birthDateInput;

    @FindBy (xpath = "(//div[@class='form-group custom-mt-form-group'])[7]//select")
    public WebElement batchDropdown;

    @FindBy (xpath = "(//input[@type='text'])[5]")
    public WebElement lastNameInput;

    @FindBy (xpath = "(//input[@type='text'])[6]")
    public WebElement joiningDateInput;

    @FindBy (xpath = "(//input[@type='password'])[2]")
    public WebElement confirmPasswordInput;

    @FindBy (xpath = "//input[@type='number']")
    public WebElement mobileNumberInput;

    @FindBy (xpath = "(//div[@class='form-group custom-mt-form-group'])[12]/select")
    public WebElement departmentDropdown;

    @FindBy (xpath = "(//input[@type='text'])[7]")
    public WebElement salaryInput;

    @FindBy (xpath = "(//input[@type='text'])[8]")
    public WebElement sectionInput;

    @FindBy (css = "textarea#message")
    public WebElement permanentAddressInput;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement submitButton;











}