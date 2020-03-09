$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/1 (3).feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SC-319"
    },
    {
      "name": "@SchoolTest"
    }
  ]
});
formatter.scenario({
  "name": "Verification of the ability to update a teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC-319"
    },
    {
      "name": "@SchoolTest"
    },
    {
      "name": "@SC-321"
    },
    {
      "name": "@SC-317"
    },
    {
      "name": "@SC-318"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Changing Name and department of the teacher",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the School Landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user should verify he is on the School main page",
  "keyword": "When "
});
formatter.step({
  "name": "the user is on the Teacher\u0027s Module",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on the all teachers button",
  "keyword": "When "
});
formatter.step({
  "name": "user shoudl be able to see added teachers",
  "keyword": "And "
});
formatter.step({
  "name": "user should clicks on the three dots sighn",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on the edit button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify the edit teacher header",
  "keyword": "And "
});
formatter.step({
  "name": "user should update the \"\u003cFirstname\u003e\" of the teacher",
  "keyword": "And "
});
formatter.step({
  "name": "user should update the \"\u003cDepartment\u003e\" of the teacher",
  "keyword": "And "
});
formatter.step({
  "name": "user should handle the pop-up message",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify updated information on UI",
  "keyword": "And "
});
formatter.step({
  "name": "user should compare updated information in database with UI",
  "keyword": "Then "
});
formatter.examples({
  "name": "Different Data Sets",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Department"
      ]
    },
    {
      "cells": [
        "Albert",
        "Math"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Changing Name and department of the teacher",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC-319"
    },
    {
      "name": "@SchoolTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the School Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "School_StepDefs.the_user_is_on_the_School_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should verify he is on the School main page",
  "keyword": "When "
});
formatter.match({
  "location": "School_StepDefs.the_user_should_verify_he_is_on_the_School_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Teacher\u0027s Module",
  "keyword": "When "
});
formatter.match({
  "location": "School_StepDefs.the_user_is_on_the_Teacher_s_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on the all teachers button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user shoudl be able to see added teachers",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should clicks on the three dots sighn",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should click on the edit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should verify the edit teacher header",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should update the \"Albert\" of the teacher",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should update the \"Math\" of the teacher",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should handle the pop-up message",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should verify updated information on UI",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should compare updated information in database with UI",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of the ability to delete a teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC-319"
    },
    {
      "name": "@SchoolTest"
    },
    {
      "name": "@SC-322"
    },
    {
      "name": "@SC-317"
    },
    {
      "name": "@SC-318"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on All Teachers submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "School_StepDefs.user_clicks_on_All_Teachers_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search teacher with \"Jason\"",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_search_teacher_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on the teacher profile",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_on_the_teacher_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the MY PROFILE header",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_verifies_the_MY_PROFILE_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user stores the \"teacher_id\"",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_stores_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user compares UI teacher_id with dataBase teacher_id",
  "keyword": "Then "
});
formatter.match({
  "location": "School_StepDefs.user_compares_UI_teacher_id_with_dataBase_teacher_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on All Teachers submodule",
  "keyword": "When "
});
formatter.match({
  "location": "School_StepDefs.user_clicks_on_All_Teachers_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search the teacher with id",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_search_the_teacher_with_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on threeDotsign in order to delete the teacher",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_clicks_on_threeDotsign_in_order_to_delete_the_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  clicks on delete option",
  "keyword": "When "
});
formatter.match({
  "location": "School_StepDefs.user_clicks_on_delete_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should handle the confirmation message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_handle_the_confirmation_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on All Teachers submodule",
  "keyword": "When "
});
formatter.match({
  "location": "School_StepDefs.user_clicks_on_All_Teachers_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for teacher with teacher_id on UI",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_search_for_teacher_with_teacher_id_on_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies threeDotsign not displayed on UI",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_verifies_threeDotsign_not_displayed_on_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies UI teacherid with dataBase teacherid",
  "keyword": "Then "
});
formatter.match({
  "location": "School_StepDefs.user_verifies_UI_teacherid_with_dataBase_teacherid()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of the ability to create a student",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC-319"
    },
    {
      "name": "@SchoolTest"
    },
    {
      "name": "@SC-323"
    },
    {
      "name": "@SC-317"
    },
    {
      "name": "@SC-318"
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
  "location": "School_StepDefs.the_user_is_on_the_Student_s_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on the add student button",
  "keyword": "When "
});
formatter.match({
  "location": "School_StepDefs.user_should_click_on_the_add_student_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see add students header",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_be_able_to_see_add_students_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify Student Information header",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_verify_Student_Information_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user store student\u0027s",
  "rows": [
    {
      "cells": [
        "FIRST_NAME",
        "Lionel"
      ]
    },
    {
      "cells": [
        "LAST_NAME",
        "Messi"
      ]
    },
    {
      "cells": [
        "EMAIL",
        "messi@gmail.com"
      ]
    },
    {
      "cells": [
        "JOIN_DATE",
        "01/01/2010"
      ]
    },
    {
      "cells": [
        "PASSWORD",
        "123"
      ]
    },
    {
      "cells": [
        "SUBJECT",
        "Math"
      ]
    },
    {
      "cells": [
        "MOBILE_NUMBER",
        "3124756521"
      ]
    },
    {
      "cells": [
        "GENDER",
        "Male"
      ]
    },
    {
      "cells": [
        "ADMISSION_NO",
        "10"
      ]
    },
    {
      "cells": [
        "BIRTH_DATE",
        "01/01/1990"
      ]
    },
    {
      "cells": [
        "MAJOR",
        "Football"
      ]
    },
    {
      "cells": [
        "BATCH",
        "10"
      ]
    },
    {
      "cells": [
        "SECTION",
        "LaLigA"
      ]
    },
    {
      "cells": [
        "PREMANENT_ADDRESS",
        "921 W Huron St."
      ]
    },
    {
      "cells": [
        "COMPANY_NAME",
        "Barcelona"
      ]
    },
    {
      "cells": [
        "TITLE",
        "Goat"
      ]
    },
    {
      "cells": [
        "START_DATE",
        "01/02/2010"
      ]
    },
    {
      "cells": [
        "CITY",
        "Barcelona"
      ]
    },
    {
      "cells": [
        "STREET",
        "Huron"
      ]
    },
    {
      "cells": [
        "ZIP_CODE",
        "60742"
      ]
    },
    {
      "cells": [
        "STATE",
        "IL"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "School_StepDefs.user_store_student_s(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter student\u0027s information",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_enter_student_s_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on the summit button",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_click_on_the_summit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should handle pop-up alert",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_handle_pop_up_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the All students page",
  "keyword": "When "
});
formatter.match({
  "location": "School_StepDefs.user_is_on_the_All_students_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should search student by \"name\" on UI",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_search_student_by_on_UI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on the student profile",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_click_on_the_student_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify my profile header",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_verify_my_profile_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"student_id\" on UI",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_verify_on_UI(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027text\u0027][1]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Karina-Ulanova.local\u0027, ip: \u0027fe80:0:0:0:14a9:7ac5:6431:6827%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/gv/3vnzdnjs5nb...}, goog:chromeOptions: {debuggerAddress: localhost:60422}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 330e90e73e824eb009ee466c95f834db\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027text\u0027][1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat step_definitions.School_StepDefs.user_should_verify_on_UI(School_StepDefs.java:405)\n\tat ✽.user should verify \"student_id\" on UI(src/test/resources/features/1 (3).feature:89)\n",
  "status": "failed"
});
formatter.step({
  "name": "user should store added student information",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_should_store_added_student_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should compare added student information with database",
  "keyword": "Then "
});
formatter.match({
  "location": "School_StepDefs.user_should_compare_added_student_information_with_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of the ability to update a student",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC-319"
    },
    {
      "name": "@SchoolTest"
    },
    {
      "name": "@SC-324"
    },
    {
      "name": "@SC-317"
    },
    {
      "name": "@SC-318"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks and All Students and Edit button",
  "keyword": "Given "
});
formatter.match({
  "location": "School_StepDefs.the_user_clicks_and_All_Students_and_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user updates below fields with new data",
  "rows": [
    {
      "cells": [
        "FIRST_NAME",
        "Phyliss"
      ]
    },
    {
      "cells": [
        "LAST_NAME",
        "Edelstein"
      ]
    },
    {
      "cells": [
        "EMAIL_ADDRESS",
        "koteague0@shutterfly.com"
      ]
    },
    {
      "cells": [
        "SUBJECT",
        "Linear Algebra"
      ]
    },
    {
      "cells": [
        "PHONE",
        "2061166182"
      ]
    },
    {
      "cells": [
        "MAJOR",
        "Calculus"
      ]
    },
    {
      "cells": [
        "PREMANENT_ADDRESS",
        "965 Nancy Center, Long Beach, CA 90847"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "School_StepDefs.the_user_updates_below_fields_with_new_data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see updated student info on website",
  "keyword": "Then "
});
formatter.match({
  "location": "School_StepDefs.theUserShouldBeAbleToSeeUpdatedStudentInfoOnWebsite()"
});
formatter.result({
  "error_message": "java.lang.ArrayIndexOutOfBoundsException: Index 1 out of bounds for length 1\n\tat step_definitions.School_StepDefs.theUserShouldBeAbleToSeeUpdatedStudentInfoOnWebsite(School_StepDefs.java:504)\n\tat ✽.the user should be able to see updated student info on website(src/test/resources/features/1 (3).feature:109)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should be able to see the updated student info in database",
  "keyword": "Then "
});
formatter.match({
  "location": "School_StepDefs.the_user_should_be_able_to_see_the_updated_student_info_in_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of the ability to delete a student",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC-319"
    },
    {
      "name": "@SchoolTest"
    },
    {
      "name": "@SC-325"
    },
    {
      "name": "@SC-317"
    },
    {
      "name": "@SC-318"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Students dropdown menu",
  "keyword": "Given "
});
formatter.match({
  "location": "School_StepDefs.the_user_clicks_on_Students_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user chooses All Students option",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_chooses_All_Students_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user opens already created student",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.user_opens_alerady_created_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on 3 dots sign in top right corner of student\u0027s name",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_clicks_on_dots_sign_in_top_right_corner_of_student_s_name(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on delete option",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_clicks_on_delete_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on red Delete button",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_clicks_on_red_Delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sees that student removed from the All Students page (UI).",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_sees_that_student_removed_from_the_All_Students_page_UI()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Karina-Ulanova.local\u0027, ip: \u0027fe80:0:0:0:14a9:7ac5:6431:6827%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/gv/3vnzdnjs5nb...}, goog:chromeOptions: {debuggerAddress: localhost:60422}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 330e90e73e824eb009ee466c95f834db\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\n\tat step_definitions.School_StepDefs.the_user_sees_that_student_removed_from_the_All_Students_page_UI(School_StepDefs.java:610)\n\tat ✽.the user sees that student removed from the All Students page (UI).(src/test/resources/features/1 (3).feature:124)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should be able to see that student removed from the database.",
  "keyword": "Then "
});
formatter.match({
  "location": "School_StepDefs.the_user_should_be_able_to_see_that_student_removed_from_the_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of the ability to create a teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC-319"
    },
    {
      "name": "@SchoolTest"
    },
    {
      "name": "@SC-320"
    },
    {
      "name": "@SC-317"
    },
    {
      "name": "@SC-318"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Teacher\u0027s Module",
  "keyword": "Given "
});
formatter.match({
  "location": "School_StepDefs.the_user_is_on_the_Teacher_s_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Add Teacher",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_clicks_on_Add_Teacher()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Add Teacher\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Karina-Ulanova.local\u0027, ip: \u0027fe80:0:0:0:14a9:7ac5:6431:6827%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/gv/3vnzdnjs5nb...}, goog:chromeOptions: {debuggerAddress: localhost:60422}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 330e90e73e824eb009ee466c95f834db\n*** Element info: {Using\u003dlink text, value\u003dAdd Teacher}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat step_definitions.School_StepDefs.the_user_clicks_on_Add_Teacher(School_StepDefs.java:69)\n\tat ✽.the user clicks on Add Teacher(src/test/resources/features/1 (3).feature:132)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user enters",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Venkat"
      ]
    },
    {
      "cells": [
        "Email",
        "venkat@gmail.com"
      ]
    },
    {
      "cells": [
        "Password",
        "123456"
      ]
    },
    {
      "cells": [
        "Subject",
        "Math"
      ]
    },
    {
      "cells": [
        "Gender",
        "Male"
      ]
    },
    {
      "cells": [
        "BirthDate",
        "09/01/2020"
      ]
    },
    {
      "cells": [
        "Batch",
        "7"
      ]
    },
    {
      "cells": [
        "LastName",
        "Patel"
      ]
    },
    {
      "cells": [
        "JoiningDate",
        "02/02/2020"
      ]
    },
    {
      "cells": [
        "MobileNumber",
        "7731112222"
      ]
    },
    {
      "cells": [
        "Department",
        "English"
      ]
    },
    {
      "cells": [
        "Salary",
        "50000"
      ]
    },
    {
      "cells": [
        "Section",
        "9.0"
      ]
    },
    {
      "cells": [
        "PermanentAddress",
        "123 Main St"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_enters(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_clicks_on_the_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see a new created teacher on the All Teacher page(UI)",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_should_see_a_new_created_teacher_on_the_All_Teacher_page_UI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see a new created teacher in the database",
  "keyword": "Then "
});
formatter.match({
  "location": "School_StepDefs.the_user_should_see_a_new_created_teacher_in_the_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
});