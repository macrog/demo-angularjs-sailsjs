/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

        jobTitle:{
            type:"string", 
            required:true
        },
        email:{
            type:"email",
            required:true,
            unique: true
        },
        firstName:{
            type:"string", 
            required:true,
            minLength: 2
        },
        lastName:{
            type:"string", 
            required:true,
            minLength: 3
        },
        company:{
            type:"string", 
            required:true            
        },
        startDate:{
            type:"date", 
            required:true      
        },
        city:{
            type:"string"
        },
        postalCode:{
            type:"string", 
            required:true,
            maxLength: 5,
            minLength: 5
        }
  }
};