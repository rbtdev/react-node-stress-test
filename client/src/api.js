class Api {
    constructor() {
    };

    getNewMessages(_opts) {
        return fetch('/api/messages')
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                } else {
                    return res.json()
                }
            })
            .catch(err => {
                console.log('Error:' + err);
                return [];
            });
    }
}

export default new Api ();