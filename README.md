# REST-API-Employee
Simple REST API using node.js, express, JavaScript... Maybe some TypeScript.
CRUD application for Employee list.

This application utilizes node.js, express, typescript/JavaScript and mongodb to Get, Add, Patch, and Delete an employee list.

The employee list has three main categories: Name, Position, and Age.  A mongo ID is used as the main ID for each employee, which we target when amending/patch and delete employee records.  Please refer to the Schema.notes for a schedule of employees to add/put or amend into the database using he api.  

The following is an image tutorial on to use the api:

Get route to view all employees in the list (vist localhost:3000/api/employees in your browers or postman):
[click to view image](assests\Get.JPG)

Post route using Postman:
[click to view image](assests\Post.JPG)

Patch route using Postman by targeting specific employees by ID (localhost:3000/api/employees/:id)
Before [click to view image](assests\Patch-Before.JPG)
After [click to view image](assests\Patch-After.JPG)

Delete route using Postman by targeting specific employee by ID (localhost:3000/api/employees/:id)
Before [click to view image](assests\Delete-before.JPG)
After [click to view image](assests\Delete-after.JPG)

Thanks for using my API.




