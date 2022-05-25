import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:4000',
})

export const appendApplicant = payload=>api.post(`/entry/applicant`,payload);
export const appendAcademics = payload=>api.post(`/entry/academic`,payload);
export const appendParents = payload=>api.post(`/entry/parents`,payload);
export const appendAddress = payload=>api.post(`/entry/address`,payload);
export const getTen = id=>api.get(`/entry/getTen/${id}`);
export const getTwelve = id=>api.get(`/entry/getTwelve/${id}`);
export const getOther = id=>api.get(`/entry/getOther/${id}`);
export const getTextSms=()=>api.get(`/entry/getTextSms`);
export const getEmailSms=()=>api.get(`/entry/getEmailSms`);
export const postEmailSms=(payload)=>api.post(`/entry/postEmail`,payload);
export const postTextSms=(payload)=>api.post(`/entry/postSms`,payload);


const apis={
    appendApplicant,
    appendAcademics,
    appendParents,
    appendAddress,
    getTen,
    getTwelve,
    getOther,
    getTextSms,
    postTextSms,
    getEmailSms,
    postEmailSms

}

export default apis;