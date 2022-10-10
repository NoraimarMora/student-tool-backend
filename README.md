# Student Tool API

# Career Endpoints

## Add Career
#### Endpoint

* **URL**: **https://<base_url>/api/v1/career**
* **Method**: POST
* **Content Type**: application/json
* **Body**: the body data use the following JSON:

```
{
    "name": <string>
}
```


# Courses Enpoints

## Add Course
#### Endpoint

* **URL**: **https://<base_url>/api/v1/course**
* **Method**: POST
* **Content Type**: application/json
* **Body**: the body data use the following JSON:

```
{
    "code": <string>,
    "name": <string>,
    "uc": <number>,
    "tax": <string>,
    "semester": <number>,
    "career": <career_id>,
    "pre_req": {
        "uc_min": <number>,
        "courses": [<career_code>]
    }
}
```

## Get Courses
#### Endpoint

* **URL**: **https://<base_url>/api/v1/courses**
* **Method**: GET
* **Content Type**: application/json

The response of this endpoint is:

```
{
    "courses": [{
        "id": "uq6xeZZq2bwDoDSylrrB",
        "code": "INFO-00038",
        "name": "Logica Computacional",
        "uc": 5,
        "tax": "TA-4",
        "semester": 2,
        "career": "LY4ReQleWEMiKtSKJ5J0",
        "pre_req": {
            "courses": [
                "FING-00018",
                "INFO-00020"
            ],
            "uc_min": 0
        }
    }],
    "count": <number>
}
```

## Get Suggested Courses
#### Endpoint

* **URL**: **https://<base_url>/api/v1/courses/suggested**
* **Method**: POST
* **Content Type**: application/json
* **Body**: the body data use the following JSON:

```
{
    "uc": <number>,
    "courses": [<career_code>]
}
```

The response of this endpoint is:

```
{
    "courses": [{
        "id": "uq6xeZZq2bwDoDSylrrB",
        "code": "INFO-00038",
        "name": "Logica Computacional",
        "uc": 5,
        "tax": "TA-4",
        "semester": 2,
        "career": "LY4ReQleWEMiKtSKJ5J0",
        "pre_req": {
            "courses": [
                "FING-00018",
                "INFO-00020"
            ],
            "uc_min": 0
        }
    }],
    "count": <number>
}
```

# Users Endpoints

## Add User
#### Endpoint

* **URL**: **https://<base_url>/api/v1/user**
* **Method**: POST
* **Content Type**: application/json
* **Body**: the body data use the following JSON:

```
{
    "name": <string>,
    "lastname": <string>,
    "dni": <string>,
    "email": <string>,
    "password": <string>,
    "career": <career_id>,
    "uc": <number>,
    "courses": [<career_code>]
}
```
