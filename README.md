# Loopclub
Loopclub Job Assignment.


## Clone Repositoty

```
git clone https://github.com/Uday032/Loopclub.git
```

## Backend

```
1. cd Loopclub
2. cd backend
3. Mac: virtualvenv env
4. Mac: source env/bin/activate
5. pip install -r requirements.txt
6. python manage.py makemigrations
7. python manage.py migrate
8. Create a superuser by following command: python manage.py createsuperuser 
9. python manage.py runserver
```

Go to http://localhost:8000/admin and, the superuser credentials to access the database.

## Frontend

Open Another Terminal.
```
1. Go to Loopclub Directory
2. cd frontend
3. npm install
4. npm start
```
###

Go to http://localhost:3000
Go to http://localhost:3000/subscribed to see a table of all subscribed emails.