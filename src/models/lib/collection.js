'use strict'
class Collection {
    constructor(model){
        this.model=model
    }

    async read(id,option={  }){
        let record = null;
        //  option['where']={id}
        console.log(id,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")

        if (id){

            record = await this.model.findOne( {where:{id} });
        }else {
             record = await this.model.findAll()

        }
        return record;

    }

    async create (obj){

        let addRecord = await this.model.create(obj);
        return addRecord;

    }

    async update(id,obj){
        let record = await this.model.update(obj, {where:{id} })
        let updatedRecord = await this.read(id)

        return updatedRecord;
    }   
    async delete(id){
        let checking = await this.model.findOne({where:{id} })
        let x = checking
        if(checking){
            let record = await this.model.destroy({where:{id} })
            return `the item has been deleted ${x} `;
        } else {
            throw new Error(`The id you send is not exists!!!`)
        }

    }

    async readAll(id, model) {
        const records = await this.model.findOne({
          where: { id },
          include: model
        });
        return records;
      }
    
    






}
module.exports=Collection