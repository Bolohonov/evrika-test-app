import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;

const api = {
    check(username) {
        const URL = BASE_URL+'/api/'+username;
        let result = {"success":false, "reason": "", "check": false};

        return new Promise((resolve) =>
        {
            axios.get(URL).then(response => {
                result.success = true;
                result.check = response.data;
                resolve(result);
            }).catch(error => {
                result.reason = error;
                resolve(result);
            });
        });
    }
};

export default {
    install: (app) => {
        app.config.globalProperties.$api = api;
    }
}