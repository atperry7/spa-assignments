SPA Assignment 3
===

Controllers and Components
---


### Tasks


### Milestones
- [ ] Replicate existing functionality with AngularJS
  - [x] Basic gameplay
    - [x] When the primary button is clicked, the player's total is incremented by the amount shown on the button
    - [x] The total displayed in the header updates automatically
  - [ ] Multipliers
    - [x] Multiplier button added to UI
    - [x] Cost label added to UI
    - [ ] Disabled when cost exceeds player total
    - [x] When clicked and not disabled updates the primary button and player total accordingly
  - [ ] Autoclickers
    - [x] Autoclicker button added to UI
    - [x] Autoclicker total label added to UI
    - [x] Cost label added to UI
    - [ ] Disabled when cost exceeds player total
    - [ ] When clicked and not disabled updates the player and autoclicker totals and triggers a new autoclicker accordingly
  - [ ] Save Data
    - [ ] Automatically saves application state to local, session, or cookie storage
    - [ ] Automatically loads application state on page load if data exists
  - [ ] Reset
    - [ ] Reset button added to UI
    - [ ] Disabled when game state matches initial
    - [ ] When clicked and not disabled, resets game state to initial values and clears session, local, or cookie storage
- [ ] Multi-user support
  - [ ] Stored state is indexed by user
  - [ ] Logout button added to UI
  - [ ] If no user is logged in, only login form is visible
  - [ ] Upon login, the logged-in user's state is loaded into the game
  - [ ] Reset button functionality updated to only reset the current user's state
- [x] Scaling multiplier
  - [x] Multiplier amount increases as more multipliers are bought
- [x] Scaling costs
  - [x] Multiplier cost increases as more multipliers are bought
  - [x] Autoclicker cost increases as more autoclickers are bought
