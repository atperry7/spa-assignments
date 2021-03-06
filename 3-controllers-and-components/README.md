SPA Assignment 3
===

Controllers and Components
---


### Tasks


### Milestones
- [x] Replicate existing functionality with AngularJS
  - [x] Basic gameplay
    - [x] When the primary button is clicked, the player's total is incremented by the amount shown on the button
    - [x] The total displayed in the header updates automatically
  - [x] Multipliers
    - [x] Multiplier button added to UI
    - [x] Cost label added to UI
    - [x] Disabled when cost exceeds player total
    - [x] When clicked and not disabled updates the primary button and player total accordingly
  - [x] Autoclickers
    - [x] Autoclicker button added to UI
    - [x] Autoclicker total label added to UI
    - [x] Cost label added to UI
    - [x] Disabled when cost exceeds player total
    - [x] When clicked and not disabled updates the player and autoclicker totals and triggers a new autoclicker accordingly
  - [x] Save Data
    - [x] Automatically saves application state to local, session, or cookie storage
    - [x] Automatically loads application state on page load if data exists
  - [x] Reset
    - [x] Reset button added to UI
    - [x] Disabled when game state matches initial
    - [x] When clicked and not disabled, resets game state to initial values and clears session, local, or cookie storage
- [x] Multi-user support
  - [x] Stored state is indexed by user
  - [x] Logout button added to UI
  - [x] If no user is logged in, only login form is visible
  - [x] Upon login, the logged-in user's state is loaded into the game
  - [x] Reset button functionality updated to only reset the current user's state
- [x] Scaling multiplier
  - [x] Multiplier amount increases as more multipliers are bought
- [x] Scaling costs
  - [x] Multiplier cost increases as more multipliers are bought
  - [x] Autoclicker cost increases as more autoclickers are bought
