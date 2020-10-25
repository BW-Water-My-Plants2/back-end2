### Goals
- [ ] Use Express' built-in router to build and test a modular server API with Postman.
- [ ] Implement authentication & custom middleware
- [ ] Use a RDBMS from an API
- [ ] Create an authentication workflow using sessions or JSON with web tokens
- [ ] Write tests for backend endpoints (the end point returns appropriate data) based on input
- [ ] Use SQL to create and query a local database, table schemas, configure scripted schema migrations & seed scripts.

### Endpoints

| Request | URL | Description |
| --- | --- | --- |
| POST | /api/auth/register | register as a new user |
| POST | /api/auth/login | log in as existing user |
| GET | /api/plants | get all plants for all users |
| GET | /api/plants/:id | find plant by id |
| POST | /api/plants | add plant |
| PUT | /api/plants | update plant |
| DELETE | /api/plants/:id | delete plant |

### Table Requirements

#### Users
| Name | Type | Required | Unique | Notes | 
| --- | --- | --- | --- | --- |
| id | integer | yes | yes | User's ID |
| name | string | yes | no | User's full name |
| username | string | yes | yes | User's username |
| password | string | yes | no | User's password |
| email | string | no | yes | User's email |
| phone number | integer | no | yes | User's phone number |

#### Plants
| Name | Type | Required | Unique | Notes | 
| --- | --- | --- | --- | --- |
| id | integer | yes | yes | Plant's ID |
| plantname | string | yes | yes | Plant name (common) |
| plantspecies | string | yes | no | Plant name (scientific) |
| waterschedule | string | yes | no | Plant's water schedule |