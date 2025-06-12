### Ewenli beat shop### 

# A project made within the framework of SAE203 by Alexander Drabysheuski #


<!-- Accessability -->
# Site IP adress: http://116.203.26.181:3000
# Domain name: www.ewenli-shop.uk 

**!The domain is temporarily inaccessible, since it is still in the process of registration.!**   


 <!-- Short description of the site -->

- It represents a store where you can listen musical beats of an individual author and purchase them. Buying a beat you acquire a license for it which permits you to use it for commercial purposes.


<!-- Used Technologies -->

### Front-end
- **Next.js** - client-related part of the site (React + SSR)
- **Tailwind CSS** - interface stylization
- **Fetch API** — HTTP-requests to API
- **Framer-motion** - animation framework
- **Three.js** - for liquid animation

### Back-end
- **Laravel** (PHP 8.3) - REST API
- **MYSQL** - database
- **Redis** - caching
- **Stripe API** - online payment system

### DevOps / Infrastructure
- **Docker** - containerization of MySQL DB and Redis
- **Nginx** - reverse proxy and routing
- **AWS S3** - remote storage of heavy audio files
- **PM2** - process manager


<!-- Project functionality -->

### The project supports:
- user registration and authentication
- listening and buying beats
- paying via Stripe Checkout
- caching with Redis
- storing audio files on AWS S3


<!-- Instruction for running of the project locally on PC  -->

**1 Install All Necessary Dependencies**

## Mac
- brew install docker docker-composer npm
## Window (Install WSL before using apt)
- sudo apt update
- sudo apt install unzip git npm docker.io docker-compose -y

**2 Initialize containerization**

# In terminal (of Visual Code for example) write the following command:
- docker-compose up -d --build

**3 Initialize Laravel**

# Open the directory next_app and write the next commands
- npm install
- npm run build
- npm run start

# Follow this localhost url and enjoy the site
- localhost:3000


# MIT License — free to use, copy, modify