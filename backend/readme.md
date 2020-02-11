# Project 3: Linkeresting

## Project Description:

We will create an app to manage links/bookmarks. A user will login (login authentication only with post mvp) and see a page of their collections. User can open a collection to view all the links or add a new collection. Inside the collection the user can add delete or edit a link. A new link will have a name and a link address. Post MVP add tags and tag search functionality.

User Stories:
As an everyday user I want to group my bookmarks so I can be more organized.
As a designer I want to save multiple links so I can review to get ideas, but not overload my bookmarks.

We used class based components on the top level components so that we could more easily persist state when navigating to and from components. We used functional components on the other Components to keep the components small.

## Project Links

- [Linkteresting](https://linkteresting.netlify.com/)
- [API-Links](https://list-links.herokuapp.com/api/link)
- [API-Collections](https://list-links.herokuapp.com/api/collection)
- [API-User](https://list-links.herokuapp.com/api/user)

## Wireframes

- [Architecture](https://drive.google.com/open?id=1zC-cR2DbKCw5VnstRQovnChTutAAF_zpSqdtvIx9wiQ)
- [Landing Page](https://drive.google.com/open?id=1m0CMqlXUoUda1lpd-76MzYYrcVlTPdDRrELhq-Az4TQ)
- [UserHome (New User) Page](https://drive.google.com/open?id=1LtstfmYZrgakQay9rjemwya3ooOqyAgn9auc94jC8Uk)
- [UserHome (Established User) Page](https://docs.google.com/drawings/d/1vibjhKRvmdFeZTMEsHVE0dYaV2uQqtv1YufVO-n02wA/edit)
- [Collections Page](https://drive.google.com/open?id=1eV4Ex961YCHtG3mqlprDmJPN-UFwUOauylE2q3IeAgw)

<!-- original -->

## Designs:

![Login](https://i.imgur.com/UNz2NOi.jpg?1)
![UserHome](https://i.imgur.com/TPLvOgZ.jpg?1)
![CollectionDetails](https://i.imgur.com/oTOdkJ1.jpg?1)
![AddLink](https://i.imgur.com/eY6SMxE.jpg?1)
![AddCollection](https://i.imgur.com/kfhjsG2.png?1)

## MVP/ Post-MVP

### MVP:

- Landing Page - Login with just your name.
- Users can create collections of links
- Each collection can be named and have a description
- Can Delete Collection
- Each Link will have a name and an outside link
- Can add edit and delete Links

### Post-MVP:

- Each collection will show a picture from one of the links or be colored.
- Login/User Validation
- Admin page to manage user accounts
- Sharability (sharing collections with other users)

## Structure:

### React Routes:

- Login
- User-Home
- Collection-details
- Add Collection
- Delete Collection
- Add link
- Edit link
- Delete Link

### Express routes:

- Create User
- Get User Collections
- Get One Collection
- Get One Link
- Post Link
- Post Collection
- Edit Collection
- Edit Link
- Delete Link
- Delete Collection
- Delete User

### React Components:

- Header
- LoginPage
- Home button <Link>
- UserHomePage - Add Collection - CollectionTile<Link> - Delete Collection
- Collection - Links - Add Link - Edit Link - Delete Link
- Links

## Components

| Component  |                          Description                          |
| ---------- | :-----------------------------------------------------------: |
| App        | This will make the initial data pull and include React Router |
| Header     |          This will render the header for the page         |
| Login      |        User can login to account to store their links         |
| User Home  |              User's full library of collections               |
| Collection |      User's individual library of a categorized collection      |
| Add-Link        |     User has ability to add new links to each collection      |
| Edit-Link       |     User has ability to edit links within each collection     |
| Delete-Link     |    User has ability to delete links within each collection    |
| Add-Collection        |     User has ability to add new a new collection      |
| Delete-Collection     |    User has ability to delete a collection    |

## Time Frames

| Component                       | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Planning & Wireframing          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Build file structure            |    H     |      2hrs       |      2hrs      |     2hrs     |
| Controllers/ Routes             |    H     |      4hrs       |      4hrs       |     4hrs     |
| Models                          |    H     |      2hrs       |      1hrs       |     1hrs     |
| Seeding                         |    H     |      2hrs       |      3hrs       |     3hrs     |
| Backend Tests                   |    H     |      5hrs       |      8hrs       |     8hrs     |
| Login Component                 |    H     |      4hrs       |      2hrs       |     2hrs     |
| Edit/Add/Delete Components      |    H     |      8hrs       |      10hrs       |     10hrs   |
| UserHome/Collections Components |    H     |      4hrs       |      3hrs       |     3hrs     |
| App Component                   |    H     |      2hrs       |      2hrs       |     2hrs     |
| Header Component                |    H     |      1hrs       |      1hrs       |     1hrs     |
| Frontend Tests                  |    H     |      3hrs       |      4hrs       |     4hrs     |
| Working with API                |    H     |      4hrs       |      4hrs       |     4hrs     |
| Styling                         |    H     |      7hrs       |      10hrs       |     10hrs   |
| Documentation                   |    H     |      3hrs       |      3hrs       |     3hrs     |
| Total                           |    H     |     54hrs      |      60hrs       |     60hrs    |

## Additional Libraries

- Bootstrap

## Issues and Resolutions

1 Persitting data through navigation. - used State on the top level with getter methods to retrieve data on page load
2 Sending data through links - send methods on top level, pass props through links from other components - pass props in to links like so-
```<Route path="/add-link" render={props => <AddLink refreshLinks={this.refreshLinks} state={props} />} />```
3 Cors error on post and put - clean up variables, nest .thens properly, use value in forms instead of defaultValue

## Code Snippet

