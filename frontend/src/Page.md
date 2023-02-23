## Welcome

Welcome to BNI API Portal interactive sample apps. We are thrilled to have you as a new user. Our API Portal provides access to a wide range of financial services and resources, and we are excited to see how you will utilize them in your own projects.

Please feel free to reach out to our support team by email to bni.dgl.apm@gmail.com if you have any questions or concerns as you get started with our platform. We are committed to providing the best possible experience for our users, and we look forward to seeing the innovative and creative ways in which you will use our resources to achieve your goals. Thank you for choosing BNI API Portal!

## One Gate Payment Interactive Apps

This sample app is designed to simulate the One Gate Payment API service product, which is one of many advantages of our API Portal. With this feature, you will learn how to retrieve the balance of an account that is passed to our sandbox, and how the sandbox responds by sending the balance of the account.

By using this sample app, you will gain hands-on experience with our API and learn how to integrate our services into your own projects. We hope that this will help you to better understand the capabilities of our platform and how it can benefit your business.

In addition to simulating the one gate payment feature, this sample app also includes an introduction to using our NPM library to facilitate the integration process. By including our NPM in our sample app, we aim to make it easier for developers to understand and use our API.

_Before running the sample app, please ensure that you have registered on our API Portal website and created a sample application. This will allow you to generate a secret key that is required to authenticate your API requests._

### ✅ How to register application in BNI Portal

1. Open [https://digitalservices.bni.co.id/en/](https://digitalservices.bni.co.id/en/) , click `Register/Login` , and `Register Here`
2. Fill all the information and click `Sign Up`
3. After email is verified, click Application from menu and create application

![Untitled](https://lh3.googleusercontent.com/pw/AMWts8B0hTOGiY-AUSKeB7z9sxKaiUiNhmU5ri4yHedBwnf1CUJhc90y8Yj_NN-Ljq5C9ax-KxGCVKM42bnTypLLLRHgZPx4QugMhXNpUXoIXGAVD2a6IJe5cTkn1ZV-0uMwLxu6e0QKkjB5IO-VJF5FaOw=w2658-h1064-no?authuser=1)

4. Fill the Application form, enable application and click next
5. Choose API Product Sandbox you want to test, make sure you tick One Gate Payment and click next

![Untitled](https://lh3.googleusercontent.com/pw/AMWts8D5AIJeju2KsHoMXXxi8n_8LWI18Q1QHswZMpulhm2Dargh1uEruuXdXSH6duu7Z0PHP3df9Wlp0mZvwnAdc012OX8uenEl1VFGma4mnj3UYHiOtPj1ID4mcY2zcQ9DBd5QXYIq2XSKSR98bi7CS8I=w2800-h620-no?authuser=1)

6. You will redirect to review page, and click finish.
7. Edit your application , click Authentication, generate your API Key and public OAuth, system will generete along with the secret number
   ![Untitled](https://lh3.googleusercontent.com/pw/AMWts8AvTB6yZXgc2g6qERCmYTiTj7V3Tc8XWFgAcvF7YrZ_byqJJBfi1eUdacy5kZtfgWXNpgu6s9NT0qWAjNq4o7KrHxrGrVhmQKxogQoAKKzo2Dd9dlpf5RK-lVubmkEWfBwkv7J3xFGDmPaOf-90IEs=w2790-h1016-no?authuser=1)
8. Open .env file in directory backend/.env and change below records

   - BNI_APP_NAME = Application Name
   - BNI_API_KEY = API KEY
   - BNI_API_SECRET = API SECRET KEY
   - BNI_CLIENT_ID = OAuth Credentials Client ID
   - BNI_CLIENT_SECRET= OAuth Credentials Secret Number

9. Click Add terminal in stackblitz and type `cd backend/` enter
10. Type `npm install` enter, `npm start` enter , and your backend will be run, you might see your backend is at your right terminal
    ![untitled](https://lh3.googleusercontent.com/pw/AMWts8B2lyz6zvzASBKJYXVpEJaPtHdzBdwH2PtR_IIqtao9Dfab294HzFvs7bQtaDbgmfkM3JTOuAmOBbdz7r0__Wzo046bmuCeh4lrZwR1uQoflVtDh6n1BrHtTXttjedSsxTY-7X4Li7g9-ndq5tgmK4=w1352-h428-no?authuser=1)
11. Click Get Balance and you will get the balance straight from our sandbox
