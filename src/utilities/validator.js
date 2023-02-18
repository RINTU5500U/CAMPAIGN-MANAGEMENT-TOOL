const joi = require('joi')
joi.objectId = require('joi-objectid')(joi)

const passwordResponse = {'string.pattern.base': ` "Password should be minimum 8 and maximum 15 character.It contains atleast--> 1 Uppercase letter, 1 Lowercase letter, 1 Number, 1 Special character"`}
const errors = (check) => {
    let messages = {"string.base": `${check} should be a type of 'String'.`,"string.empty": `${check} cannot be an empty field.`,"any.required": `${check} is a required field.`}
    return messages
}        
const number = (check) => {
    let messages = {"number.base": `${check} should be a type of 'number'.`,"number.empty": `${check} cannot be an empty field.`,"any.required": `${check} is a required field.`}
    return messages
}

module.exports = {
    //SCHEMA VALIDATION FOR USERMODEL
    userModel: joi.object({
        title: joi.string().trim().regex(/^(Mr|Mrs|Miss)+$\b/).messages({'string.pattern.base': `Title should be among [Mr,Mrs,Miss]`}).required().messages(errors("Title")),
         name: joi.string().trim().regex(/^[A-Za-z ]+$/).messages({'string.pattern.base': `Plz enter a valid name.`}).required().messages(errors("Username")),
        phone: joi.string().trim().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits only.`}).required().messages(errors("Mobile number")),
        email: joi.string().trim().regex(/.+\@.+\..+/).messages({'string.pattern.base': `Plz enter a valid emailId`}).required().messages(errors("emailId")),
     password: joi.string().trim().min(8).messages({'string.min': 'password should be minimum 8 characters'}).max(15).messages({'string.max': 'password should be maximum 15 characters'})
     .regex(/^\S{8,24}$/).messages(passwordResponse).required().messages(errors("Password"))
    }),
    updateUserModel: joi.object({
        title: joi.string().trim().regex(/^(Mr|Mrs|Miss)+$\b/).messages({'string.pattern.base': `Title should be among [Mr,Mrs,Miss]`}).messages(errors("Title")),
         name: joi.string().trim().regex(/^[A-Za-z ]+$/).messages({'string.pattern.base': `Plz enter a valid name.`}).messages(errors("Username")),
        phone: joi.string().trim().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits only.`}).messages(errors("Mobile number")),
        email: joi.string().trim().regex(/.+\@.+\..+/).messages({'string.pattern.base': `Plz enter a valid emailId`}).messages(errors("emailId")),
     password: joi.string().trim().min(8).messages({'string.min': 'password should be minimum 8 characters'}).max(15).messages({'string.max': 'password should be maximum 15 characters'})
     .regex(/^\S{8,24}$/).messages(passwordResponse).messages(errors("Password"))
    }),
     //LOGIN VALIDATION
     loginValidation: joi.object({
        email: joi.string().trim().regex(/.+\@.+\..+/).messages({'string.pattern.base': `emailId is in inValid format`}).required().messages(errors("emailId")),
     password: joi.string().trim().min(8).messages({'string.min': 'password should be minimum 8 characters'}).max(15).messages({'string.max': 'password should be maximum 15 characters'})
                  .regex(/^\S{8,24}$/).messages(passwordResponse).required().messages(errors("Password"))
              }),
    projectModel: joi.object({
        userId: joi.objectId().messages(errors("UserId")),
        projectName: joi.string().trim(/^[A-Za-z ]+$/).messages({'string.pattern.base': `Plz enter a valid project name.`}).messages(errors('Project')),
        openCost: joi.number().default(5).message(number('Open cost')),
        targetOpens: joi.number().default(100).message(number('Target Opens')),
        clickCost: joi.number().default(10).message(number('Click cost')),
        targetClicks: joi.number().default(5).message(number('Target clicks')),
        status: joi.string().trim().regex(/^(Inactive|Active)+$\b/).messages({'string.pattern.base': `Status should be either Active or Inactive`}).message(errors('Status'))
    }),
    campaignModel: joi.object({
    campaignName: joi.string().trim(/^[A-Za-z ]+$/).messages({'string.pattern.base': `Plz enter a valid campaign name.`}).messages(errors('Campaign')),
    opens: joi.number().default(0).message(number('Opens')),
    clicks: joi.number().default(100).message(number('Clicks')),
    status: joi.string().trim().regex(/^(Inactive|Active)+$\b/).messages({'string.pattern.base': `Status should be either Active or Inactive`}).message(errors('Status'))
})
}