# Open-Source Portfolio

Welcome to the **open-source-portfolio** GitHub repository! This project is designed to provide developers with a fully functional full-stack portfolio template featuring an admin login. With this repository, developers can easily set up their own portfolio websites, customize them to their liking, and manage their portfolio content through a user-friendly UI.

## Overview

This project is aimed at developers who want to showcase their work in a professional and customizable manner. By utilizing this repository, developers can create their portfolio websites without having to start from scratch. The portfolio includes features such as:

- Admin login functionality
- User-friendly interface for managing portfolio content
- Customizable design and layout
- Full-stack capabilities

## Getting Started

To get started with using this portfolio template, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/MeerUzairWasHere/open-source-portfolio.git
   ```

2. **Install Dependencies**: Navigate into the project directory and install the necessary dependencies for both the frontend and backend:

   ```bash
   cd open-source-portfolio
   npm install
   ```

3. **Configure Environment Variables**: Set up your environment variables for the backend. You can do this by creating a `.env` file in the root directory of the project and adding the necessary variables. Refer to the `.env` file for guidance.

- .env example template

```bash
DATABASE_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_UPLOAD_PRESET=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

ADMIN_USER_ID=
```

Before running the application, you need to set up environment variables and configure external services. Follow these steps:

1. **MongoDB Configuration**:

   - Go to [MongoDB](https://www.mongodb.com/) and create a new database.
   - Obtain the connection URL for your database and enclose it with double quotes.
   - Add the connection URL to the `.env` file under the `DATABASE_URL` variable like so:

     ```
     DATABASE_URL="mongodb+srv://your-db-url"
     ```

2. **Cloudinary Configuration**:

   - Sign up or login to [Cloudinary](https://cloudinary.com/).
   - Get your cloud name from Cloudinary and add it to the `.env` file under the `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` variable.
   - Go to Cloudinary settings and navigate to Upload presets.
   - Create a new upload preset and specify the folder name where you want to save your images (e.g., "My-portfolio").
   - Save the new preset and add its name to the `.env` file under the `NEXT_PUBLIC_UPLOAD_PRESET` variable.

3. **Clerk Configuration**:

   - Sign up or sign in to [Clerk](https://clerk.com/).
   - Create a new application with your desired name (e.g., "Portfolio").
   - Keep Google login enabled.
   - Obtain the Clerk publishable key and secret key.
   - Add the keys to the `.env` file under the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` variables.
   - Additionally, add the following Clerk URLs to the `.env` file:

     ```
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
     NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
     ```

4. **Admin User Configuration**:

   - After setting up Clerk, login with your account credentials.
   - Create a new user account that you want to designate as the admin.
   - Go to Clerk settings and navigate to the Users section.
   - Copy the user ID of the admin account.
   - Add the user ID to the `.env` file under the `ADMIN_USER_ID` variable.

5. **Change title,description,favicon**:
   To set up the title, description, and favicon/logo:

6. Open `site.config.ts`.
7. Update the `name` field with your name followed by " - Portfolio" for the title.
8. Adjust the `description` field with your description.
9. Specify the path to your logo image in the `logo` object's `url` and `href` properties.
10. Ensure your favicon or logo image is placed in the `public` folder.

These changes will reflect the title, description, and logo/favicon of your portfolio website.

6. **Final Steps**:
   - Save all changes to the `.env` file.
   - Run the application again using `npm run dev`.

If you encounter any issues during setup or have any questions, feel free to reach out for assistance.

4. **Run the Application**: Once the dependencies are installed and the environment variables are configured, you can run the application. Run the following command from the root directory:

   ```bash
   npm run dev
   ```

5. **Access the Application**: Once the application is running, you can access it in your web browser at `http://localhost:3000`.

## Deploy on vercel

To deploy your portfolio project on Vercel using the Vercel, follow these steps:

1. **Sign in to Vercel**: Visit the [Vercel website](https://vercel.com/) and sign in to your Vercel account.

2. **Import Project**: Once signed in, you'll land on your dashboard. Click on the "Import Project" button.

3. **Choose Git Repository**: Select the Git repository hosting your portfolio project (e.g., GitHub).

4. **Authorize Access**: If prompted, authorize Vercel to access your Git repository.

5. **Configure Project Settings**:

   - Choose the repository where your project is hosted.
   - Make sure to set up the environment variables as specified in your project's README.md file.
   - Click "Continue" to proceed.

6. **Deploy**: After configuring the settings, click on the "Deploy" button to start the deployment process.

7. **Monitor Deployment**: Vercel will begin deploying your project. You can monitor the deployment progress on the Vercel dashboard.

8. **Access Your Deployed Site**: Once the deployment is complete, Vercel will provide you with a unique URL where your site is hosted. You can access your deployed portfolio website using this URL.

That's it! Your portfolio project is now deployed on Vercel using the Vercel. You can continue to manage your project and monitor deployments from your Vercel dashboard.

## Usage

After setting up the application, you can start customizing your portfolio. Here are some key points to keep in mind:

- **Admin Login**: Access the admin dashboard and logging in with your credentials.
- **Manage Portfolio Content**: Use the admin dashboard to add, edit, or remove portfolio items such as projects, techstack, certification, admin info or any other content you want to showcase.
- **Customize Design**: Modify the frontend components and styles to customize the look and feel of your portfolio.
- **Extend Functionality**: Feel free to extend the functionality of the portfolio by adding new features or integrating with external services.

## Contributing

Contributions to this open-source project are welcome! If you have any ideas for improvements, bug fixes, or new features, please submit a pull request or open an issue on GitHub.

---

Thank you for using the **open-source-portfolio** repository! If you have any questions or need further assistance, feel free to reach out. Happy coding!

---

## 🌐 Socials: if stuck let me know here:

[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=Portfolio&logoColor=white)](https://squadtechinnovations.in/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:meer.uxair007@gmail.com)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://instagram.com/meeruzairwashere)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/meer-uzair-1b682b176)
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white)](https://facebook.com/profile.php?id=100069300923731)
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://youtube.com/@meeruzairwashere)
[![X](https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://twitter.com/miruzairwashere)

---
