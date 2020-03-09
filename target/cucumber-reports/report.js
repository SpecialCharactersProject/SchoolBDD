$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CreatingATeacher.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SchoolTest"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_clicks_on_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see a new created teacher on the All Teacher page(UI)",
  "keyword": "And "
});
formatter.match({
  "location": "School_StepDefs.the_user_should_see_a_new_created_teacher_on_the_All_Teacher_page_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see a new created teacher in the database",
  "keyword": "Then "
});
formatter.match({
  "location": "School_StepDefs.the_user_should_see_a_new_created_teacher_in_the_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});