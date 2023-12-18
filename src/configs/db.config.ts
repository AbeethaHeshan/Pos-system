
import config from './env.config'

export const dbConfig = {
    mongo:{
        url:config.DB_URL+config.DB_PORT+'/'+config.DB_USER
    },
    server:{
        port: config.SERVER_PORT
    }
}

