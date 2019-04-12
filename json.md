# Recipe

### Create Recipe

- **createRecipe**

  Client:

  ```javascript
  {
  "title": String,
  "owner": String,
  "blurb": String (id?),
  "difficulty": int,
  "time": int,
  "steps":[String],
  "ingredients": [String] //(?) may need to use array of ingredient objects for easier splitting on server side (units vs quantity) [["quantity": int, "units": String]]
  "photo": String
  }
  ```

  Server:

  ```javascript
  {
  "id": int (negative if error)
  }
  ```

### Read Recipe

- **getThumbnail**

  Client

  ```javascript
  {
    //some sort of query
  }
  ```

  Server

  ```javascript
  {
  "result":[
      "id": int,
      "title": String,
      "owner": String, //(id?)
      "blurb": String,
      "rating": int,
      "numRatings": int,
      "difficulty": int,
      "time": int,
      "photo": String
  ]
  }
  ```

- **getRecipe**

  Client

  ```javascript
  {
  "id": int
  }
  ```

  Server

  ```javascript
  {
  "id": int,
  "title": String,
  "owner": String,
  "blurb": String (id?),
  "rating": int,
  "numRatings": int,
  "difficulty": int,
  "time": int,
  "steps":[String],
  "ingredients": [String],
  "photo": String
  }
  ```

### Update Recipe

### Destroy Recipe

# Journal Entry

### Create Journal Entry

### Read Journal Entry

### Update Journal Entry ?¿

### Destroy Journal Entry

# Annotation

### Create Annotation

- **createAnnotation**

  Client:

  ```javascript
  {
  "type": int, //Ingredient or Step
  "description": String,
  "quantity": int,
  "units": String
  }
  ```

  Server:

  ```javascript
  {
  "id": int (negative if error)
  }
  ```

### Read Annotation

### Update Annotation

### Destroy Annotation

# User

### Create User

### Read User

### Update User

### Destroy User
