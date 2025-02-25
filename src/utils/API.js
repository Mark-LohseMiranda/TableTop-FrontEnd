import axios from "axios";
//local
// const URL_PREFIX = "http://localhost:3001"
//delploy
const URL_PREFIX = "http://ec2-3-86-81-95.compute-1.amazonaws.com:5001"


const API = {
    // ~~~~~~~~~~~~~~~~~~~~~~~USER ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    signup: (usrData) => {
        return axios.post(`${URL_PREFIX}/api/user/signup`, usrData)
    },
    login: (usrData) => {
        return axios.post(`${URL_PREFIX}/api/user/login`, usrData)
    },
    findSelf: (tkn) => {
        return axios.get(`${URL_PREFIX}/api/user`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findUserById:(id)=>{
        return axios.get(`${URL_PREFIX}/api/user/id${id}`)
    },
    findUserByEmail:(email,tkn)=>{
        return axios.get(`${URL_PREFIX}/api/user/email${email}`,{headers:{
            "Authorization": `Bearer ${tkn}`
        }})
    },
    getProfile: (tkn) => {
        return axios.get(`${URL_PREFIX}/api/user/profile`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    update: (usrData, tkn) => {
        return axios.put(`${URL_PREFIX}/api/user/update`, usrData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteUser: (tkn) => {
        return axios.delete(`${URL_PREFIX}/api/user`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },

    // ~~~~~~~~~~~~~~~~~~~~~CAMPAIGN ROUTES~~~~~~~~~~~~~~~~~~~~~~~~//
    createCampaign: (cmpgnData, tkn) => {
        return axios.post(`${URL_PREFIX}/api/campaign`, cmpgnData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findCampaign: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/campaign/id${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    updateCampaign: (id, update, tkn) => {
        return axios.put(`${URL_PREFIX}/api/campaign/${id}`, update, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteCampaign: (cmpgnData, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/campaign/${cmpgnData}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },

    // ~~~~~~~~~~~~~~~~~~~~~USERCAMPAIGN ROUTES~~~~~~~~~~~~~~~~~~~~~~~~//
    createUserCampaign:(campaign_id,tkn)=>{
        // console.log(campaign_id);
        return axios.post(`${URL_PREFIX}/api/usercampaign`,{campaign_id,},{headers:{
            "Authorization": `Bearer ${tkn}`
        }})
    },
    gmDelUserCampaign: (campaign_id, user_id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/usercampaign/gmdel${campaign_id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            },
            data: {
                user_id,
            }
        })
    },
    userDelUserCampaign: (campaign_id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/usercampaign/userdel${campaign_id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },

    // ~~~~~~~~~~~~~~~~~~~~~~~INVITE ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    createInvite: (invite, tkn) => {
        return axios.post(`${URL_PREFIX}/api/invite/`, invite, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteInvite: (id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/invite/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },

    // ~~~~~~~~~~~~~~~~~~~~~CHARACTER ROUTES~~~~~~~~~~~~~~~~~~~~~~~~//
    createCharacter: (charData, campaign_id, tkn) => {
        return axios.post(`${URL_PREFIX}/api/character/camp${campaign_id}`, charData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findCharacter: (id) => {
        return axios.get(`${URL_PREFIX}/api/character/id${id}`)
    },
    findCharacterbyUser: (user_id) => {
        return axios.get(`${URL_PREFIX}/api/character/user${user_id}`)
    },
    findCharacterbyCampaign: (campaign_id) => {
        return axios.get(`${URL_PREFIX}/api/character/camp${campaign_id}`)
    },
    updateCharacter: (charData, id, tkn) => {
        return axios.put(`${URL_PREFIX}/api/character/update${id}`, charData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteCharacter: (id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/character/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },

    // ~~~~~~~~~~~~~~~~~~~~~EQUIPMENT ROUTES~~~~~~~~~~~~~~~~~~~~~~~~// 
    createEquipment: (id, equipData, tkn) => {
        return axios.post(`${URL_PREFIX}/api/inventory/${id}`, equipData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findEquipmentItem: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/inventory/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findEquipmentbyChar: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/inventory/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    updateEquipment: (id, equipData, tkn) => {
        return axios.put(`${URL_PREFIX}/api/inventory/${id}`, equipData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteEquipment: (id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/inventory/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },


    // ~~~~~~~~~~~~~~~~~~~~~~~SPELL ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    createSpell: (id,spellData, tkn) => {
        return axios.post(`${URL_PREFIX}/api/spell/${id}`, spellData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findSingleSpell: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/spell/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findSpellbyChar: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/spell/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    updateSpell: (id, spellData, tkn) => {
        return axios.put(`${URL_PREFIX}/api/spell/${id}`, spellData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteSpell: (id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/spell/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },


    // ~~~~~~~~~~~~~~~~~~~~~~~FEATURE ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~//
    createFeature: (id,featureData, tkn) => {
        return axios.post(`${URL_PREFIX}/api/feature/${id}`, featureData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findSingleFeature: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/feature/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findFeaturebyChar: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/feature/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    updateFeature: (id, featureData, tkn) => {
        return axios.put(`${URL_PREFIX}/api/feature/${id}`, featureData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteFeature: (id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/feature/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },


    // ~~~~~~~~~~~~~~~~~~~~~PROFICIENCY ROUTES~~~~~~~~~~~~~~~~~~~~~~~//
    createNewProficiency:(id,proficiencyData,tkn)=>{
        return axios.post(`${URL_PREFIX}/api/proficiency/${id}`,proficiencyData,{headers:{
            "Authorization": `Bearer ${tkn}`
        }})
    },
    findSingleProficiency: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/proficiency/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findProficiencybyChar: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/proficiency/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    updateProficiency: (id, proficiencyData, tkn) => {
        return axios.put(`${URL_PREFIX}/api/proficiency/${id}`, proficiencyData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteProficiency: (id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/proficiency/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },



    // ~~~~~~~~~~~~~~~~~~~~~~~BLOG ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    createBlogPost: (blogData, tkn) => {
        return axios.post(`${URL_PREFIX}/api/blog`, blogData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findAllBlogPost: (tkn) => {
        return axios.get(`${URL_PREFIX}/api/blog/`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findBlogPost: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/blog/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    updateBlogPost: (id, blogData, tkn) => {
        return axios.put(`${URL_PREFIX}/api/blog/${id}`, blogData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteBlogPost: (id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/blog/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },

    // ~~~~~~~~~~~~~~~~~~~~~COMMENT ROUTES~~~~~~~~~~~~~~~~~~~~~~~~//
    createComment: (id, commentData, tkn) => {
        return axios.post(`${URL_PREFIX}/api/comment/${id}`, commentData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    findComment: (id, tkn) => {
        return axios.get(`${URL_PREFIX}/api/comment/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    updateComment: (id, commentData, tkn) => {
        return axios.put(`${URL_PREFIX}/api/comment/${id}`, commentData, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    deleteComment: (id, tkn) => {
        return axios.delete(`${URL_PREFIX}/api/comment/${id}`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },

    // ~~~~~~~~~~~~~~~~~~~~~TOKEN ROUTES~~~~~~~~~~~~~~~~~~~~~~~~//
    createToken: (camp_id, token) => {
        return axios.post(`${URL_PREFIX}/api/token/camp${camp_id}`, token, {
        })
    },
    findTokens: (camp_id) => {
        return axios.get(`${URL_PREFIX}/api/token/camp${camp_id}`)
    },
    updateToken: (id, token) => {
        return axios.put(`${URL_PREFIX}/api/token/camp${id}`, token)
    },
    deleteToken: (id,token_id ) => {
        return axios.delete(`${URL_PREFIX}/api/token/deleteone/camp${id}/`, { 
            data: {
                token_id,
            }
        })
    },
}

export default API;