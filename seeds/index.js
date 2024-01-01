const sequelize = require('../config/connection');
const seedBlog = require('./blogposts');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedBlog()
  
  process.exit(0);
};

seedDatabase();