
# Seasoning application overview

## Brief description
	
The goal of the application is to put workers in relation with employers for seasonal jobs. It simplifies the process of looking and applying for a job.

## User stories

To access the application, you need to create an account, filling it with your personal information, your resume and add a profile picture.
The user may login to the application using his email and password.

After his profile creation, the user is able to add references, work experiences and availability 
The user can search for a job using the search home page, or can apply to recommended offers showed depending on his profile.

If none offers is suitable for the worker, he is also available to talk to any employers using the employer tab.

When the worker find an offer he wants to apply to, the "Apply" button redirect to the "Messages" tab and start a new message channel between the candidate and the employer.

The candidate receive a notification if its candidacy is updated. It can be "On hold", "Accepted" or "Rejected". If the offer is closed, the worker is notified with a message in the employer message channel. 

## Entrypoints

### Profile

- GET /profile
- PATCH /profile
- DELETE /profile
- PUT /profile/upload/cv
- PUT /profile/upload/profilePicture

### Authentication

- POST /login
- POST /register

### Profile components

- POST /experience
- POST /reference
- POST /disponibility

- PUT /experience/:experience_id
- PUT /reference/:reference_id
- PUT /disponibility/:disponibility_id

- DELETE /experience/:experience_id
- DELETE /reference/:reference_id
- DELETE /disponibility/:disponibility_id

### Public available information

- GET /offers
- GET /employers

### Advice

- POST /advice/worker/:worker_id
- POST /advice/employer/:employer_id
- PUT /advice/:advice_id
- DELETE /advice/:advice_id

### Candidacy

- GET /candidates

- POST /candidate
- DELETE /candidate
- PATCH /candidacy/:candidacy_id

## Mobile application models

![Landing page](https://raw.githubusercontent.com/Hunh0w/ExpoFront/main/screens/landing_page.png)
![Sign in & Sign up pages](https://raw.githubusercontent.com/Hunh0w/ExpoFront/main/screens/signin_signup_pages.png)
![Sign in & Sign up pages](https://raw.githubusercontent.com/Hunh0w/ExpoFront/main/screens/signup_pages.png)
![Home page](https://raw.githubusercontent.com/Hunh0w/ExpoFront/main/screens/home_page.png)
![Page Employées](https://raw.githubusercontent.com/Hunh0w/ExpoFront/main/screens/employers_page.png)
![Profile page](https://raw.githubusercontent.com/Hunh0w/ExpoFront/main/screens/profile_page.png)
![Search page](https://raw.githubusercontent.com/Hunh0w/ExpoFront/main/screens/search_offers_page.png)
![Message pages](https://raw.githubusercontent.com/Hunh0w/ExpoFront/main/screens/message_pages.png)

## Database design

```mermaid
erDiagram
    WORKER ||--o{ EXPERIENCE : has
    WORKER ||--o{ REFERENCE : has
    WORKER ||--o{ DISPONIBILITY : has
    WORKER ||--o{ WORKER_ADVICE : has
    WORKER ||--o{ EMPLOYER_ADVICE : write
    WORKER ||--o{ WORKER_CANDIDACY : submit
    WORKER_CANDIDACY o{--|| CANDIDACY : correspond_to
    
    WORKER {
        int worker_id
        string name
        string surname
        string email
        int number
        date birth_date
        int genre
        text bio
        address address
    }
    EXPERIENCE {
        int experience_id
        int worker_id
        enum job
        enum job_category
        date start_date
        date end_date
        string company_name
        address company_address
    }
    REFERENCE {
        int reference_id
        int worker_id
        string name
        string surname
        string company
        address address
        int number
        string email
    }
    DISPONIBILITY {
        int disponibility_id
        int worker_id
        date start_date
        date end_date
    }
    WORKER_ADVICE {
        int work_advice_id
        int worker_id
        int advisor_id
        int score
        text advice_text
    }
    EMPLOYER_ADVICE {  
        int employer_advice_id  
        int employer_id
        int advisor_id
        int score
        text advice_text
    }
    WORKER_CANDIDACY {  
        int worker_candidacy_id  
        int worker_id  
        int candidacy_id
        enum worker_candidacy_state 
    }
    CANDIDACY {
        int candidacy_id
        int offer_id
        enum candidacy_state
    }
```

## Author

By RAIMBAULT Adrien and FONT Vincent

