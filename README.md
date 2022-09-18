
# Matfly_Project

Rest api methods in nodejs:

```http
-- user Signup
-- user Login
-- get user
-- put user
-- delete user
-- get userInfo
-- put userInfo 
```


## Backend Architecure

![App Screenshot](https://github.com/ASHIK-S-NAIR/Matfly_Project/blob/master/Matfly_Project.png)


## API Reference

#### POST Signup

```http
  POST /api/v1/auth/signup
```
Takes five values and returns the stored user details.

```http
--- userName
--- name
--- email
--- password
```

#### POST login

```http
  POST /api/v1/auth/login
```
Takes two values and returns the token with user details.
```http
--- userName
--- password
```

#### GET user

```http
  GET /api/v1/user/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. Id of user to get user from DB |

Returns user details from user Database
```http
--- _id
--- userName
--- name
--- email
--- status
```

#### PUT user

```http
  PUT /api/v1/user/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. Id of user to find and update user from DB |

Takes values that need to updated
```http
--- userName
--- name
--- email
--- status
```

Returns success status code and message
```http
--- message: "Successfully updated the user"
```

#### DELETE user

```http
  DELETE /api/v1/user/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. Id of user to delete user from DB |

Returns success status code and message
```http
--- message: "Successfully deleted the user"
```

#### GET userInfo

```http
  GET /api/v1/userinfo/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. Id of user to get userInfo from DB |

Returns user Information of user from userInfo Database
```http
--- _id
--- userId
--- nickName
--- mobile
--- address
--- country
--- state
--- city
--- pinCode
--- profileImage
```

#### PUT userInfo

```http
  PUT /api/v1/userinfo/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. Id of user to find and update userInfo from DB |

Takes values that need to updated
```http
--- nickName
--- mobile
--- address
--- country
--- state
--- city
--- pinCode
--- profileImage
```

Returns success status code and message
```http
--- message: "Successfully updated the userInfo"
```

## Deployment

Project is deployed on Heroku. Database used is mongoDB Atlas. Cloudinary is used for storing images.
 Deployment Link : https://matfly-project.herokuapp.com




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URL`
 
`SECRET`

`CLOUDINARY_CLOUDNAME`

`CLOUDINARY_API_KEY`

`CLOUDINARY_API_SECRET`



