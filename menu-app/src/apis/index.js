import axios from 'axios';

const api = {
    login: (request) => {
        const unwrapreq = ({email, password}) => ({email, password});
        const reqbody = unwrapreq(request);
        const prm = axios.post('user/login', reqbody);
        return prm.then(function (resp) {
            
        }).catch(function (err) {
            throw err;
        });
    },

    isAuthenticated: () => {
        return true;
    }
}

export default api