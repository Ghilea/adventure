# Adventure - Dungeon Crawler with DND rules and a map editor
The project started as an assignment in the backend course, where the assignment was to use NodeJS to retrieve data from an Api. I branched out and started making a simple "DungeonCrawler" game. The very first version of the game were built in 3D with use of only CSS (requires a huge amount of resources from the computer). 

![alt text](https://github.com/Ghilea/adventure/blob/main/src/shared/assets/images/readme/menu.png?raw=true)

# Guide to run project

# Dependencies
    
# Sql server 
*   1. https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.9.3&os=windows&cpu=x86_64&pkg=msi&m=one
*   2. VSCode extension - SQl server client (mssql)

# Rust (Tauri)
*   1. https://tauri.app/v1/guides/getting-started/prerequisites/
*   2. https://www.rust-lang.org/tools/install

# env file
*   1. create a env file at root and add the information below

        VITE_DB_HOST = localhost
        VITE_DB_USER = root
        VITE_DB_PASS = "your own password to the sql server"
        VITE_DB_DATABASE = adventure
        VITE_PORT = 4000

# How to

*    1. Install Sql & Rust dependencies
*    2. Connect to sql server with "sql server client" extansion in VSCode
*    3. run script - "npm run createDB" which will create the needed database with tables and example data
*    4. in terminal, run script - "npm start" to get both server and game running in browser
*    5. When using Tauri, run script - "npm run server" to get the server running alone

# Tauri

*    1. run script - "npm run tauri dev" (for testing)
*    2. run script - "npm run tauri build" (build a exe file)