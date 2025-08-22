## Installation & Running

```
git clone https://github.com/mahdijihad001/Advanced-To-Do-Application.git
cd Advanced-To-Do-Application
npm install

```
## Environment Setup

```

PORT=3500
DEV_ENVIRONMENT=development
MONGO_URI=mongodb+srv://AdvancedToDoDB:1ubCJCYmR8GAp15p@cluster0.bzhgo.mongodb.net/AdvanceTODO_DB?retryWrites=true&w=majority&appName=Cluster0
ACCESS_SECRET=583360c83f3bbdc118bd00ffccf0b71c6bcb66a02c72b648de4d6933ca726c2250e945176b5c435b7e2da3a2e3569bae79d28d90eacc2607e19883f92d37d589
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASS=Admin@121

```


# Start Server
npm run dev



## API Endpoints with Request & Response

## Create Task

Request (req) : 

```
POST /tasks
Content-Type: application/json 
```

```
{
    "title": "Optimize Performance",
    "description": "Improve frontend performance with code-splitting, lazy loading, and caching strategies.",
    "dueDate": "2025-09-25"
}
```

Response (res) 
```
{
    "success": true,
    "message": "Task Created Successfully.",
    "data": {
        "title": "Optimize Performance",
        "authore": "68a824297ca5de8ca053e8ab",
        "description": "Improve frontend performance with code-splitting, lazy loading, and caching strategies.",
        "status": "pending",
        "priority": "medium",
        "dueDate": "2025-09-25T00:00:00.000Z",
        "isComplite": false,
        "isDeleted": false,
        "_id": "68a826077ca5de8ca053e8ef",
        "createdAt": "2025-08-22T08:10:47.902Z",
        "updatedAt": "2025-08-22T08:10:47.902Z"
    }
}
```

## Get All Tasks

Request (req)
```
GET admin/tasks
```

Response (res)
```
{
    "success": true,
    "message": "All Task retrived successfully.",
    "meta": {
        "page": 1,
        "limit": 1,
        "totalDocument": 10,
        "totalPage": 10
    },
    "data": [
        {
            "_id": "68a826077ca5de8ca053e8ef",
            "title": "Optimize Performance",
            "authore": "68a824297ca5de8ca053e8ab",
            "description": "Improve frontend performance with code-splitting, lazy loading, and caching strategies.",
            "status": "pending",
            "priority": "medium",
            "dueDate": "2025-09-25T00:00:00.000Z",
            "isComplite": false,
            "isDeleted": false,
            "createdAt": "2025-08-22T08:10:47.902Z",
            "updatedAt": "2025-08-22T08:10:47.902Z"
        }
    ]
}
```
## Get Single Task

Request (req)
```
GET /tasks/:id
```

Response (res)

{
    "success": true,
    "message": "Task fetched successfully",
    "data": {
        "_id": "68a825bc7ca5de8ca053e8d1",
        "title": "Implement Task Filtering",
        "authore": {
            "_id": "68a824297ca5de8ca053e8ab",
            "email": "admin@gmail.com"
        },
        "description": "Add filtering and sorting functionality for tasks based on status, priority, and due date.",
        "status": "pending",
        "priority": "medium",
        "dueDate": "2025-09-06T00:00:00.000Z",
        "isComplite": false,
        "isDeleted": true,
        "createdAt": "2025-08-22T08:09:32.515Z",
        "updatedAt": "2025-08-22T08:11:31.283Z"
    }
}
## Update Task

Request (req)
```
PUT /tasks/:id
Content-Type: application/json
```
body
```
{
  "status" : "completed"
}

```
Response (res)
```
{
    "success": true,
    "message": "Task updated successfully",
    "data": {
        "_id": "68a825bc7ca5de8ca053e8d1",
        "title": "Implement Task Filtering",
        "authore": "68a824297ca5de8ca053e8ab",
        "description": "Add filtering and sorting functionality for tasks based on status, priority, and due date.",
        "status": "completed",
        "priority": "medium",
        "dueDate": "2025-09-06T00:00:00.000Z",
        "isComplite": false,
        "isDeleted": true,
        "createdAt": "2025-08-22T08:09:32.515Z",
        "updatedAt": "2025-08-22T09:07:09.655Z"
    }
}
```
##  Delete Task (Soft Delete)

Request (req)
```
POST /tasks/:id

```

Response (res)
```
{
    "success": true,
    "message": "Task soft deleted successfully",
    "data": {
        "_id": "68a825bc7ca5de8ca053e8d1",
        "title": "Implement Task Filtering",
        "authore": "68a824297ca5de8ca053e8ab",
        "description": "Add filtering and sorting functionality for tasks based on status, priority, and due date.",
        "status": "pending",
        "priority": "medium",
        "dueDate": "2025-09-06T00:00:00.000Z",
        "isComplite": false,
        "isDeleted": true,
        "createdAt": "2025-08-22T08:09:32.515Z",
        "updatedAt": "2025-08-22T08:11:31.283Z"
    }
}
```




