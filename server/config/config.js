

const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: 'supersecretpassword123',
        DATABASE: 'mongodb://localhost:27017/booksShelf'
      //  DATABASE: 'mongodb://craiglist:123456@ds163119.mlab.com:63119/craiglist',
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}
































































