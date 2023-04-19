# WEB - Masai Assignment Dashboard

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit Storing Data is LS - 1 marks.
 ✅ Check the LS Data after mutiple form submits - 1 marks.
 ✅ By Default only the JS101 Cards are showing in appropriate Sprint Column  - 3 marks.
 ✅ Check the flex value and the responsiveness of the assignment Columns  - 1 marks.
 ✅ Check the board after changing the Sprint  - 3 marks.
 ✅ Change the course and check the board - 3 mark.
 ✅ Check the deleting - 2 marks.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- dashboard.html
- Scripts/index.js
- Scripts/dashboard.js
- Styles(This is a Folder. Create all your CSS files inside this folder)
- Please ignore all the other files/folders except the above-mentioned ones.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

#### Use the template provided below to write your code (Mandatory)

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem Statement:-

- Build a Assignment Dashboard App where you can add all your assignments.
- Your application has a Navbar that contains 2 tabs (this is already in the template no need to build it).
  1. Home(index.html)
  2. Dashboard(dashboard.html)

[image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-09/Screenshot%202023-03-09%20at%204.40.28%20PM_788860.png)

### Home Page (index.html):-

- This page contains a form with input boxes and one select tag and a textarea having the following fields (this is already in the template no need to build).

1. Name (Input-Type-text)
2. Description (Textarea)
3. Type (Select)
4. Course (Select)
5. Sprint (Select)
6. Schedule (Input-Type-date)

- On clicking on form submit (form submit event) you should store todo data in your local storage with key `assignments`.

`Hint : localStorage.setItem("assignments",JSON.stringify)`

- Refer to this image for better understanding:- ![form.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-09/Screenshot%202023-03-09%20at%204.40.06%20PM_376864.png)

- Refer to this doc to understand how to work with textarea - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

### Dashboard Page (dashboard.html):-

- On this page all the data from the `assignments` will be shown in a board.
- In your html file there is a div with a class `assignments`.
- Inside that div we have 4 divs with the following ids:-

  1. sprint-1
  2. sprint-2
  3. sprint-3
  4. sprint-4

- There will also be a select tag with id:- `course`. By default the value of the select tag will be `JS101`.

- Now Show the Meets in form of small cards based on the select tag value. So by default show only those cards that has course as `JS101`.

- Now append them to the div whick matches with it's sprint value. So inside div with id `sprint-1` append the cards which has week value as `sprint-1`.

![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-09/Screenshot%202023-03-09%20at%204.39.22%20PM_536143.png)

- When Someone changes the course select tags value then the new selected course should show up. Like if the new selected value is `WEB101` then show only those cards that has course value as `WEB101`.

![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-09/Screenshot%202023-03-09%20at%204.39.43%20PM_848492.png)

- Below is the format for the assignment cards.

```
<div>
 <p>name</p>
 <p>desc</p>
 <p>type</p>
 <p>course</p>
 <p>schedule</p>
 <p>sprint</p>
 <select>
    <option value="sprint-1">sprint-1</option>
    <option value="sprint-2">sprint-2</option>
    <option value="sprint-3">sprint-3</option>
    <option value="sprint-4">sprint-4</option>
  </select>
<button>Delete</button>
</div>
```

- If the user changes the select tag value of any card, the localStorage and DOM should be updated.

- Use flex in the div with class `assignments` to create this layout. Also when the screensize is less than or equal to 900px the flex-direction should change to column.

- Each card also has a button with the text `Delete`. Clicking on the button that perticular card should be deleted both from DOM and from localStoarge.

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
