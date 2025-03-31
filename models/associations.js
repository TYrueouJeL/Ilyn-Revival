const Adventurer = require('./Adventurer');
const Personage = require('./Personage');
const Class = require('./Class');
const Level = require('./Level');

Adventurer.belongsTo(Personage, { foreignKey: 'IdPersonage' });
Personage.hasOne(Adventurer, { foreignKey: 'IdPersonage' });

Personage.belongsTo(Class, { foreignKey: 'IdClass' });

Personage.belongsTo(Level, { foreignKey: 'IdLevel' });

console.log('Associations entre les modèles établies avec succès.');