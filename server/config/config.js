//===============================
//puerto
//===============================
process.env.PORT = process.env.PORT || 3000;

//===============================
//Entorno
//===============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//===============================
//Vencimiento del token
//===============================
//60 segundos 
//60segundos
//24 hrs
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//===============================
//SEED de autentificación
//===============================
process.env.SEED = process.env.SEED || 'esto-es-el-seed-en-desarrollo';


//===============================
//Entorno
//===============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    urlDB = process.env.MONGO_URI;

}
process.env.URLDB = urlDB;


//===============================
//google client-id
//===============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '380532178057-stj005cb56f1cj7mt25jr8a1bjq0a1ra.apps.googleusercontent.com';