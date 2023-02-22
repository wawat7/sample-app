# Usage

## Requirement
1. Credential BNI
2. NPM
3. Nodejs version v16.18.1 or greater

## Step By Step
### How to Get Credential BNI
1. Go to [Digital Services](https://digitalservices.bni.co.id)
2. [Register](https://digitalservices.bni.co.id/en/component/apiportal/registration) first if not have account
3. [Login](https://digitalservices.bni.co.id/en/?option=com_users&view=login)
4. Go to Menu - [My Application](https://digitalservices.bni.co.id/en/profile-menu/apps)
5. Click [Create Application](https://digitalservices.bni.co.id/en/profile-menu/apps/application/create)
6. Fill field application
7. Save application
8. Go to your application
9. See API KEY and Oauth
    - API KEY --> BNI_API_KEY
    - API SECRET --> BNI_API_SECRET
    - Client ID (Oauth) --> BNI_CLIENT_ID
    - Client Secret (Oauth) --> BNI_CLIENT_SECRET
    - Application Name --> BNI_APP_NAME
    - Account Number BNI --> BNI_ACCOUNT_NUMBER


### How to Use this project
#### Backend
1. Clone this repository
2. Go to folder backend
3. Create new file .env
4. Content .env same with .env.example
5. Modify .env with your credential BNI
6. Install dependency with command : 
```javascript
npm install
```
7. Run application backend with command: 
```javascript
npm start
```



#### Frontend
1. Go to frontend
2. Create new file .env
3. Content .env same with .env.example
4. Modify .env with backend url
5. Install dependency : 
```javascript
npm install
```
6. Run your application frontend : 
```javascript
npm start
```
 