const {PrismaClient} = require('@prisma/client')

const prismaclinet = new PrismaClient()

const createToken = (user)=>{
    let expiredAt = new Date();

    expiredAt.setSeconds(
      expiredAt.getSeconds() + config.jwtRefreshExpiration
    );
  
    let _token = uuidv4();
  
    let _object = prismaclinet.create({
      token: _token,
      user: user._id,
      expiryDate: expiredAt.getTime(),
    });

    _object.save()
    
}