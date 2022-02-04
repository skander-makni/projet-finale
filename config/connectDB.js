const mongoose=require ('mongoose')
 const connectDB= async () =>{
     try {
         await mongoose.connect("mongodb+srv://skander:makniadmis2017@cluster0.ehfd8.mongodb.net/authentification?retryWrites=true&w=majority")
         console.log('DATABASE is connected')
     } catch (error) {
         console.log('can not connect to DB')
     }
 }
 module.exports=connectDB