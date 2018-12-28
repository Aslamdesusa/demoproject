const userModal = require('../table/user')
const Joi = require('joi')

const routes = [
{
	method: 'GET',
	path: '/test',
	handler: function(request, reply){
		return reply("i'm from routes")
	}
},
{
	method: 'GET',
	path: '/user/{user}',
	config:{
		validate:{
			params:{
				user: Joi.string()
			}
		}
	},
	handler: function(request, reply){
		userModal.findOne({email: request.params.user})
		.then(function(res){
			return reply(res)
		});
	}
},
{
	method: 'POST',
	path: '/user-login',
	handler: function(request, h){
		let newUser = new userModal({
			"email": request.payload.email,
			"password": request.payload.password
		});
		newUser.save()
		.then(function(res){
			return h({
				statusCode: 200,
				message: 'opration is success'
			});
		});
	}
},
{
	method: 'GET',
	path: '/user-pool',
	handler: function(request, h){
		userModal.find()
		.then(function(res){
			return h(res)
		});
	}
},
{
	method: 'PUT',
	path: '/user-pool',
	config:{
		validate:{
			params:{
				user: Joi.string()
			}
		}
	},
	handler: function(request, h){
		let newPassword = {
			$set:{
				password: request.query.password
			}
		}
		userModal.findOneAndUpdate({_id: request.query.id}, newPassword, function(err, data){
			if (err) {
				throw err
			}else{
				return h({
					messageCode: 200,
					message: 'opration successfull',
					data: data
				});
			}
		});
	}
},
{
	method: 'DELETE',
	path: '/delete/user-pool',
	handler: function(request, h){
		userModal.findOneAndRemove({_id: request.query.id})
		.then(function(res){
			return h({
				statusCode: 200,
				message: 'user-pool deleted successfully',
				data: res
			});
		});
	}
}
]
export default routes;