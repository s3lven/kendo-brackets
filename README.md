
# Taikai

A tournament bracket tracker web application edsigned for managing and viewing live updates of various tournaments in real-time. Users can create and manage different types of brackets, track progress, and share brackets with others through a unique URL.



## Current Features

 **1. Bracket Creation**
-  **Bracket Builder**: An interactive bracket creation tool that supports multiple tournament formats:
    - Single Elimination (more types coming soon)
- **Dynamic Participant Management**: Add, remove, shuffle, and reorder participants effortlessly.
- **Scoring Updates**: Update match scores and track the progression of the bracket

**2. Tournament Creation**
- **Bracket Management**: Manage your tournament through a list of bracket tournaments.

## Roadmap

**User Management**
- **Sign Up & Log in**: Create an account and log in to manage their tournament brackets.
- **Profile and Stats Page**: Track stats from all tournaments you've participated in.

**Bracket Creation**
-  **Bracket Builder**: An interactive bracket creation tool that supports multiple tournament formats:
    - Double Elimination
    - Group Stage
    - Round Robin
- **Save Changes**: Save match info and the state of the bracket upon score submission, resetting matches, and changing bracket status
- **More Bracket Tabs**: Add helpful tutorials/terminology dialogs for first time runners.
- **Add Bulk Participants**: Using a spreadsheet or text field, mass add participants to a bracket.
- **Bracket Information**: Add various optional information fields to the brackets
    - Location (Court Numbers/Letters) for each match

**Tournament Creation**
- **Create, Duplicate, Remove, and Rename Brackets**

**Live Bracket Updates**
- **Real-Time Updates**: Brackets can be shared through a URL, allowing others to follow along as matches are completed.

**Explore Page**: Find upcoming, active, or past tournaments/brackets

**Dark Mode**

## Tech Stack and Tools

**Front-End**: Next.js (Typescript), Zustand (with Immer Middleware), Radix UI, TailwindCSS

