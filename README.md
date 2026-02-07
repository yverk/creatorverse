WEB103 Prework - Creatorverse
Submitted by: Yaroslav Verkhovod

About this web app: A full-stack web application built with React and Supabase that allows users to curate a list of their favorite content creators with full CRUD (Create, Read, Update, Delete) functionality.

Time spent: 45 hours

Required Features
The following required functionality is completed:

[x] A logical component structure in React is used to create the frontend of the app

[x] At least five content creators are displayed on the homepage of the app

[x] Each content creator item includes their name, a link to their channel/page, and a short description of their content

[x] API calls use the async/await design pattern via Axios or fetch()

[x] Clicking on a content creator item takes the user to their details page, which includes their name, url, and description

[x] Each content creator has their own unique URL

[x] The user can edit a content creator to change their name, url, or description

[x] The user can delete a content creator

[x] The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage

The following optional features are implemented:

[x] Picocss is used to style HTML elements

[x] The content creator items are displayed in a creative format, like cards instead of a list

[x] An image of each content creator is shown on their content creator card

Video Walkthrough
Here's a walkthrough of implemented required features:

<img src='./src/assets/CreateVerse.mp4' title='Video Walkthrough' width='' alt='Video Walkthrough' />


Notes
One of the main challenges was resolving initial database connection issues related to Row Level Security (RLS) and ensuring the data types in Supabase matched the frontend expectations. I also spent time fine-tuning the CSS Grid to ensure the layout remained centered and professional across different screen sizes.

License
Copyright [2026] [Yaroslav Verkhovod]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.