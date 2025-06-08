# 🧠 VS Lite — Visual Workflow Builder

This project is built as part of the VectorShift's Frontend Technical Assessment.

![image](https://github.com/user-attachments/assets/3a98e421-40d4-4c9b-a99e-86408e6369f6)



# Tech Stack
| Layer       | Stack                                            |
| ----------- | ------------------------------------------------ |
| 🧩 Frontend | React, Zustand, React Flow                       |
| 🎨 Styling  | Tailwind CSS                                     |
| ⚡ Build     | Vite                                             |
| 💬 Backend  | Python, FastAPI                                  |
| 📦 State    | Zustand (with localStorage persistence) |

## PART 1 NODE ABSTRACTION

I've created the Abstracted Basenode in the `src/components/BaseNode.jsx` using which we can create any kind of nodes and it'll be in unified design and functionality with the rest of nodes.

Now, we don't need to copy any nodes or write the same configuration, BaseNode effectively handles all cases of possible nodes.

I've also Created 5 New Nodes using the abstraction.

![image](https://github.com/user-attachments/assets/b6afbd7b-21e9-48d0-ab97-5be089138f93)


As mentioned in the assigment, I've not focused much on the internal working of these nodes, but rather on building highly flexible, reusable and modular abstraction for these nodes.

# PART 2 STYLING

The codebase initally had no styling, I myself have tried to keep the deisgn minimalistic as per the usecase of this product, but I've added several UI/UX interactive enhancement here and there..

![image ](https://github.com/user-attachments/assets/ad6f675a-500e-4abb-9bb1-c21c2d3e92c5)            ![image](https://github.com/user-attachments/assets/a07c1d42-2394-4ad7-a001-cd814e2180da)
![Screenshot 2025-06-08 110326](https://github.com/user-attachments/assets/4dc3dc26-9d48-405f-a1c6-da65c6f00b89)          ![image](https://github.com/user-attachments/assets/a858d65e-da5b-453b-a088-dd7c489755d0)


# PART 3 TEXT NODE LOGIC

It was furter divided into two parts, the first one was to dynamically change the height and widht of the text area as the user enters more contnet.


![image](https://github.com/user-attachments/assets/f865706f-d976-498f-a8ac-b08b43193919)   ![image](https://github.com/user-attachments/assets/0735d466-fa26-4758-8f26-7c6f733bd60a)

The second part was to dynamically identify variables from the text if they were written within {{variable}} and render input handlers on the left based on those variables.

![image](https://github.com/user-attachments/assets/8f929b63-41b8-42f9-b8ac-439465e29b8f)


# PART 4 BACKEND INTEGRATION

In the last part it was asked to connect the frontend to the backend in python FastAPI and parse the pipeline, and then the backed should do the processing and count the number of nodes and the number of edges 
and check whether the pipeline makes a DAG (Directed Acyclic Graph) and return an alert/toast to the frontend that we can render on the UI.

![image](https://github.com/user-attachments/assets/d8ae40ff-9634-47a3-976d-11e0614b3e6c)

![image](https://github.com/user-attachments/assets/237d77b5-a110-4ffa-94d2-144acebb09b7)

## Important
- I've migrated this project from CRA to VITE.
- To run this project, simply run `npm i` and then `npm run dev` for the frontend.
- To start the backend, run `python -m uvicorn main:app --reload` make sure to activate your python virtual environment and install uvicorn before running this.
## END

So that's my submission for the assessment, I hope you like the project and functionalities. I had great fun building this, Thank you VectorShift for giving me the opportunity to work on this assignment.


by: Vasu Singh <br />
[Github](https://github.com/Vasu1303) <br/>
[Linkedin](https://www.linkedin.com/in/vasusingh1305/)

















