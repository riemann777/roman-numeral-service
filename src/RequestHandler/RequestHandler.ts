//
// export const requestHandler = (request, response) => {
//
//     let data = _.extend(request.body || {}, request.params, request.query) || {};
//
//     return callPromisified(controller, this.callback, data, request.headers)
//         .then((result) => {
//
//             return response.send(200, result);
//
//         }).catch(InvalidRequestException, (error) => {
//
//             return response.send(400, error.message);
//
//         }).catch((error) => {
//
//             return response.send(500, error.message);
//
//         });
//
// };
//
//
// function callPromisified(scope, callback, data, headers) {
//
//     try {
//
//         let future = callback.call(scope, data, headers);
//
//         if (!(future instanceof Promise)) {
//
//             return Promise.resolve(future);
//         }
//
//         return future;
//
//     } catch (error) {
//
//         return Promise.reject(error);
//
//     }
//
// }