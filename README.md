# plexx
🛸 plexx is a classic platform-style game, built with Phaser2 and React.

## Table of contents
  * [About](#about)
  * [Installation](#installation)  
  * [How to Use](#how-to)
  * [System Requirements](#requirements)
  * [Local Installation](#installation)
    * [Install With a Virtual Machine](#vm-installation)
    * [Install Without a Virtual Machine](#regular-installation)
  * [Technologies](#technologies)
  * [Team](#team)


## <a name="about"></a> About
The year is 1943, Colonel Sergei Volkov, part of the secret, yet inconspicous Agency for Internal Affairs (AVD) has been briefed and sent on a mission to the Arctic Circle as reconnaisance to surveil an illusive division of Nazi scientists known only as A.G.A.R.T.H.A.

After several days, Colonel Volkov had found no trace of a Nazi presence, but during the expedition a heavy snow squall separated Volkov and his team. Battling thru the snow, Volkov found his way to shelter in an ice cave. Soon, Volkov realized it was more than just a cave. It was then that everything changed...

## <a name="how-to"></a> How to Play
Navigate Sergei thru each level, picking up coins and powerups along the way to help him in his mission. Watch out for enemies that may be hiding or that stand in Serg's way.

#### Controls:
    - `W` Jump/Up
    - `A` Left
    - `D` Right

    - `←` Shoot Left
    - `→` Shoot Right
    - `↑` Shoot Up
    

## <a name="requirements"></a> System Requirements
- Terminal, Command Prompt, Bash, or the command line application of your choice
- [Docker](https://www.docker.com/)

## <a name="installation"></a> Local Installation
### <a name="vm-installation"></a> Install With a Virtual Machine
There is a Vagrant Ubuntu Shell provided with this repo. For more information on Vagrant click [here](https://www.vagrantup.com/intro/getting-started/).
- Clone or download the repository
- Open the root of the repository in your terminal
- Run the `yarn start` command
- Spin up the virtual machine via `vagrant up`
- Run the `vagrant ssh` command
- Navigate to the www folder by typing `cd /var/www`
- Next, launch Docker with `docker-compose up`
- Finally, navigate to your browser and go to http://192.168.20.20:3000/

### <a name="regular-installation"></a> Install Without a Virtual Machine
- Clone or download the repository
- Open the root of the repository in your terminal
- Run the `yarn install` command
- Launch Docker with `docker-compose up`
- Navigate to your browser and go to http://192.168.20.20:3000/

## <a name="technologies"></a> Technologies
- Phaser2
- React
- SQL
- Docker
- Materialize

## <a name="team"></a> Team
- [Scott Sawyer - Team Lead/Game Design](https://github.com/scottasawyer)
- [Greg Row - Game Mechanics](https://github.com/rowgregory)
- [Bobby "Blooby" Hoffman - Full Stack Developer](https://github.com/)
- [Rick Knowlton - Front End Developer/Concept Design](https://github.com/rickknowlton)


