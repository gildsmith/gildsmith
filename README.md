## 🪙 Gildsmith E-commerce Platform

Hey there! 👋 Meet Gildsmith, your new go-to modular e-commerce
platform that’s all about making things simple and sweet. Designed
to kick complexity to the curb, we're here to give you a straightforward,
well-documented solution that flexes to fit any project size—big or small.

### 💗 Why You'll Love Gildsmith

- **Modular**: Our modular setup means you can switch out parts faster
  than outfit changes at a fashion show. No spaghetti code mess here!
- **Headless**: Perfect for teams who never want to step on each other’s toes.
- **Developers First**: Built by devs for devs, we know the pain points of 
  e-commerce apps and ditched them. Gildsmith is all about smooth setups, 
  clear docs, and zero fuss.

### 🚀 Get Started

Ready to roll? Just run these commands and you’ll be up in no time:

```bash
# Get the code
git clone git@github.com:gildsmith/gildsmith.git

# Jump into your new shop
cd gildsmith

# Install dependencies
composer install
npm install

# Sort out the config
cp .env.example .env
php artisan key:generate

# Fire it up!
./vendor/bin/sail up -d
./vendor/bin/sail npm run dev
```

### Docs or Didn't Happen

[Dive into our docs](https://github.com/gildsmith/gildsmith/wiki) for all
the deets on how to tweak, twist, and tailor your Gildsmith setup. Whether
you're customizing modules or just browsing through, everything is laid
out easy-peasy.

### 🤝 Contribution

We welcome contributions from everyone! If you have suggestions for how we could
improve, or if you've found an issue and would like to report a bug, please contribute
to the main repository at [`gildsmith/gildsmith`](https://github.com/gildsmith/gildsmith)
rather than this one. This helps us keep our efforts focused and organized.

### 🧪 Alpha Stage Disclaimer

Please note that Gildsmith is currently in the Alpha stage of development.
As such, the core packages are still under active development and may not be
fully functional. We recommend waiting for the first stable release before
using this API in a production environment.
