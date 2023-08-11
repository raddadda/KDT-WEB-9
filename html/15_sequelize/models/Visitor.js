//visitor에 대한 테이블 정의
const Visitor = function(sequelize, DataTypes) {
    //sequelizer는 models/index.js에 있는 sequelize
    //DataType는 models/index.js에 있는 Sequelize

    const model = sequelize.define(
        'visitor',
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                type : DataTypes.TEXT('medium')
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

module.exports = Visitor;