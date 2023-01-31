const { DataTypes } = require('sequelize');
const db = require('../database/db')

const Articles = db.define('articles', {

    id_article: { type: DataTypes.STRING(100), primaryKey: true, allowNull: true },
    nom_article: { type: DataTypes.STRING(200), allowNull: true },
    oem_article: { type: DataTypes.STRING(300), allowNull: true },
    voicompatible_article: { type: DataTypes.STRING(), allowNull: true },
    image_article: { type: DataTypes.STRING(), allowNull: true },
    quantite_article: { type: DataTypes.INTEGER, allowNull: true },
    prix_article: { type: DataTypes.INTEGER, allowNull: true },
},
    { tableName: 'articles', timestamps: false, underscored: true }.
);
module.exports = Articles;