

##### Provide an example of using union and intersection types in TypeScript.

**Answer:**
```ts 
// Union

type idType = string | number;
// Intersection
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type Staff = Person & Employee;

```


#####  What is the use of the keyof keyword in TypeScript? Provide an example.


**Answer:**

keyof হলো Typescript এর type operator |
এটি ব্যবহার করা হয় একটি object type-এর সব property  এর names এর 

union type তৈরি করতে।

**Example:**
```ts 

type Student={
  name: string;
  age: number;   
}
type Keys = keyof Student;
```