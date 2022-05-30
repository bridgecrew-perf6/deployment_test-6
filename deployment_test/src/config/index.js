//Contains some configuaration details

const env = process.env.REACT_APP_ENV;
//environment variables are variables used by the application itself
//details such as secret keys/environment are part of the env't variables
//In react, environment variables start with REACT_APP

let config = {
    baseURL: "https://localhost"
}

switch (env.toUpperCase()) {
    case "STAGE":
        config.baseURL="https://stage.skillsunion.com"
        break;
    case "PRODUCTION":
        config.baseURL="https://skillsunion.com"
        break;
}

export default config;