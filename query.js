


const db = require('./db')

const User = require('./models/user')


db.on("error", console.error.bind(console, "MongoDB connection error:"));


const findAll = async () => {
    const users = await User.find()
    console.log('All users:', users)
}

const createUser = async () => {
    const user = new User ({name: "Carol", age: 24, status: "active"});
    await user.save()
    console.log("Create user:", user)
}


const deleteUser = async () => {
    const deleted = await User.deleteOne({name: "Carol"})
    console.log("deleted")
}

const updateUser = async () => {
    const updated = await User.updateOne({ name: 'Benny'}, { name: 'Benjamin'});
    console.log(updated);
}


const run = async () => {
    // await findAll();
    // await createUser();
    // await deleteUser();
    await updateUser();
    process.exit();

}

run()

