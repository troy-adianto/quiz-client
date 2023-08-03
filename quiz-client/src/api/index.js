import axios from 'axios'

/*
To be changed
e.g.
export const BASE_URL = 'http://workspacefd87eacbd94646c4-2.apps.cluster-225g7.225g7.sandbox1786.opentlc.com/';
*/
export const BASE_URL = 'http://localhost:5041/';

export const ENDPOINTS = {
    participant: 'participant',
    question:'question',
    getAnswers : 'question/getanswers'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
}