const express = require("express");
const showdown = require('showdown');
const converter = new showdown.Converter();

const app = express();
const PORT = process.env.PORT || 3000;

const SECRET = "APS3425";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        isAuth: false,
        data: ""
    });
});

app.post("/", (req, res) => {
    let secretkey = req.body.secretkey;

    let data = `# Roadmap to Become a Software Developer

## Overview
* Programming Language
* Data Structures
* Algorithms
* Text Editor
* Scripting Language: Bash (or) PowerShell
* Application Development
* Version Control
* Database Management System
  * Relational DBMS
  * Non-Relational DBMS
* Operating Systems
* System Design
  * Low Level System Design
    * Object Oriented Programming
    * UML Class Diagrams 
  * High Level System Design
* Design Patterns
* Good Practices
* **Projects**

 ### Programming Language
That language must be an Object Oriented Language.
Java: You chose hell waking up...
*No developer be like, waking up in the morning and "Let's code in Java"*
Python: It can be chosen only if you hate memory management (Which is a bad thing as a developer)
C++: A lot of good reasons to chooses this, memory management, the most important thing to know as someone who writes code. You will get to control the memory directly and that will be heaven.

### Data Structures
The data structures are important and as a developer you will use them in your work.

* Arrays
  * Linear Array
  * Circular Array
* Strings
* Matrix
* Linked List
  * Singly Linked List
  * Doubly Linked List
* Stack
* Queue
  * Linear Queue
  * Circuar Queue
  * Double Ended Queue
* Hash Tables (Hashing)
* Trees
  * Binary Search Trees
  * AVL Trees 
* Heap
  * Min Heap
  * Max Heap
* Priority Queue
* Graphs
* Tries

### Algorithms
* Searching
* Sorting
* Hashing
* Recursion
* Backtracking
* Graph Algorithms
* Dynamic Programming

### Text Editor

Options:
* Neo Vim
* Visual Studio Code
* Something else...

The better you know your text editor, the faster you can do your task. Select a text editor and make it a part of your body.

### Scripting Language

You should be able to talk to the computer using (Command Line Interface) CLI, and to automate and control the tasks, you need a scripting language. It's Bash.

Unless you crave to work only at Microsoft or you have a God-Tier in Bash, don't learn PowerShell

Developers mostly use Linux based OS in their work and they must use Bash. So make youslef familiar with a Linux based OS like, **Ubuntu, Arch Linux, etc...**

You can run Linux in two ways
Windows users
* Dual Boot
* Virtual Machine
* WSL (Windows Subsystem for Linux): Run Linux alongside Windows

***A lot of good tutorials are available for the above steps***

Mac Users
* Virtual Machine
  
*I actually don't know how else someone can run Linux on a Mac, cause Mac itself is build from Linux Kernal, so stick with Mac and use a Bash terminal.*

### Application Development

We have a lot of choices, but we going to stick to only two of them.

#### Mobile App Development: (Does is help with System Design??? Yes, but I can't take it.)

#### Web App Development:
Frontend | Backend
(Focus a lot on Backend, it will be helpful in the System Design)

**Frontend**
Whatever app you make, someone should be able to use your app. So we need this a little to work with backend.

Must: HTML, CSS **JavaScript**
Okay: ReactJS
(Note: With React Native you can build Mobile Apps, it's similar to ReactJS)

Okay, **JavaScript** is a God-Tier language, without which todays interweb would cease to exist. So it is a must.

**Backend**
This is extremely important, it's like the embryo of the System Design.

Basics: HTTP Protocol, how internet works?, CDN(Content Delivery Netowrk), DNS, IP Address, 

Version Control: Git and GitHub
DBMS: MySQL, MongoDB, Redis
API: RESTful (using them and creating them)
Server-Side Lanuguage: NodeJS or Python or Rust or C++ or Java or anything you want
Containerizing: Docker, Kubernetes
Authorization: Basic Auth, JWT, OAuth
Distributed Systems: Monolith, Microservices, Caching(In memory, Ditributed)

### Good Practices
* SOLID : Uncle Bob said "Single responsibility, Open-closed, Liskov Substitution, Interface Segregation, Dependency inversion" - It's related to OOP
* YAGNI : Ya Ain't Gonna Need It
* KISS : Keep It Simple, Silly!
* DRY : Don't Repeat Yourself
`;

    if(secretkey == SECRET) {
        res.render("index", {
            isAuth: true,
            data: converter.makeHtml(data)
        });
    } else {
        res.redirect("/");
    }
    
});

app.listen(PORT, () => {
    console.log(`[LOG] Listening on Port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
