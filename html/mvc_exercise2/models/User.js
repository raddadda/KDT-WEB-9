//visitor에 대한 테이블 정의
const User = function(sequelize, DataTypes) {
    //sequelizer는 models/index.js에 있는 sequelize
    //DataType는 models/index.js에 있는 Sequelize

    const model = sequelize.define(
        'user',
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            userid: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            
        },
        // {
        //     tableName : 'visitor',
        //     //이름 복수형 만들어주는것
        //     freezeTableName: true,

        //     timestamps: false,
        // }
        );
        return model;
};

module.exports = User;