# Django and React Sample Application

This is an example of an application that uses Django Admin and Django Rest Framework (DRF) as back-end, and React with Typescript as front-end.

The React frontend simply displays a list of "Leads" that are retrieved from the back-end in Django.

## Pre-requisites

To run this sample application, you will need both Python 3, Node and npm installed in your local programming environment

1. [Instructions on how to install and setup a local programming environment for Python 3](https://www.digitalocean.com/community/tutorial_series/how-to-install-and-set-up-a-local-programming-environment-for-python-3)
2. [Instructions on how to install Node.js and create a local development environment](https://www.digitalocean.com/community/tutorial_series/how-to-install-node-js-and-create-a-local-development-environment)

## Installation

### 1. Installing Django and its dependencies and running the back-end

Open a new terminal window and go to the folder where you've cloned or extracted the files for this application. Type the following command:

```bash
pip install pipenv
```

Activate the environment:

```bash
pipenv shell
```

This command will initialize and activate a local virtual environment for you to install Django and its dependencies.
When it's done you should see a message like the one below

```bash
Creating a virtualenv for this project…
Installing setuptools, pip, wheel...done.

✔ Successfully created virtual environment!
```

Now let's install the dependencies as specified in your [Pipfile](Pipfile):

```bash
pipenv install
```

(Alternatively, you could install them specifically)

```bash
pipenv install django django-rest-framework whitenoise
```

Now we're almost ready to start the back-end of our application.
We have to do two more things.

First, run the database migrations...

```bash
python manage.py migrate
```

...and then create a superuser to be able to access the Admin interface

```bash
python manage.py createsuperuser
```

Now we can start our Django back-end. Run the command

```bash
python manage.py runserver
```

You will see a message like

```
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

Go to [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) and you will be presented with the login screen for the admin interface.

Enter the login/password you provided with `createsuperuser` and you'll be taken to the default admin page for Django.

### 2. Installing the npm dependencies and running the front-end

Now that our back-end is ready, let's install the dependencies for the React front-end and run it

Create a new terminal window, as you will want to keep the terminal for Django and its pipenv virtual environment.

In the new terminal, go to the project's directory and enter the `frontend` subdirectory and type

```bash
yarn install
```

and when it's done, run

```bash
yarn start
```

If everything goes well you will see a message like the one below. Go to [http://localhost:3000](http://localhost:3000)

```bash
Compiled successfully!

You can now view frontend on the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.167:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

You will see a page with React's default "Welcome" page, and also a string `{ leads: []}` which is the list of Leads in our database, which is currently empty. To wrap it up, let's add an item using the API provided from Django Rest Framework

### 3. Adding an item using the API

Our API offers a "GET" and a "POST" routes out-of-the-box

- `GET http://127.0.0.1:8000/api/lead/` to list all leads
- `POST http://127.0.0.1:8000/api/lead` to add a new lead

Let's use the POST route to add a lead, using curl (if you prefer you can use Postman or another API client)

```curl
curl -X POST \
  http://127.0.0.1:8000/api/lead/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
        "name": "John Doe",
        "email": "joedoe@email.com",
        "message": "Hello from a lead"
```

Now if you refresh the React page, you'll see the lead you've added there.

That's it for this sample application.

Happy hacking!
