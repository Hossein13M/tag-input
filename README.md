
# Tag Input

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

## Working Demo:
You can find out the working demo [here](https://tag-input.hmousavi.dev/)


Light Theme             |  Dark Theme
:-------------------------:|:-------------------------:
![tag-input-light](https://user-images.githubusercontent.com/45146636/161312616-860e6595-ae64-4499-be81-197ae2d17e7b.png)  |  ![tag-input-dark](https://user-images.githubusercontent.com/45146636/161312606-c950aeba-e499-480c-a90a-65de1622683a.png)


## Mock Server:
This project is powered by [Mirage.JS](https://miragejs.com/). The mock server is mocking `GET`, `POST`, and `DELETE` methods for getting the suggestions list, deleting a tag, and adding a new tag. 


## Implementation Details
This project has been implemented using Angular. The main building blocks of the application are:



**Components**: Three different components are responsible for a separate task. None of the components are smart, and they are just for demonstrating the data using the `@Input` and `@Output` decorators. `Dependency Injection` has been heavily used in the project to get data from the mock server and manipulate the data between sibling components.



**Model**: This Project uses TypeScript, and I have emphasized using it correctly. I have tried to avoid using `any` to build a scalable and maintainable project.



**Services**: The project has three services: `mirage`, `share`, and `tag`. The `mirage.service.ts` is responsible for initializing the mock server and mocking the REST API verbs. The `share.service.ts` is for the data flow between the components using `BehaviorSubject`, and the `tag.service.ts` 's duty is to fetch data from the server (mock server)


## Tailwind CSS
The CSS library used for this project is the latest version of `tailwind CSS`. I have used it for two purposes:
1. For Handling Dark/Light them
2. And I have benefited from its excellent classes

**Customizing Tailwind CSS**
I have customized the library and added some colors to its default ones. You can find them all in the `tailwind.config.js` file.

## Husky
Husky is used in this project to use the `Git hooks`. There are some rules for committing messages, and I ensure that files will be prettified by prettier before committing. I have also implemented proper `esLint` rules for better coding. To learn more about Husky, you can read **my article** regarding it [here](https://medium.com/angular-in-depth/husky-6-lint-prettier-eslint-and-commitlint-for-javascript-project-d7174d44735a).

## Responsive
The tag-input project is responsive since tailwind is a `mobile-first` library.

## Development server

If you want to deploy it yourself, after cloning the repo and installing the dependencies (using `yarn install`) please
run `yarn run start` (equivalent to `ng serve`) for a dev server. Navigate to `http://localhost:4200/`.

## Further help

If you need any more details, please feel free to contact me. Check out [my portfolio](https://hmousavi.dev/) to get in touch with me.
