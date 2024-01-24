# TY's React Gallery

## Introduction

TY's React Gallery is a visually appealing web application showcasing a collection of cute baby animals. It emphasizes a sleek user interface and seamless user experience, leveraging Material UI for design enhancement.

## Setup Instructions

### Getting Started
- Ensure Node.js and npm are installed.
- Clone the repository and navigate to the project directory.

### Installation
- Run `npm install` to install all dependencies.
- Use Postico to create a `react-gallery` database.
- Execute SQL queries in `database.sql` to set up and seed the database.
- Start the server with `npm run server`.
- Launch the client-side application using `npm run client`.

### Adding Seed Data (already prepopulated with DALLE rendered baby animals)
- Add image files to `public/images`.
- Update the `INSERT` statement in `database.sql` for new images.

## Usage

### Base Functionality
- Gallery items can be liked and toggled between image and description.
- The application is structured into `App`, `GalleryList`, and `GalleryItem` components.

### Highlights of `App.js`
- Utilizes `useState` and `useEffect` hooks.
- Fetches gallery data from the server using Axios.
- Dynamically renders gallery items through `GalleryList`.

### Enhanced User Interface _(this was my one of my first experiences with Material UI and I love the experience!)_
- Focused on a clean and modern UI design using Material UI components.
- Custom styling for an engaging and responsive layout.

## Project Structure
This ends up being that I consider a fairly typical file infastructure. This project was meant to be an introduction to components. 
- components
- App
- GalleryList
- GalleryItem

## Technologies Used
- React
- Axios
- Material UI
- CSS
- Node.js
- Express
## Customizations and Design
- Integrated Material UI to enhance the user interface, focusing on a modern and intuitive design.
- Applied custom styling to ensure a cohesive look and feel, aligning with the theme of baby animal images.
- Implemented responsive design features, ensuring the gallery is accessible and visually appealing on various devices and screen sizes.

## Challenges and Learnings
- The integration of Material UI presented a learning curve, particularly in customizing components to fit the specific design requirements of the project.
- Faced challenges in ensuring responsive design, which were overcome by experimenting with various Material UI components and CSS techniques.
- Learned the importance of component structuring and state management in React to maintain a dynamic and interactive user interface.

## Contact Information
- [TY Domben - LinkedIn](https://www.linkedin.com/in/ty-domben-4613ba13a/)
