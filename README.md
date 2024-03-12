
# ASYNCHRONOUS FUNCTION
* It means a function that can happen in the background  while the rest of your code executes. 
* There are some functions inside a program that are going to take some time to complete
  1. fetching data from server
  2. Reading from file
  3. Database queries
* Instead of waiting for a task to complete, this function allows program to continue running other tasks while it executes its operation in the background.

**HOW TO HANDLE ASYNCHRONOUS FUNCTION?**
* We can either use 'promise' or 'async/await' method to handle asynchronous function.
* Both are features in JS that makes asynchronous code easier to write and understand
* async/await don't replace promises but rather provide a cleaner syntax for dealing with Asynchronous function
* I have summarized the differences in the table below:

  ![image](https://github.com/asyikin22/Asynchronous-JS-API/assets/148519441/980bb2dc-f391-4dfd-bb3e-405d20e4c5b1)

# CORS - Cross-Origin Resource Sharing
* It is a security feature implemented by web browsers to ensure that scripts running on one website are only allowed to access resources from a different website if that website explicitly allows it. 
* It restricts access to resources across different origins unless explicitly permitted by the server hosting those resource
* In simple term, we use CORS to make fetching work in the case where web browsers implement the said security feature.
* Sources: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 
# USING FETCH API

**Objective**: Use fetch with Giphy API to display a random gif on a webpage <br>
* These codes fetch a GIF from Giphy API based on sepcific search term
* Then it parses the response as JSON
* And finally it updates the 'src' attribute of the <img> element to display the retrieved GIF on your webpage.
* New GIF will be generated each time you refresh the page. 

**Giphy**: https://giphy.com/

**HTML**
1. Create a blank image in HTML
2. Insert script element inside body

**CSS**
* Style it hwoever you like.

**JavaScript**
1. Retrieve <img> element in HTML using document.querySelector and assign it to variable 'img'
2. Initiate a fetch request to the specified URL with parameters 'api_key' and 's'(search term).
3. {mode: 'cors' option specifies that the request shouuld use CORS (Cross-Origin Resource Sharing) mode.
4. Use '.then()' to handle response asynchronously. When response is received, it's parsed to arrow function as 'json'. This will convert raw response data into a JS object
5. Once the response has been parsed as JSON, the second '.then() is executed.
   * It assigns the URL of the original GIF image to the 'src' attribute of the <img> element (img.src).
   * This will update the <img> element to display the GIF retrieved from the Giphy API
  
**NOTE**:
* I did not attach catch method to the promise chain to catch any errors that might occurs in the '.then()' blocks.

# Promise vs Async/Await
* Initially I used Promise method to handle asynchronous function
* Alternatively, I can also use async/await method to handle the function and it will return the same result.
* However for this one, I used error handling 'try-catch' inside the function as the program failed to fetch gif without it when I tried to do it initially.
* I have also uploaded a new file that demonstrates its use in JavaScript.

![image](https://github.com/asyikin22/Asynchronous-JS-API/assets/148519441/d0b5302b-bb14-4dc7-9850-acc2902a607c)


