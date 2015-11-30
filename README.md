JoS Proof of Concept
====================

The goal of this project is to put together an entirely browser-based, old school,
dungeon crawling experience. In order to do this, I intend to build the following
bits of functionality:

- [x] Terminal-like interface using only HTML/CSS/JS
- [x] Command processing
- [ ] Area and Room Containers
- [ ] Full movement commands
- [ ] Objects and Object Triggers/Events
- [ ] Object interaction commands
- [ ] Mobiles / NPCs
- [ ] Very basic combat
- [ ] Procedural dungeon generation

All of this functionality will be entirely client-side, at first. If the client
interface holds up and works well, eventually it will be powered by a Node.js
backend server and wired together via WebSockets to enable a true MUD-like
experience in the browser.